// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import request from "request";

// Only Relevant in POST request

type Data = {
  x: number;
  y: number;
};

type Prices = {
  livePrice: number;
  endOfDayPrice: number;
};

export default async function handler(
  request: NextApiRequest,
  reply: NextApiResponse<Data[] | string | Prices[]>
) {
  if (request.method === "GET" && request.query.type === "hist") {
    const symbol = request.query.symbol as string;

    try {
      // Retrieve historical data from Alpha Vantage
      const alphaData = await axios.get("https://www.alphavantage.co/query", {
        params: {
          function: "TIME_SERIES_DAILY_ADJUSTED",
          symbol: symbol,
          outputsize: "full",
          apikey: process.env.alphaKey,
        },
      });

      // Extract the last 1000 days of stock data
      const alphaTimeSeriesData = Object.values(
        alphaData.data["Time Series (Daily)"]
      )
        .map((data) => parseFloat(data as any["4. close"]))
        .slice(0, 1000)
        .reverse();

      // Generate a list of integers from 1 to 1000
      const days = [];
      for (let i = 0; i <= 999; i++) {
        days.push(i);
      }

      // Combine the days and stock data into the response format
      const responseData = days.map((day, index) => ({
        x: day,
        y: alphaTimeSeriesData[index],
      }));

      reply.send(responseData);
    } catch (error) {
      console.log(error);
      reply.status(500).send("Error retrieving stock data");
    }
  }

  if (request.method === "GET" && request.query.type === "prices") {
    const symbol = request.query.symbol;

    try {
      const yahooData = await axios.get(
        `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`,
        {
          params: {
            range: "1d",
            includePrePost: false,
            interval: "5m",
            region: "US",
            lang: "en-US",
            includeAdjustedClose: true,
          },
        }
      );
      const yahooLivePrice =
        yahooData.data.chart.result[0].meta.regularMarketPrice;

      const response = await axios.get("https://www.alphavantage.co/query", {
        params: {
          function: "GLOBAL_QUOTE",
          symbol: symbol,
          apikey: process.env.alphaKey,
        },
      });

      const alphaLiveData = response.data["Global Quote"];
      if (!alphaLiveData) {
        throw new Error("Error retrieving Alpha Vantage data");
      }

      const alphaLivePrice = parseFloat(alphaLiveData["05. price"]);

      const alphaData = await axios.get("https://www.alphavantage.co/query", {
        params: {
          function: "TIME_SERIES_DAILY_ADJUSTED",
          symbol: symbol,
          apikey: process.env.alphaKey,
        },
      });
      const alphaMetaData = alphaData.data["Meta Data"];
      const alphaTimeSeriesData = alphaData.data["Time Series (Daily)"];
      if (!alphaMetaData || !alphaTimeSeriesData) {
        throw new Error("Error retrieving Alpha Vantage data");
      }
      const alphaLastRefreshed = alphaMetaData["3. Last Refreshed"];
      const alphaEodPrice = alphaTimeSeriesData[alphaLastRefreshed]["4. close"];

      const endOfDayData = await axios.get(
        `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`,
        {
          params: {
            range: "1d",
            includePrePost: false,
            interval: "1d",
            region: "US",
            lang: "en-US",
            includeAdjustedClose: true,
          },
        }
      );
      const endOfDayPriceData =
        endOfDayData.data.chart.result[0].indicators.adjclose[0].adjclose;
      if (!endOfDayPriceData || endOfDayPriceData.length === 0) {
        throw new Error("Error retrieving Yahoo Finance end-of-day data");
      }

      const endOfDayPrice =
        (endOfDayPriceData[endOfDayPriceData.length - 1] +
          parseFloat(alphaEodPrice)) /
        2;

      const livePrice =
        (parseFloat(yahooLivePrice) + parseFloat(alphaLivePrice as any)) / 2;

      const dataC = { livePrice, endOfDayPrice };

      reply.send(dataC);

      // Finnhub
    } catch (error) {
      console.log(error);
      reply.status(500).send("Error retrieving stock data");
    }
  }
}

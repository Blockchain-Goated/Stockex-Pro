import { NextApiRequest, NextApiResponse } from "next";
import withSession from "../../libs/session";

export default withSession(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const user = req.session.get("user");
    if (user) {
      res.json({
        isLoggedIn: true,
        ...user,
      });
    } else {
      res.json({
        isLoggedIn: false,
      });
    }
  }
);

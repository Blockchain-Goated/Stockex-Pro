import { withSessionRoute } from "pages/lib/config/withSession";
import dbConnect from "../../../libs/dbConnect";
import User from "../../../models/user.model";
import bcrypt from "bcryptjs";
import httpStatus from "http-status-ts";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    await dbConnect();
    const user = await User.findOne({ email: email.toLowerCase() });
    if (user && user.password === password) {
      req.session.user = {
        id: user._id,
        email: user.email,
      };
      await req.session.save();
      return res.status(httpStatus.HttpStatus.OK).end();
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await new User({
        name,
        email,
        password: hashPassword,
      });
      await user.save();
      const newUser = await User.findOne({ email: email.toLowerCase() });
      req.session.user = {
        id: newUser._id,
        email: newUser.email,
      };
      req.session.set({});
      await req.session.save();
      return res.status(httpStatus.HttpStatus.OK).end();
    }
  }
  return res.status(404).send("");
}

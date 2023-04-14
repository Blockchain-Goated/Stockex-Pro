import { withSessionRoute } from "../../libs/session";
import dbConnect from "../../libs/dbConnect";
import UserModel from "../../models/user.model";
import bcrypt from "bcryptjs";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
  try {
    const { email, password } = req.body;
    await dbConnect();
    const user = await UserModel.findOne({ email: email.toLowerCase() });
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = {
        id: user._id,
        email: user.email,
      };
      await req.session.save();
      return res.status(200).send();
    } else {
      return res.status(400).send();
    }
  } catch (err) {
    return res.status(409).send(`Error in login server: ${err}`);
  }
}

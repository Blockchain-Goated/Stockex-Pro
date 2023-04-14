import { withSessionRoute } from "../../libs/session";
import dbConnect from "../../libs/dbConnect";
import UserModel from "../../models/user.model";
import bcrypt from "bcryptjs";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
  const { name, email, password } = req.body;
  await dbConnect();
  try {
    const userExists = await UserModel.findOne({
      email: email.toLowerCase(),
    });
    if (!userExists) {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new UserModel({
        name,
        email,
        password: hashPassword,
      });
      await user.save();
      const newUser = await UserModel.findOne({ email: email.toLowerCase() });
      req.session.user = {
        id: newUser._id,
        email: newUser.email,
      };
      await req.session.save();
      return res.status(200).send();
    } else {
      return res.status(409).send();
    }
  } catch (err) {
    return res.status(500).send(`Error as we thought: ${err}`);
  }
}

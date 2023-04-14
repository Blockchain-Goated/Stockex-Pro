import { withSessionRoute } from "../../libs/session";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
  req.session.destroy();
  res.send({ ok: true });
}

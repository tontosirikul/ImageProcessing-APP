import express from "express";
import imagelist from "./api/imagelist";
import resize from "./api/resize";
const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response): void => {
  res.send("main api");
});

routes.use("/resize", resize);
routes.use("/imagelist", imagelist);

export default routes;

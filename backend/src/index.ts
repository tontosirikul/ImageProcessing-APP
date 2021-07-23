import express from "express";
import cors from "cors";
import routes from "./routes/api";
import config from "./config";
const app = express();

const port = config.PORT;

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("Home");
});

app.get("*", (req: express.Request, res: express.Response): void => {
  res.send("No route");
});

app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;

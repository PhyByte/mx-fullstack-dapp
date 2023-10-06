import dotenv from "dotenv";
import express, { Express, Request, Response, json, urlencoded } from "express";
import morgan from "morgan";

import mvxRouter from "./services/mvx/controller";

dotenv.config();

export const app: Express = express();
const port = process.env.PORT || 4000;

app.set("trust proxy", true);
app.use(json({ limit: "50mb" }));
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

// Setting the Access-Control-Allow-Origin header to "*" allows any domain to interact with your API,
// which might pose a security risk. If you know the specific domains that will need access, it would be
//  better to specify those instead of allowing all.
app.get("/up", async (req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json("All Systems Up");
});

app.use("/mvx", mvxRouter);

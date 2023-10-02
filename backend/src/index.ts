import dotenv from "dotenv";
import express, { Express, Request, Response, json, urlencoded } from "express";
import http from "http";
import morgan from "morgan";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.set("trust proxy", true);
app.use(json({ limit: "50mb" }));
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

// Setting the Access-Control-Allow-Origin header to "*" allows any domain to interact with your API, 
// which might pose a security risk. If you know the specific domains that will need access, it would be
//  better to specify those instead of allowing all.
app.get("/up", (req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("All Systems Up");
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running`);
});

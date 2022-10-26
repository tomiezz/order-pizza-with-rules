import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import http from "http";
import router from "./src/routes";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const allowCrossDomain = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
};
app.use(allowCrossDomain);

app.use("/", router);

const server = http.createServer(app);

server.listen(PORT, () => `Server is running at port: ${PORT}`);

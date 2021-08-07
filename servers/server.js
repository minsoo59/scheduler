import express from "express";
import cors from "cors";
import session from "express-session";
import morgan from "morgan";
import MongoStore from "connect-mongo";
import homeRouter from "./routes/homeRouter.js";

import { localsMiddleware } from "./middlewares.js";

const app = express();
const logger = morgan("dev");
app.use(cors());

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET || "http://localhost:3000",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL || "mongodb://127.0.0.1:27017/scheduler",
    }),
  })
);
app.use(localsMiddleware);
app.use("/", homeRouter);

export default app;

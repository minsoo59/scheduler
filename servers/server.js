import express from "express";
import cors from "cors";
import morgan from "morgan";
import homeRouter from "./routes/homeRouter.js";

const app = express();
const logger = morgan("dev");
app.use(cors());

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", homeRouter);

export default app;

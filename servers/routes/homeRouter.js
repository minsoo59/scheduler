import express from "express";
import { home } from "../controllers/homeController.js";
import { postJoin } from "../controllers/userController.js";

const homeRouter = express.Router();

homeRouter.get("/", home);
homeRouter.route("/join").post(postJoin);
homeRouter.route("/login");

export default homeRouter;

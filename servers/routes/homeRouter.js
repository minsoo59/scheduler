import express from "express";
import { home, main } from "../controllers/homeController.js";
import {
  getJoin,
  postEditProfile,
  postJoin,
  postLogin,
} from "../controllers/userController.js";

const homeRouter = express.Router();

homeRouter.get("/", home);
homeRouter.route("/join").post(postJoin);
homeRouter.route("/login").post(postLogin);
homeRouter.route("/profile").post(postEditProfile);
homeRouter.get("/main", main);

export default homeRouter;

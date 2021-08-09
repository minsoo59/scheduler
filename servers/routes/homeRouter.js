import express from "express";
import { home, main } from "../controllers/homeController.js";
import {
  getEditProfile,
  postEditProfile,
  postJoin,
  postLogin,
  getLogin,
} from "../controllers/userController.js";

const homeRouter = express.Router();

homeRouter.get("/", home);
homeRouter.route("/join").post(postJoin);
homeRouter.route("/login").get(getLogin).post(postLogin);
homeRouter.route("/profile").get(getEditProfile).post(postEditProfile);
homeRouter.get("/main", main);

export default homeRouter;

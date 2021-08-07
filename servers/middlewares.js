import { createProxyMiddleware } from "http-proxy-middleware";

export const proxy = (req, res, next) => {
  createProxyMiddleware("/", {
    target: "http://localhost:3000/",
    changeOrigin: true,
  });
  next();
};

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Scheduler";
  res.locals.loggedInUser = req.session.user || {};
  // res.locals.isHeroku = isHeroku;
  next();
};

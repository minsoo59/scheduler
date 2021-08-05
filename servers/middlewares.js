import { createProxyMiddleware } from "http-proxy-middleware";

export const proxy = (req, res, next) => {
  createProxyMiddleware("/", {
    target: "http://localhost:3000/",
    changeOrigin: true,
  });
  next();
};

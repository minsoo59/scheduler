export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Scheduler";
  res.locals.loggedInUser = req.session.user || {};
  // res.locals.isHeroku = isHeroku;
  next();
};

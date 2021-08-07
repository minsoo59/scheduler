export const logout = (req, res) => {
  req.session.loggedIn = null;
  req.session.user = null;
  return res.json({ message: "logout success!" });
};

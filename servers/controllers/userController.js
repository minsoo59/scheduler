import User from "../models/User.js";

export const postJoin = async (req, res) => {
  const {
    user: [{ username }, { email }, { password }],
  } = req.body;

  console.log(username, email, password);

  try {
    await User.create({
      username,
      email,
      password,
    });
    return res.redirect("/");
  } catch (err) {
    return res.status(400).render("join", { errorMessage: error_message });
  }
};

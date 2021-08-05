import User from "../models/User.js";

export const postJoin = async (req, res) => {
  const {
    user: [{ username }, { email }, { password }],
  } = req.body;

  console.log(username, email, password);
};

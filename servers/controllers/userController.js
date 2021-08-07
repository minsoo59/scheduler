import bcrypt from "bcrypt";
import User from "../models/User.js";

export const getJoin = async (req, res) => {
  // 임시
  const checkId = await User.find({});
  console.log("checkId :" + checkId._id);
};
export const postJoin = async (req, res) => {
  const { username, email, password } = req.body;
  // ✔ username, email 중복 여부
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res
      .status(400)
      .json({ message: "This username or email is already taken." });
  }
  try {
    await User.create({
      username,
      email,
      password,
    });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
  return res.status(200).json({ message: "Successful" });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, socialOnly: false });
    // ✔ username
    if (username !== user.username) {
      return res
        .status(400)
        .json({ message: "This username is already taken." });
    }
    // ✔ password
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(400).json({ message: "Wrong password" });
    }
    // session init
    req.session.loggedIn = true;
    req.session.user = user;
    // console.log("session login : " + req.session.user);
    return res.status(200).json({ message: "Successful" });
  } catch (err) {
    return res.status(400).json({ error: "wrong" });
  }
};

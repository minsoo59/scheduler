import User from "../models/User.js";
export const getJoin = async (req, res) => {
  const checkId = await User.find({ _id });
  console.log(checkId);
};
export const postJoin = async (req, res) => {
  const { username, email, password } = req.body;
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
    await User.findOne({ username, socialOnly: false });
    // if (username !== User.username) {
    //   return res.status(400);
    // }
    // if (password !== User.password) {
    //   return res.status(400);
    // }
    return res.status(200).json({ message: "Successful" });
  } catch (err) {
    return res.status(400).json({ error: "wrong" });
  }
};

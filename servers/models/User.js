import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  socialOnly: { type: String, default: false },
  username: { type: String, required: true, unique: true },
  password: { type: String },
});

const User = mongoose.model("User", userSchema);
export default User;

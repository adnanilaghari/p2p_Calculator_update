import User from "@/models/User";
import { connectDB } from "@/middleware/connectDB";
var CryptoJS = require("crypto-js");

const handler = async function (req, res) {
  try {
    const { email, password } = JSON.parse(req.body);

    // Encrypt
    var encryptedPassword = CryptoJS.AES.encrypt(
      password,
      "p2pclouds"
    ).toString();

    const newUser = new User({
      email,
      password:encryptedPassword,
    });
   await newUser.save();

    res.status(200).json({ success: true, message: "Successfully Created" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Something Went Wrong" });
  }
};

export default connectDB(handler);

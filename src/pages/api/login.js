import { connectDB } from "@/middleware/connectDB";
import User from "@/models/User";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async function (req, res) {
  try {
    if (req.method === "POST") {
      const body = JSON.parse(req.body);
      let u = await User.findOne({ email: body.email });
      var bytes = CryptoJS.AES.decrypt(u.password, "p2pclouds");
      let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

      if (u.email === body.email && decryptedPass == body.password) {
        var token = jwt.sign({ email: body.email }, "p2pclouds", {
          expiresIn: "1h",
        }); //Token Expires in 1 hours
        res.status(200).json({ success: true, token });
      } else {
        res.status(400).json({ success: false });
      }
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Something Went Wrong" });
  }
};

export default connectDB(handler);

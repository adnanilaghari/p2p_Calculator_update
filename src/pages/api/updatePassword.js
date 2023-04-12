import { connectDB } from "@/middleware/connectDB";
import User from "@/models/User";
import nodemailer from "nodemailer";
var jwt = require("jsonwebtoken");
var CryptoJS = require("crypto-js");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.HostEmail,
    pass: process.env.Password,
  },
});

const handler = async function (req, res) {
  try {
    const { newPassword, token } = JSON.parse(req.body);
    
    // validate the token
    await jwt.verify(token, "p2pclouds", async (err) => {
        // decode the token
        const decoded = await jwt.decode(token);
      if (err) {
        // token is invalid
        throw "Invalid Token";
      } else {
        const now = Date.now().valueOf() / 1000; // convert to seconds
        if (typeof decoded.exp !== "undefined" && decoded.exp < now) {
          // token has expired
          throw "Invalid Token";
        }

        // token is valid
        // Encrypt
        var encryptedPassword = await CryptoJS.AES.encrypt(
          newPassword,
          "p2pclouds"
        ).toString();
        await User.findByIdAndUpdate(decoded.id, {
          password: encryptedPassword,
        });

        const emailTemplate = `
        This is to confirm that your password has been successfully updated for your account with p2p blogging site. If you did not initiate this change, please contact our support team immediately at [Contact Information].
  
        Thank you,
        P2P Clouds Support Team`;

        const mailOptions = {
          from: process.env.HostEmail,
          to: decoded.email,
          subject: "Password reset successfully",
          text: emailTemplate,
        };

        await transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          }
        });
        res
          .status(200)
          .json({ success: true, message: "Password Reset Successfully " });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Invalid Token" });
  }
};

export default connectDB(handler);

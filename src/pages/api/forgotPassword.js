import { connectDB } from "@/middleware/connectDB";
import User from "@/models/User";
import nodemailer from 'nodemailer';
var jwt = require('jsonwebtoken');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.HostEmail,
    pass: process.env.Password
  }
});






const handler =async  function (req, res) {
  try {
    const email  = JSON.parse(req.body);
    const findedUser =await User.findOne({email:email}) ||undefined;
    
    
    if(findedUser){
      const resetToken = jwt.sign({ email:email,id:findedUser._id }, 'p2pclouds');
      const emailTemplate = `Dear sir/madam,
      
        You have requested a password reset for your account. Unfortunately, we cannot retrieve your old password due to security reasons.
        
        Please click on the following link to reset your password: ${process.env.NEXT_PUBLIC_DOMAINNAME}/ForgotPassword?token=${resetToken}
        
        If you did not request a password reset, please ignore this message.
        
        Please do not share this link with others as it is unique to your account.
        
        If you have any questions or need further assistance, please do not hesitate to contact us at [contact information].
        
        Thank you,
        P2P Clouds Support Team`;
        
      const mailOptions = {
        from: process.env.HostEmail,
        to: email,
        subject: 'Password reset request',
        text: emailTemplate
        
      };
      await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
       console.log(error);
        } 
      });
      res.status(200).json({ success: true, message: "Successfully sent reset link" });
      
    }
    else{
      
      res.status(404).json({ success: false, message: "No user exists in this email" });
    }


  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Something Went Wrong" });
  }
};

export default connectDB(handler);


import { connectDB } from "@/middleware/connectDB";
import Blogs from "@/models/Blogs";

const handler = async function (req, res) {
  try {
    const { title, slug, blogtext } = JSON.parse(req.body);
    let newBlog = new Blogs({ title, slug, blogtext });
    await newBlog.save();
    res.status(200).json({ success: true, message: "Successfully Added" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Something Went Wrong" });
  }
};

export default connectDB(handler);

import { connectDB } from "@/middleware/connectDB";
import Blogs from "@/models/Blogs";

const handler = async function (req, res) {
  try {
    if (req.method === "POST") {
      const blogs = await Blogs.find().sort({ timestamp: -1 }).limit(4);
      res.status(200).json({ blogs, success: true });
    } else {
      throw new Error("Invalid method");
    }
  } catch (err) {
    res.status(400).json({ blogs: [], success: false, message: err.message });
  }
};

export default connectDB(handler);

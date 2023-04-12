import { connectDB } from "@/middleware/connectDB";
import Blogs from "@/models/Blogs";

const handler = async function (req, res) {
  try {
    if(req.method==="POST"){

        const allBlogs =await Blogs.find();
        res.status(200).json({ allBlogs:allBlogs,success:true });
    }
    else{
        throw err;
    }
  } catch (err) {
    res.status(400).json({ allBlogs:[],success:true});
  }
};

export default connectDB(handler);

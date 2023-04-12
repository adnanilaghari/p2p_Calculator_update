import { connectDB } from "@/middleware/connectDB";
import Blogs from "@/models/Blogs";

const handler = async function (req, res) {
  try {
    if(req.method==="POST"){
        const {blogSlug}=JSON.parse(req.body);
        const blog =await Blogs.find({slug:blogSlug});
        res.status(200).json({ blog:blog,success:true });
    }
    else{
        throw err;
    }
  } catch (err) {
    res.status(400).json({ blog:{},success:true});
  }
};

export default connectDB(handler);

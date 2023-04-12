import { connectDB } from "@/middleware/connectDB";
import Blogs from "@/models/Blogs";

const handler = async function (req, res) {
  try {
    if(req.method==="DELETE"){
        const {id}=JSON.parse(req.body);
        await Blogs.findByIdAndDelete(id);
        res.status(200).json({ success:true,message:"Successfully Deleted" });
    }
    else{
        throw err;
    }
  } catch (err) {
    res.status(400).json({ success:false,message:"Something Went Wrong"});
  }
};

export default connectDB(handler);

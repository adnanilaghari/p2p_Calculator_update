import { connectDB } from "@/middleware/connectDB";
import Blogs from "@/models/Blogs";

const handler = async function (req, res) {
  try {
    if(req.method==="POST"){
        const {_id,title,slug,blogtext}=JSON.parse(req.body);
        await Blogs.findByIdAndUpdate(_id,{title,slug,blogtext});
        res.status(200).json({ success:true,message:"Successfully Updated" });
    }
    else{
        throw err;
    }
  } catch (err) {
    res.status(400).json({ success:false,message:"Something Went Wrong"});
  }
};

export default connectDB(handler);

import React,{useEffect} from "react";
import AdminLayout from "../Layout/AdminLayout";
import CreateBlog from "@/components/CreateBlog";
import { useRouter } from "next/router";

const index = () => {

    const router=useRouter();
    useEffect(()=>{

    let token=localStorage.getItem("token");
    if(!token){
        router.push("/adminlogin");
    }
    },[])
  return (
    <AdminLayout>
      <div className="flex justify-center align-middle min-h-screen">
        <CreateBlog />
      </div>
    </AdminLayout>
  );
};

export default index;

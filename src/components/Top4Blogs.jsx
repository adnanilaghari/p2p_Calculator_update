import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Top4Blogs = () => {
  const [topBlogs, setTopBlogs] = useState([]);
  const router=useRouter();


  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAINNAME}/api/getTop4Blogs`,
        {
          method: "POST",
        }
      );
      const res = await response.json();
      setTopBlogs(res.blogs);
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (slug) => {
    router.push(process.env.NEXT_PUBLIC_DOMAINNAME + "Blogs/" + slug);
  };

  return (
    <div className="container mx-auto text-center mt-6">
      {topBlogs.map((blog) => {
        return (
          <div
            key={blog._id}
            className="mb-3 cursor-pointer"
            onClick={() => {
              handleBlogClick(blog.slug);
            }}
          >
            <div className="title">
              <h1>
                <strong className="capitalize">{blog.title}</strong>
              </h1>
            </div>
            <div className="maintext">
              {blog.blogtext && blog.blogtext.split(" ").slice(0, 7).join(" ")}
              ...
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Top4Blogs;

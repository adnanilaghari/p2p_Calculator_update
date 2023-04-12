import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateBlog = () => {
  const [blogForm, setBlogForm] = useState({
    title: "",
    slug: "",
    blogtext: "",
  });

  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      router.push("/adminlogin");
    }
  }, []);

  const handleChange = (e) => {
    setBlogForm({ ...blogForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/addBlog", {
      method: "POST",
      body: JSON.stringify(blogForm),
    });
    let response = await res.json();
    if (response.success || res.status === 200) {
      toast.success("Successfully Added", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setBlogForm({
        title: "",
        slug: "",
        blogtext: "",
      });
    } else {
      toast.error("Something Went Wrong", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="w-full mb-96">
      <div className="heading w-full bg-blue-400 rounded text-center text-lg">
        Add Blog
      </div>
      {/* Toast Container  */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="container add-blog mt-3 text-center mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="title flex flex-col items-center">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <textarea
              id="message"
              rows="4"
              name="title"
              value={blogForm.title}
              onChange={handleChange}
              className="block p-2.5 lg:w-1/2 md:w-5/6 xs:w-5/6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write Blog title here..."
            ></textarea>
          </div>

          {/* Slug */}
          <div className="slug flex flex-col items-center">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Slug(without spaces)
            </label>
            <textarea
              id="message"
              rows="2"
              name="slug"
              value={blogForm.slug}
              onChange={handleChange}
              className="block p-2.5 lg:w-1/2 md:w-5/6 xs:w-5/6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write Blog unique searching slug here..."
            ></textarea>
          </div>

          {/* Blog */}
          <div className="slug flex flex-col items-center">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog(Main Part)
            </label>
            <textarea
              id="message"
              rows="15"
              value={blogForm.blogtext}
              name="blogtext"
              onChange={handleChange}
              className="block p-2.5 lg:w-1/2 md:w-5/6 xs:w-5/6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write Blog unique searching slug here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" mt-2 lg:w-1/2 md:w-5/6 xs:w-5/6 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;

import React, { useState } from "react";
import AdminLayout from "@/pages/Layout/AdminLayout";
import LoadingBar from "react-top-loading-bar";
import Link from "next/link";

const Blogs = ({ data }) => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [allBlogs, setAllBlogs] = useState(data.allBlogs);
  const [progress, setProgress] = useState(0);
  const [blogToDelete, setBlogToDelete] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const openConfirmModal = () => {
    setShowModal(true);
  };
  const closeConfirmModal = () => {
    setShowModal(false);
  };

  const updateAllBlogs = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAINNAME}/api/getAllBlogs`, {
      method: "POST",
    });
    const res = await response.json();
    setAllBlogs(res.allBlogs);
  };
  const deleteBlog = async () => {
    try {
      setProgress(75);
      await fetch(`${process.env.NEXT_PUBLIC_DOMAINNAME}/api/deleteBlog`, {
        method: "DELETE",
        body: JSON.stringify({ id: blogToDelete }),
      });
      await updateAllBlogs();
      setProgress(100);
      closeConfirmModal();
    } catch (err) {
      setProgress(0);
    }
  };
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <AdminLayout>
        {/* Confirmation Modal  */}

        {showModal && (
          <div
            id="popup-modal"
            tabindex="-1"
            className="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full "
          >
            <div className="relative w-full h-full max-w-md md:h-auto mx-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  onClick={closeConfirmModal}
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this blog?
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    onClick={deleteBlog}
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    onClick={closeConfirmModal}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto min-h-screen mt-2">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <div className="flex items-center justify-center pb-4 ">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  name="search"
                  onChange={handleSearchChange}
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search htmlFor items"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Blog Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Slug
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* All Blog Map */}
                {allBlogs
                  .filter((blog) => {
                    return (
                      blog.title.toLowerCase().includes(search.toLowerCase()) ||
                      blog.slug.toLowerCase().includes(search.toLowerCase()) ||
                      search.length === 0
                    );
                  })
                  .map((blog) => {
                    return (
                      <tr
                        key={blog._id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {blog.title}
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {blog.slug}
                        </th>

                        <td className="px-6 py-4 flex flex-wrap ">
                          <Link
                            href={`/Admin/Blogs/${blog.slug}`}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </Link>
                          <a
                            className="lg:ml-2 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                            onClick={() => {
                              openConfirmModal();
                              setBlogToDelete(blog._id);
                            }}
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAINNAME}/api/getAllBlogs`, {
    method: "POST",
  });
  const res = await response.json();
  return {
    props: { data: res }, // will be passed to the page component as props
  };
}

export default Blogs;

import React, {  useState } from 'react'
import { useRouter } from 'next/router'
import HomeLayout from '../Layout/HomeLayout';

const slug = ({blog}) => {
    const [selBlog, setSelBlog] = useState(blog[0]);
  return (
    <HomeLayout>
    <div className="w-full mb-96 min-h-screen">

    <div className="container add-blog mt-3 text-center mx-3">
      <div className="title">

      <h1><strong>{selBlog.title}</strong></h1>
      </div>

      <div className="maintext mt-2">
      <p>{selBlog.blogtext}</p>

      </div>
    </div>
  </div></HomeLayout>
  )
}


export async function getServerSideProps(context) {
    const blogSlug=context.query.slug;
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAINNAME}/api/getBlog`, {
        method: "POST",
        body:JSON.stringify({blogSlug})
      });
      const res = await response.json();
    return {
      props: { blog:res.blog }, // will be passed to the page component as props
    };
  }
export default slug

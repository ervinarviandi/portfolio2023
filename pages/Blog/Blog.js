import React from "react";
import { FaGitSquare } from "react-icons/fa";

function Blog() {
  return (
    <>
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl xl:max-w-3xl ">
          <div className="w-full self-center px-4">
            <h2 className="text-2xl font-bold font-poppins dark:text-white text-gray-500">Blog</h2>
            <p className="text-base font-poppins dark:text-white text-gray-500">
              Youll find a collection of my thoughts and musings on a variety of topics. I write about everything from current events to personal experiences, and I always strive to share my honest opinions. Keep in mind that my views are
              my own and do not necessarily reflect those of any other person or organization.
            </p>
            <div className="">
              <h2 className="dark:text-white text-gray-500 text-2xl font-poppins font-bold">Tutorial Install Git For Windows</h2>
              <FaGitSquare />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;

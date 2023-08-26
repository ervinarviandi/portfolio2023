import React from "react";
import Navigation from "../components/Navigation";
import Link from "next/link";
import { FaGitSquare } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { IoLogoNodejs } from "react-icons/io";
import Footer from "../components/Footer";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/material.css";
import "tippy.js/animations/perspective-extreme.css";
import Nextjs from "../src/NextJs";

function MyBlog() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12 blog">
        <section className="mt-[96px] mx-auto md:max-w-4xl xl:max-w-4xl px-4 ">
          <div className="mb-10">
            <h2 className="text-3xl font-poppins font-extrabold md:text-7xl text-transparent bg-clip-text  bg-gradient-to-r  from-gradient100  to-gradient200 ">My Blog</h2>
          </div>
          <p className="text-base dark:text-primary5 text-gray-700 font-poppins">
            Youll find a collection of my thoughts and musings on a variety of topics. I write about everything from current events to personal experiences, and I always strive to share my honest opinions. Keep in mind that my views are my
            own and do not necessarily reflect those of any other person or organization.
          </p>
          <hr className="border-dashed border-1  dark:border-card100 border-gray-700 mt-4" />
          <div className="mt-10">
            <h2 className="dark:text-primary5 text-gray-700 text-2xl font-poppins"> All Post</h2>
            <p className="text-base dark:text-primary10 text-gray-700 font-poppins mt-5">
              It looks like you`re interested in my posts. You`re welcome to take a look and read them, and they`re sorted by date so you can easily find the newest ones.
            </p>

            <figure className=" border-dashed dark:border-white border-black border-2 mt-5 p-4 rounded-lg relative border-dashed border-2 mt-5 p-4 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:rounded-lg before:bg-gradient-to-r from-orange to-yellow  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg hover:border-solid backdrop-blur">
              <h2 className="dark:text-primary5 text-gray-700 text-3xl font-poppins  ">
                <Link href="/" className="hover:border-b-2 hover:border-dashed">
                  How to Install Git on Windows & configuration
                  <FaGitSquare />
                </Link>
              </h2>
              <div className="md:flex justify-between items-center space-x-3">
                <div className="flex mt-5 space-x-3">
                  <span className="bg-rose-500 dark:text-emerald-200 text-lime-300 py-2 px-4 rounded-lg font-poppins text-xs">Git</span>
                  <span className="bg-teal-500 text-white py-2 px-4 rounded-lg font-poppins text-xs">Github</span>
                </div>
                <div className="md:flex mt-4">
                  <div className="flex items-center space-x-2">
                    <AiOutlineFieldTime className="dark:text-primary10 text-gray-700" />
                    <p className="text-base font-poppins dark:text-primary10 text-gray-700 ">19 min read</p>
                    <AiOutlineEye className="dark:text-primary10 text-gray-700" />
                    <p className="text-base font-poppins dark:text-primary10 text-gray-700">16 views</p>
                  </div>
                </div>
              </div>
            </figure>

            {/* <figure className=" border-dashed dark:border-white border-black border-2 mt-5 p-4 rounded-lg relative border-dashed border-2 mt-5 p-4 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:rounded-lg before:bg-gradient-to-r from-orange to-yellow  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg hover:border-solid backdrop-blur">
              <h2 className="dark:text-white text-gray-700 text-3xl font-poppins  ">
                <Link href="/NodeBlog" className="hover:border-b-2 hover:border-dashed">
                  How to Install Node Js & NPM on Windows <IoLogoNodejs />
                </Link>
              </h2>
              <div className="md:flex justify-between items-center space-x-3">
                <div className="flex mt-5 space-x-3">
                  <span className="bg-purple-500 dark:text-white text-rose-300 py-2 px-4 rounded-lg font-poppins text-xs">Node Js</span>
                  <span className="bg-emerald-400 dark:text-white text-yellow-200 py-2 px-4 rounded-lg font-poppins text-xs">Git</span>
                </div>
                <div className="md:flex mt-4">
                  <div className="flex items-center space-x-2">
                    <AiOutlineFieldTime />
                    <p className="text-base font-popins dark:text-white text-gray-700">20 min read</p>
                    <AiOutlineEye />
                    <p className="text-base font-poppins dark:text-white text-gray-700">32 views</p>
                  </div>
                </div>
              </div>
            </figure> */}

            {/* <figure className=" border-dashed dark:border-white border-black border-2 mt-5 p-4 rounded-lg relative border-dashed border-2 mt-5 p-4 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:rounded-lg before:bg-gradient-to-r from-orange to-yellow  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg hover:border-solid backdrop-blur ">
              <h2 className="dark:text-white text-gray-700 text-3xl font-poppins  ">
                <Link href="/NodeBlog" className="hover:border-b-2 hover:border-dashed">
                  make a website fast, simple using astro
                  <Nextjs />
                </Link>
              </h2>
              <div className="md:flex justify-between items-center space-x-3">
                <div className="flex mt-5 space-x-3">
                  <span className="bg-purple-500 dark:text-white text-rose-300 py-2 px-4 rounded-lg font-poppins text-xs">Node Js</span>
                  <span className="bg-gradient200 dark:text-white text-blue-500 py-2 px-4 rounded-lg font-poppins text-xs">Git</span>
                </div>
                <div className="md:flex mt-4">
                  <div className="flex items-center space-x-2">
                    <AiOutlineFieldTime />
                    <p className="text-base font-popins dark:text-white text-gray-700">10 min read</p>
                    <AiOutlineEye />
                    <p className="text-base font-poppins dark:text-white text-gray-700">30 views</p>
                  </div>
                </div>
              </div>
            </figure> */}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MyBlog;

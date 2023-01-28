import React from "react";
import Navigation from "../components/Navigation";
import Link from "next/link";
import { FaGitSquare } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { IoLogoNodejs } from "react-icons/io";
import Footer from "../components/Footer";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/material.css";
import "tippy.js/animations/perspective-extreme.css";
import { followCursor } from "tippy.js";

function MyBlog() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl xl:max-w-4xl px-4 ">
          <h2 className="dark:text-white  text-7xl text-gray-700 font-poppins mb-10 font-extrabold">Blog</h2>
          <p className="text-base dark:text-white text-gray-700 font-poppins">
            Youll find a collection of my thoughts and musings on a variety of topics. I write about everything from current events to personal experiences, and I always strive to share my honest opinions. Keep in mind that my views are my
            own and do not necessarily reflect those of any other person or organization.
          </p>

          <div className="mt-10">
            <h2 className="dark:text-white text-gray-700 text-2xl font-poppins"> All Post</h2>
            <p className="text-base dark:text-white text-gray-700 font-poppins mt-5">
              Sepertinya Kamu tertarik dengan postingan saya. silakan untuk melihat dan membacanya, dan diurutkan berdasarkan tanggal sehingga kamu dapat dengan mudah menemukan yang terbaru.
            </p>

            <figure className="relative border-dashed border-2 mt-5 p-4 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg hover:border-double ">
              <h2 className="dark:text-white text-gray-700 text-3xl font-poppins  ">
                <Link href="/Blog" className="hover:border-b-2 hover:border-dashed">
                  Tutorial Git: Cara Install Git dan Konfigurasi Awal yang Harus Dilakukan <FaGitSquare />
                </Link>
              </h2>
              <div className="md:flex justify-between items-center space-x-3">
                <div className="flex mt-5 space-x-3">
                  <span className="bg-rose-500 dark:text-white text-lime-300 py-2 px-4 rounded-lg font-poppins text-xs">Git</span>
                  <span className="bg-teal-500 dark:text-white text-yellow-200 py-2 px-4 rounded-lg font-poppins text-xs">Github</span>
                </div>
                <div className="md:flex mt-4">
                  <div className="flex items-center space-x-2">
                    <AiOutlineFieldTime />
                    <p className="text-base font-popins dark:text-white text-gray-700">19 min read</p>
                    <AiOutlineEye />
                    <p className="text-base font-poppins dark:text-white text-gray-700">120 views</p>
                  </div>
                </div>
              </div>
            </figure>

            <figure className="relative border-dashed border-2 mt-5 p-4 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg hover:border-double ">
              <h2 className="dark:text-white text-gray-700 text-3xl font-poppins  ">
                <Link href="/NodeBlog" className="hover:border-b-2 hover:border-dashed">
                  Tutorial Install Node Js Di Windows <IoLogoNodejs />
                </Link>
              </h2>
              <div className="md:flex justify-between items-center space-x-3">
                <div className="flex mt-5 space-x-3">
                  <span className="bg-purple-500 dark:text-white text-rose-300 py-2 px-4 rounded-lg font-poppins text-xs">Node Js</span>
                  <span className="bg-yellow-500 dark:text-white text-blue-500 py-2 px-4 rounded-lg font-poppins text-xs">Git</span>
                </div>
                <div className="md:flex mt-4">
                  <div className="flex items-center space-x-2">
                    <AiOutlineFieldTime />
                    <p className="text-base font-popins dark:text-white text-gray-700">12 min read</p>
                    <AiOutlineEye />
                    <p className="text-base font-poppins dark:text-white text-gray-700">97 views</p>
                  </div>
                </div>
              </div>
            </figure>

            <figure className="relative border-dashed border-2 mt-5 p-4 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg hover:border-double ">
              <h2 className="dark:text-white text-gray-700 text-3xl font-poppins  ">
                <Link href="/NodeBlog" className="hover:border-b-2 hover:border-dashed">
                  Apa si Coding Itu <IoLogoNodejs />
                </Link>
              </h2>
              <div className="md:flex justify-between items-center space-x-3">
                <div className="flex mt-5 space-x-3">
                  <span className="bg-purple-500 dark:text-white text-rose-300 py-2 px-4 rounded-lg font-poppins text-xs">Node Js</span>
                  <span className="bg-yellow-500 dark:text-white text-blue-500 py-2 px-4 rounded-lg font-poppins text-xs">Git</span>
                </div>
                <div className="md:flex mt-4">
                  <div className="flex items-center space-x-2">
                    <AiOutlineFieldTime />
                    <p className="text-base font-popins dark:text-white text-gray-700">12 min read</p>
                    <AiOutlineEye />
                    <p className="text-base font-poppins dark:text-white text-gray-700">97 views</p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="mt-[20px]">
            <Tippy content="Hello ini button" followCursor={true} plugins={[followCursor]} placement="top" animation="perspective-extreme" theme="light">
              <button className="relative border-2 dark:text-white text-gray-700 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                Ini Button
              </button>
            </Tippy>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MyBlog;

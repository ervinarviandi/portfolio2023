import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";
import CssLogo from "../src/CssLogo";
import Nextjs from "../src/NextJs";

function Articles() {
  return (
    <>
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl  xl:max-w-3xl px-4">
          <h1 className="dark:text-white text-gray-700 text-3xl  mb-10 font-poppins font-bold">Featured Post</h1>
          <p className="dark:text-white text-gray-700 font-poppins text-base">
            Jika kalian mencari bacaan yang menarik mengenai dunia it, kalian bisa melihat postingan blog unggulan saya. diurutkan dari yang terbaru hingga yang paling lama, silakan jelajahi....🤨
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col ">
              <figure className="border-dashed border-2 mt-5 p-4 rounded-lg">
                <h2 className="dark:text-white text-gray-700 text-3xl font-poppins ">
                  <Link href="/Blog" className="hover:border-b-2 hover:border-dashed">
                    Tutorial Git: Cara Install Git dan Konfigurasi Awal yang Harus Dilakukan <FaGitSquare />
                  </Link>
                </h2>
                <div className="flex mt-5 space-x-3">
                  <span className="bg-rose-500 dark:text-white py-2 px-4 rounded-lg font-poppins text-xs">Git</span>
                  <span className="bg-teal-500 dark:text-white py-2 px-4 rounded-lg font-poppins text-xs">Github</span>
                </div>
              </figure>
            </div>
            <div className="flex flex-col ">
              <figure className="border-dashed border-2 mt-5 p-4 rounded-lg">
                <h2 className="dark:text-white text-gray-700 text-3xl font-poppins ">
                  A Powerfull CSS <CssLogo /> Pseudo Class, Take A Look At CSS:Has <span className="text-sky-300">()</span>{" "}
                </h2>
                <div className="flex mt-5 space-x-3">
                  <span className="bg-purple-500 dark:text-white py-2 px-4 rounded-lg font-poppins text-xs">CSS</span>
                  <span className="bg-blue-500 dark:text-white py-2 px-4 rounded-lg font-poppins text-xs">Web Dev</span>
                </div>
              </figure>
            </div>
            {/* <div className="flex flex-col ">
              <figure className="border-dashed border-2 mt-5 p-4 rounded-lg">
                <h2 className="dark:text-white text-gray-700 text-3xl font-poppins ">
                  How To Install/Setup Git For Windows <span className="text-sky-300">()</span>{" "}
                </h2>
                <div className="flex mt-5 space-x-3">
                  <span className="bg-amber-500 dark:text-white text-gray-700 py-2 px-4 rounded-lg font-poppins text-xs">Github</span>
                  <span className="bg-lime-600 dark:text-white text-gray-700 py-2 px-4 rounded-lg font-poppins text-xs">Web Dev</span>
                </div>
              </figure>
            </div> */}
            <div className="flex flex-col ">
              <figure className="border-dashed border-2 mt-5 p-4 rounded-lg">
                <h2 className="dark:text-white text-gray-700 text-3xl font-poppins">
                  How To Install <span className="text-sky-300">Next Js</span> <Nextjs className="dark:text-black text-gray-700" />{" "}
                </h2>
                <div className="flex mt-5 space-x-3">
                  <span className="bg-rose-500 dark:text-white text-gray-700 py-2 px-4 rounded-lg font-poppins text-xs">Next js</span>
                  <span className="bg-cyan-200 dark:text-white text-gray-700 py-2 px-4 rounded-lg font-poppins text-xs">React</span>
                </div>
              </figure>
            </div>
          </div>
          <div className=" mt-[30px] ">
            <p className=" flex items-center dark:text-white text-gray-700  hover:font-bold font-poppins">
              {/* <a href="" className="">See All Post</a> */}
              <Link href="/" className="flex items-center  dark:hover:text-pink-500 hover:font-bold font-poppins">
                See All Post
                <BsFillArrowRightCircleFill className="ml-5 dark:text-white text-gray-700 text-2xl dark:hover:text-pink-500" />
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Articles;

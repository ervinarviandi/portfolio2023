import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Articles() {
  return (
    <>
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl  xl:max-w-3xl px-4">
          <h1 className="text-white text-3xl  mb-10 font-poppins">Featured Post</h1>
          <p className="text-white font-poppins text-base">If youre looking for some interesting reads, check out my featured blog post. sorted from latest to least, feel free to explore it.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col ">
              <figure className="border-dashed border-2 mt-5 p-4">
                <h2 className="text-white text-3xl font-poppins ">
                  A Powerfull CSS Pseudo Class, Take A Look At CSS:Has <span className="text-sky-300">()</span>{" "}
                </h2>
                <div className="flex mt-5 space-x-3">
                  <span className="bg-purple-500 text-white py-2 px-4 rounded-lg font-poppins">CSS</span>
                  <span className="bg-blue-500 text-white py-2 px-4 rounded-lg font-poppins">Web Dev</span>
                </div>
              </figure>
            </div>
            <div className="flex flex-col ">
              <figure className="border-dashed border-2 mt-5 p-4">
                <h2 className="text-white text-3xl font-poppins">
                  How To Instal/Setup Git For Windows <span className="text-sky-300">()</span>{" "}
                </h2>
                <div className="flex mt-5 space-x-3">
                  <span className="bg-amber-500 text-white py-2 px-4 rounded-lg font-poppins">Github</span>
                  <span className="bg-lime-600 text-white py-2 px-4 rounded-lg font-poppins">Web Dev</span>
                </div>
              </figure>
            </div>
            <div className="flex flex-col ">
              <figure className="border-dashed border-2 mt-5 p-4">
                <h2 className="text-white text-3xl font-poppins">
                  How To Instal <span className="text-sky-300">Next Js</span>{" "}
                </h2>
                <div className="flex mt-5 space-x-3">
                  <span className="bg-purple-500 text-white py-2 px-4 rounded-lg font-poppins">CSS</span>
                  <span className="bg-blue-500 text-white py-2 px-4 rounded-lg font-poppins">Web Dev</span>
                </div>
              </figure>
            </div>
          </div>
          <div className=" mt-[30px] ">
            <p className=" flex items-center text-white hover:text-pink-500 hover:font-bold font-poppins">
              <a href="">See All Portfolio</a>
              <Link href="/">
                <BsFillArrowRightCircleFill className="ml-5 text-white text-2xl hover:text-pink-500" />
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Articles;

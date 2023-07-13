import React, { useEffect } from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";
import CssLogo from "../src/CssLogo";
import Nextjs from "../src/NextJs";
import { IoLogoNodejs } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

function Articles() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, disable: false, startEvent: "DOMContentLoaded", initClassName: "aos-init", animatedClassName: "aos-animate", useClassNames: false, disableMutationObserver: true });
  }, []);
  return (
    <>
      <main className="px-4 py-12 articles">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4 border-gradient ">
          <h1 className="dark:text-white text-gray-700 text-3xl  mb-10 font-poppins font-bold " data-aos="fade-up">
            Featured Post
          </h1>
          <p className="dark:text-white text-gray-700 font-poppins text-base" data-aos="fade-up">
            {/* Jika kalian mencari bacaan yang menarik mengenai dunia it, kalian bisa melihat postingan blog unggulan saya. diurutkan dari yang terbaru hingga yang paling lama, silakan jelajahi....🤨 */}
            If you&#39;re looking for some interesting reads, check out my featured blog post. sorted from latest to least, feel free to explore it.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col ">
              <figure
                className=" border-dashed dark:border-white border-black border-2 mt-5 p-4 rounded-lg relative border-dashed border-2 mt-5 p-4 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:rounded-lg before:bg-gradient-to-r from-orange to-yellow  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg hover:border-solid backdrop-blur "
                data-aos="fade-up"
              >
                <h2 className="dark:text-white text-gray-700 text-3xl font-poppins ">
                  <Link href="/Blog" className="hover:border-b-2 hover:border-dashed">
                    How to Install Git on Windows & configuration
                    <FaGitSquare />
                  </Link>
                </h2>
                <div className="flex mt-5 space-x-3">
                  <span className="bg-rose-500 dark:text-white py-2 px-4 rounded-lg font-poppins text-xs">Git</span>
                  <span className="bg-teal-500 dark:text-white py-2 px-4 rounded-lg font-poppins text-xs">Github</span>
                </div>
              </figure>
            </div>
            <div className="flex flex-col ">
              <figure
                className="border-dashed dark:border-white border-black border-2 mt-5 p-4 rounded-lg relative border-dashed border-2 mt-5 p-4 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:rounded-lg before:bg-gradient-to-r from-orange to-yellow  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg hover:border-solid backdrop-blur "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="dark:text-white text-gray-700 text-3xl font-poppins ">
                  <Link href="/NodeBlog" className="hover:border-b-2 hover:border-dashed">
                    How to Install <span className="text-lime-500">Node Js</span> & NPM on Windows
                    <IoLogoNodejs />
                  </Link>
                </h2>
                <div className="flex mt-5 space-x-3">
                  <span className="bg-purple-500  text-yellow-500 py-2 px-4 rounded-lg font-poppins text-xs">Node Js</span>
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
              <figure
                className="border-dashed dark:border-white border-black border-2 mt-5 p-4 rounded-lg relative border-dashed border-2 mt-5 p-4 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:rounded-lg before:bg-gradient-to-r from-orange to-yellow  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg hover:border-solid backdrop-blur  "
                data-aos="fade-up"
              >
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
            <p className=" flex items-center dark:text-white text-gray-700  hover:font-bold font-poppins" data-aos="fade-up">
              {/* <a href="" className="">See All Post</a> */}
              <Link href="/MyBlog" className="flex items-center  dark:hover:text-pink-500 hover:font-bold font-poppins">
                See All Post
                <BsFillArrowRightCircleFill className="ml-5 dark:text-white text-gray-700 text-2xl dark:hover:text-pink-500 group" />
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Articles;

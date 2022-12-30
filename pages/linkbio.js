import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import ReactLogo from "../src/ReactLogo";
import BootstrapLogo from "../src/BootstrapLogo";
import { FaEdit } from "react-icons/fa";
import { MdVerticalAlignTop } from "react-icons/md";

function linkbio() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl xl:max-w-3xl px-4 ">
          <h1 className="text-white text-3xl mb-10 font-poppins font-bold">Link Bio</h1>
          <p className="mb-6 md:mb-8 text-white font-poppins text-base">
            A selection of my personal works. I,ve included samples to showcase my skills and experience. Take a look around and let me know what you think. Im always open to feedback and opportunities to collaborate.
          </p>
          <div className="flex items-center space-x-5">
            <div className="flex items-center text-white">
              <Link href="https://github.com/ervinarviandi/portfolio2023" className="flex items-center space-x-3 border-b-2 border-dashed  hover:text-pink-500 font-bold py-2">
                <BsGithub />
                <h4>Repository</h4>
              </Link>
            </div>
            <div className="flex items-center text-white">
              <Link href="https://react-link.vercel.app/" className="flex items-center space-x-3 hover:text-pink-500  border-b-2 py-2 border-dashed  hover:text-pink-500 font-bold">
                <BsGlobe2 />
                <h4>Live Demo</h4>
              </Link>
            </div>
          </div>

          <hr className="mt-10" />

          <div className="flex items-center space-x-4 mt-5">
            <BootstrapLogo />
            <ReactLogo />
          </div>

          <img src="reactlink.jpg" className="w-full mt-7" />

          <p className="text-white text-base font-poppins mt-5">
            React Ngobs is a Chat App that I was built when I was learned Firebase, according to Google, Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded
            in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.
          </p>

          <p className="text-white text-base font-poppins mt-7">
            I dont know about the others, but many of my friends are using Firebase for backend purpose or BaaS (Backend as a Service), and you can checkout Supabase, an alternative of Firebase.
          </p>

          <div className="flex justify-between ">
            <div className="">
              <Link href="" className=" flex items-center space-x-4 text-white font-bold font-poppins border-b-2 py-2 border-dashed   font-bold">
                <FaEdit />
                <h4 className="text-white font-poppins">Edit On Github</h4>
              </Link>
            </div>
            {/* <div className="">
              <Link href="" className="flex items-center space-x-4 text-white font-bold font-poppins  border-b-2 py-2 border-dashed   font-bold">
                <MdVerticalAlignTop />
                <h4 className=" text-white font-poppins">Back To Top</h4>
              </Link>
            </div> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default linkbio;

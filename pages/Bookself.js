import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import CodeigniterLogo from "../src/CodeigniterLogo";
import BootstrapLogo from "../src/BootstrapLogo";
import { FaEdit } from "react-icons/fa";

function Bookself() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl xl:max-w-4xl px-4 ">
          <h1 className="dark:text-white text-3xl mb-10 font-poppins font-bold">Bookself Crud</h1>
          <p className="mb-6 md:mb-8 dark:text-white font-poppins text-base">
            A selection of my personal works. I,ve included samples to showcase my skills and experience. Take a look around and let me know what you think. Im always open to feedback and opportunities to collaborate.
          </p>
          <div className="flex items-center space-x-5">
            <div className="flex items-center dark:text-white">
              <a href="https://github.com/ervinarviandi/Bookself" className="flex items-center space-x-3 border-b-2 border-dashed  hover:text-gradient200 font-bold py-2">
                <BsGithub />
                <h4>Repository</h4>
              </a>
            </div>
            <div className="flex items-center dark:text-white">
              <a href="" className="flex items-center space-x-3 hover:text-pink-500  border-b-2 py-2 border-dashed  dark:hover:text-gradient200 font-bold">
                <BsGlobe2 />
                <h4>Live Demo</h4>
              </a>
            </div>
          </div>
          <hr className="mt-10 dark:border-card100" />
          <div className="flex items-center space-x-4 mt-5">
            <CodeigniterLogo />
            <BootstrapLogo />
          </div>
          <img src="Crud Ci.jpg" className="w-full mt-7" />
          <p className="dark:text-white text-base font-poppins mt-5">A bookshelf app that can show, search, add, delete, update book and move book to other shelf.</p>
          <div className="flex justify-between ">
            <div className="">
              <a href="https://github.com/ervinarviandi/Bookself" className=" flex items-center space-x-4 dark:text-white font-bold font-poppins border-b-2 py-2 border-dashed mt-4  font-bold">
                <FaEdit />
                <h4 className=" hover:text-gradient200 font-poppins">Edit On Github</h4>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Bookself;

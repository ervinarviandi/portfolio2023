import React from "react";
import Link from "next/link";
import { BsGithub, BsInstagram, BsGlobe2, BsLink45Deg } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <>
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl xl:max-w-3xl">
          <img src="ervinarviandi.jpg " className="w-48 h-48 md:w-50 md:h-50 md:hidden lg:hidden rounded-lg lg:-z-20 p-4 aspect-square" />
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h2 className="flex flex-col font-light text-[34px] font-bold text-white font-poppins ">Muhammad Ervin Arviandi</h2>
              <h5 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[24px] mt-7 font-poppins ">Frontend Developer</h5>
              <p className="py-4 text-white font-poppins text-base">
                Hello 👋,
                <a href="https://www.showwcase.com/ervinarviandi" className="underline decoration-pink-500 hover:text-pink-200 font-poppins text-base">
                  Muhammad Ervin Arviandi
                </a>
                , a guy who loves to code, music, and coffe, welcome to my personal website , where you can find my portfolio, blog and more
              </p>
              <div className="flex flex-wrap space-x-4 text-2xl ">
                <Link href="https://github.com/ervinarviandi" className="text-white hover:text-pink-500">
                  <BsGithub />
                </Link>
                <Link href="https://github.com/ervinarviandi" className="text-white hover:text-pink-500">
                  <BsInstagram />
                </Link>
                <Link href="https://github.com/ervinarviandi" className="text-white hover:text-pink-500">
                  <BsGlobe2 />
                </Link>
                <Link href="https://react-link.vercel.app/" className="text-white hover:text-pink-500">
                  <BsLink45Deg />
                </Link>
                <Link href="mailto:muhamadervin34@gmail.com" className="text-white hover:text-pink-500">
                  <MdEmail />
                </Link>
              </div>
            </div>
            <div className="w-full  px-4 lg:w-1/2">
              <div className="top-0 right-0  sm:mx-auto">
                <img src="https://ervinarviandi.netlify.app/dist/img/FB_IMG_1633693737797.jpg" className="w-60 h-60 hidden md:w-50 md:h-50 rounded-lg lg:block lg:-z-20" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;

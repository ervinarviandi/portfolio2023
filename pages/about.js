import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import Logo from "../public/avatar-ervin.png";
import Logo2 from "../public/avatar-ervin.png";

// import "aos/dist/aos.css";

function about() {
  return (
    <>
      <Navigation />
      <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4 about">
        <div className="flex flex-wrap" initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
          <div className="w-full self-center px-4 lg:w-1/2">
            <Image src={Logo} className="md:hidden lg:hidden rounded-lg lg:-z-20 p-4 aspect-square" width={180} height={180} data-aos="fade-left" alt="avatar" />
            <h2 className="flex flex-col text-[34px] font-bold dark:text-primary5 text-gray-700 font-poppins  " data-aos="fade-up">
              Muhammad Ervin Arviandi
            </h2>
            <h5 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gradient100 to-gradient200  text-[24px] mt-7 font-poppins" data-aos="fade-right">
              Frontend Developer
            </h5>
          </div>
          <div className="w-full self-center px-4 lg:w-1/2">
            <Image src={Logo2} className="hidden  rounded-lg lg:block lg:-z-20 mt-[20px] rounded-full" width={210} height={210} data-aos="fade-left" alt="myavatar" />
          </div>
          <div className="w-full mt-10 px-4 space-y-5" data-aos="fade-up" data-aos-delay="300">
            <p className="dark:text-primary5 text-gray-700 font-poppins text-base">
              Hello👋, My name is <span className="font-bold underline text-transparent bg-clip-text decoration-gradient200 bg-gradient-to-r from-gradient100 to-gradient200"> Muhammad Ervin Arviandi </span>, or you can call me Ervin. I
              focus on studying web application development and web design. The main programming language I&#39;m exploring is Javascript, as well as the React framework (and the environment in general). I love learning things, and always
              want to learn new things. I am enthusiastic, reliable, responsible and hardworking person.
            </p>

            <p className="dark:text-primary5 text-gray-700 font-poppins text-base">
              I&#39;am passionate about <span className=" text-transparent bg-clip-text bg-gradient-to-r from-gradient100 to-gradient200 font-bold"> Frontend Developer </span> and enjoy working on the Web. I love combining my technical
              knowledge and creativity to build engaging and user-friendly websites and applications.
            </p>
            <p className="dark:text-primary5 text-gray-700 font-poppins text-base">
              I&#39;m very interested with <span className="font-bold"> Frontend Architecture</span>, <span className="font-bold"> Frontend Accessibility</span>, and <span className="font-bold">User Experience</span>, and also interested in
              mobile development with flutter.
            </p>
            <div className="">
              <blockquote className="dark:text-primary5 text-gray-700 text-gray-500 text-2xl border-l-4  border-l-teal-500 ">
                <p className="ml-4 italic font-poppins text-base">the important thing is not to stop questioning.Curiosity has its own reason for exitense.</p>
                <h5 className="font-bold dark:text-primary5 italic ml-4 mt-5 font-poppins ">-Albert Einstein</h5>
              </blockquote>
            </div>
            <p className="dark:text-primary5 text-gray-700 font-poppins text-base">
              On this website, I like to share my <span className="font-bold dark:text-primary5">various thoughts</span>, about web development related topics, general daily life and a place for{" "}
              <span className="font-bold dark:text-primary5"> showcasing my portfolio.</span>
            </p>
          </div>
        </div>
      </section>
      <Skills />

      <Footer />
    </>
  );
}

export default about;

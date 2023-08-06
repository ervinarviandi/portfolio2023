import React from "react";
import Image from "next/image";
import Logo from "../src/Icons/linkedin.webp";
import MyLogo2 from "../src/Icons/medium.webp";
import MyLogo3 from "../src/Icons/github.webp";
import MyLogo4 from "../src/Icons/email.webp";

const MyHero = () => {
  return (
    <>
      <section className="w-full h-screen">
        <div className="lg:max-w-4xl mx-auto mt-[110px]  mx-auto">
          <h3 className="font-poppins lg:text-5xl dark:text-white text-center text-2xl text-black ">Moh Ervin Arviandi.</h3>
          <h1 className="py-7 font-poppins font-semibold lg:text-7xl text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-bg-blue-500">Frontend Engineer</h1>
          <p className="font-poppins py-4 dark:text-slate-200 text-slate-800 text-center mx-auto lg:text-xl text-lg w-9/12">
            {" "}
            Hello 👋 I&#39;m <span>Moh Ervin Arviandi</span> , a guy who loves to code, music and coffee. Welcome to my personal website, where you can find my portfolio, blog and more.{" "}
          </p>

          <div className="flex justify-center items-center gap-x-10 my-7 ">
            <Image src={Logo} width={70} height={70} alt="linkedin" />
            <Image src={MyLogo2} width={70} height={70} alt="medium" className="py-4 " />
            <Image src={MyLogo3} width={70} height={70} alt="github" />
            <Image src={MyLogo4} width={70} height={70} alt="email" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MyHero;

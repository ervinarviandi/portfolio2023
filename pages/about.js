import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function about() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      <section className="mt-[96px] mx-auto md:max-w-3xl  xl:max-w-3xl px-4 ">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <img src="ervinarviandi.jpg " className="w-48 h-48 md:w-50 md:h-50 md:hidden lg:hidden rounded-lg lg:-z-20 p-4 aspect-square" />
            <h2 className="flex flex-col font-light text-[34px] font-bold text-white ">Muhammad Ervin Arviandi</h2>
            <h5 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[24px] mt-7">Frontend Developer</h5>
          </div>
          <div className="w-full self-center px-4 lg:w-1/2">
            <img src="https://ervinarviandi.netlify.app/dist/img/FB_IMG_1633693737797.jpg" className="  w-60 h-60 hidden md:w-30 md:h-30 rounded-lg lg:block lg:-z-20 mt-[20px] rounded-full border-dashed border-2 border-purple-500" />
          </div>

          <div className="w-full mt-10 px-4 space-y-5">
            <p className="text-white">
              Hello👋, im <span className="font-bold underline decoration-pink-500"> Muhammad Ervin Arviandi </span>, a guy who loves to code, music and coffee. Welcome to my personal website, where you can find my portfolio, blog and more.
            </p>
            <p className="text-white">
              As a <span className="font-bold"> self-taught developer </span>, I started learning web development when I was in 12th grade and have been gradually improving my skills over time.
            </p>
            <p className="text-white">
              I am passionate about <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold"> Frontend Development </span> and enjoy working on the Web. I love combining my technical knowledge
              and creativity to build engaging and user-friendly websites and applications.
            </p>

            <p className="text-white">
              Im a very interested with <span className="font-bold"> Frontend Architecture</span>, <span className="font-bold">Frontend Accessibility</span>, and <span className="font-bold">User Experience</span>, and also interested in
              mobile development with Kotlin .
            </p>

            <p className="text-white">
              On this website, I like to share my <span className="font-bold"> various thoughts</span> about web development related topics, general daily life and a place for <span className="font-bold">showcasing my portfolio</span>.
            </p>

            <blockquote className="text-white text-gray-500 text-2xl border-l-4  border-l-pink-500 ">
              <p className="ml-4 italic">the important thing is not to stop questioning.Curiosity has its own reason for exitense.</p>
              <h5 className="font-bold text-white italic ml-4 mt-5">-Albert Einstein</h5>
            </blockquote>

            <p className="text-gray-200">
              I start learning <span className="font-bold text-white">Web Development</span> in <span className="font-bold"> early 2021</span>, but before that happens, I,ve actually learned the basics about{" "}
              <span className="font-bold text-white">Software Enginering</span> in <span className="font-bold text-white">Hight School</span>, when i was at 12th grade. i,m focusing on{" "}
              <span className="font-bold text-white">Frontend Development</span>, including <span className="font-bold text-white">Mobile App Development.</span>
            </p>

            <p className="text-gray-200">
              On this website, I like to share my various thought, including <span className="font-bold text-white">Web Development</span>, and showcase my <span className="font-bold text-white">Personal Website</span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default about;

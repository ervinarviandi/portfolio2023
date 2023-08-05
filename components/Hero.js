import React, { useEffect } from "react";
import Link from "next/link";
import { BsGithub, BsInstagram, BsGlobe2, BsLink45Deg } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";
import { Si500Px } from "react-icons/si";
import Button from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import Label from "../components/Label";
import AOS from "aos";
import "aos/dist/aos.css";

const svgVariants = {
  // hidden: { rotate: -180 },
  // visible: {
  //   rotate: 0,
  //   transition: { duration: 1 },
  // },
};

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="px-4 py-12 hero">
        <motion.section className="mt-[96px] mx-auto md:max-w-4xl xl:max-w-4xl custom-img relative " initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 3.5, type: "spring" }}>
          {/* <marquee className="text-amber-500 font-bold text-2xl p-2 bg-gray-900 rounded-lg"> Website ini masih dalam tahap pengembangan, dan dalam version 2.0 🔨🧐 </marquee> */}

          <img src="ervinarviandii.webp " className="w-48 h-48 md:w-50 md:h-50 md:hidden lg:hidden rounded-lg lg:-z-20 p-4 aspect-square" alt="myprofile" data-aos="fade-up" />
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2" data-aos="fade-up">
              <h5 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-bg-blue-500 text-[24px] mt-7 font-poppins" data-aos="fade-up" data-aos-delay="100">
                Frontend Developer
              </h5>
              <div className="absolute top-20 -z-20 md:top-30 md:left-30"></div>
              <div className=" flex items-center space-x-4 typewriter  relative mt-6">
                <span className=" dark:text-white text-gray-700 text-lg"> I&#39;m a {""} </span>
                <TypeAnimation
                  className="text-writer flex text-blue-500 ml-4 font-bold items-center  text-lg font-poppins"
                  sequence={[
                    "Developer 💻", // Types 'One'
                    1000, // Waits 1s
                    "Web Designer 📳", // Deletes 'One' and types 'Two'
                    1000, // Waits 2s
                    "Graphic Designer  🎨", // Types 'Three' without deleting 'Two'
                    2000,
                    () => {
                      console.log("Done typing!"); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  // style={{ fontSize: "1em" }}
                />
              </div>
              <p className="py-4  font-poppins text-base text-gray-700 dark:text-white">
                Hello 👋 I&#39;m <br />
                <a href="https://www.showwcase.com/ervinarviandi" className="underline decoration-blue-500 hover:text-sky-500 font-poppins text-base space-x-2">
                  Muhammad Ervin Arviandi
                </a>
                , a guy who loves to code, music and coffee. Welcome to my personal website, where you can find my portfolio, blog and more.
              </p>
              <div className="flex flex-wrap space-x-4 text-2xl ">
                <Link href="https://github.com/ervinarviandi" className="dark:text-white text-gray-700 ">
                  <BsGithub className="hover:text-pink-500" />
                </Link>
                <Link href="https://www.instagram.com/ervinarviandi/" className="dark:text-white text-gray-700 ">
                  <BsInstagram className="hover:text-pink-500" />
                </Link>
                <Link href="https://www.showwcase.com/ervinarviandi" className="dark:text-white text-gray-700">
                  <BsGlobe2 className="hover:text-pink-500" />
                </Link>
                <Link href="https://react-link.vercel.app/" className="dark:text-white text-gray-700 ">
                  <BsLink45Deg className="hover:text-pink-500" />
                </Link>
                <Link href="mailto:muhamadervin34@gmail.com" className="dark:text-white text-gray-700">
                  <MdEmail className="hover:text-pink-500" />
                </Link>
                <Link href="https://500px.com/p/muhamadervin34?view=photos" className="dark:text-white text-gray-700">
                  <Si500Px className="hover:text-pink-500" />
                </Link>
              </div>
              <div className="mt-12 " initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
                <Button
                  href="https://resume.showwcase.com/ervinarviandi.pdf"
                  className="absolute flex font-poppins text-base items-center  border-2 border-blue-500 dark:text-white text-gray-700 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg "
                >
                  Download CV
                  <AiFillFilePdf className="ml-3" />
                </Button>
              </div>
            </div>
            <div className="w-full  px-4 lg:w-1/2">
              <div className="top-0 right-0  sm:mx-auto ">
                <figure className="bg-gray-500  mx-auto relative">
                  <img src="https://ervinarviandi.netlify.app/dist/img/FB_IMG_1633693737797.jpg" className="w-60 h-60 hidden md:w-80 md:h-80 rounded-lg lg:block lg:-z-20   mr-4 rotate-45 absolute" alt="profile" data-aos="fade-left" />
                </figure>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}

export default Hero;

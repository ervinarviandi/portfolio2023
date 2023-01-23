import React from "react";
import Link from "next/link";
import { BsGithub, BsInstagram, BsGlobe2, BsLink45Deg } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";
import Button from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Hero() {
  return (
    <>
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl xl:max-w-4xl custom-img">
          {/* <marquee className="text-amber-500 font-bold text-2xl p-2 bg-gray-900 rounded-lg"> Web app ini masih dalam tahap pengembangan, 🔨🧐 </marquee> */}

          <img src="ervinarviandi.jpg " className="w-48 h-48 md:w-50 md:h-50 md:hidden lg:hidden rounded-lg lg:-z-20 p-4 aspect-square" />
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h2 className="flex flex-col text-gray-700 font-light text-[34px] font-bold dark:text-white font-poppins ">Muhammad Ervin Arviandi</h2>
              <h5 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[24px] mt-7 font-poppins ">Frontend Developer</h5>
              <div className=" flex items-center space-x-4 typewriter  relative mt-6">
                <span className=" dark:text-white text-gray-700 text-lg"> Im a {""} </span>
                <TypeAnimation
                  className="text-writer flex text-pink-500 ml-4 font-bold items-center  text-lg font-poppins"
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
                Halo 👋 saya,
                <a href="https://www.showwcase.com/ervinarviandi" className="underline decoration-pink-500 hover:text-pink-200 font-poppins text-base">
                  Muhammad Ervin Arviandi
                </a>
                , saya orang yang sangat suka dengan desain grafis, coding, musik, dan kopi, selamat datang di website pribadi saya dimana kalian, dapat menemukan portfolio, blog dan lainnya.
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
              </div>
              <motion.div className="mt-12 relative " initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
                <Button
                  href="https://resume.showwcase.com/ervinarviandi.pdf"
                  className="absolute flex font-poppins text-base items-center  border-2 dark:text-white text-gray-700 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg "
                >
                  Download CV
                  <AiFillFilePdf className="ml-3" />
                </Button>
              </motion.div>
            </div>
            <div className="w-full  px-4 lg:w-1/2">
              <div className="top-0 right-0  sm:mx-auto">
                <img src="https://ervinarviandi.netlify.app/dist/img/FB_IMG_1633693737797.jpg" className="w-60 h-60 hidden md:w-80 md:h-80 rounded-lg lg:block lg:-z-20 grayscale hover:grayscale-0 border-2 mr-4" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 animate-bounce md:block hidden ">
              <h2 className="flex items-center  font-poppins dark:text-pink-700 text-gray-700 text-2xl rotate-90 ">
                Scroll Down <BsFillArrowRightCircleFill className="ml-2" />
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;

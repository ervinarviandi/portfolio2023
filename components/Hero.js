import React from "react";
import Link from "next/link";
import { BsGithub, BsInstagram, BsGlobe2, BsLink45Deg } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";
import Button from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl xl:max-w-3xl custom-img">
          <marquee className="text-amber-500 font-bold text-2xl ">Mohon maaf, situs web ini masih dalam tahap pengembangan, 🤔 </marquee>
          <img src="ervinarviandi.jpg " className="w-48 h-48 md:w-50 md:h-50 md:hidden lg:hidden rounded-lg lg:-z-20 p-4 aspect-square" />
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h2 className="flex flex-col font-light text-[34px] font-bold dark:text-white font-poppins ">Muhammad Ervin Arviandi</h2>
              <h5 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[24px] mt-7 font-poppins ">Frontend Developer</h5>
              <div className=" flex items-center space-x-4 typewriter  relative mt-6">
                <span className=" dark:text-white text-lg"> Im a {""} </span>
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
              <p className="py-4  font-poppins text-base dark:text-white">
                Hello 👋,
                <a href="https://www.showwcase.com/ervinarviandi" className="underline decoration-pink-500 hover:text-pink-200 font-poppins text-base">
                  Muhammad Ervin Arviandi
                </a>
                , a guy who loves to code, music, and coffe, welcome to my personal website , where you can find my portfolio, blog and more
              </p>
              <div className="flex flex-wrap space-x-4 text-2xl ">
                <Link href="https://github.com/ervinarviandi" className="dark:text-white dark:hover:text-pink-500">
                  <BsGithub />
                </Link>
                <Link href="https://www.instagram.com/ervinarviandi/" className="dark:text-white dark:hover:text-pink-500">
                  <BsInstagram />
                </Link>
                <Link href="https://www.showwcase.com/ervinarviandi" className="dark:text-white dark:hover:text-pink-500">
                  <BsGlobe2 />
                </Link>
                <Link href="https://react-link.vercel.app/" className="dark:text-white dark:hover:text-pink-500">
                  <BsLink45Deg />
                </Link>
                <Link href="mailto:muhamadervin34@gmail.com" className="dark:text-white dark:hover:text-pink-500">
                  <MdEmail />
                </Link>
              </div>
              <motion.div className="mt-12 relative " initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
                <Button
                  href="https://resume.showwcase.com/ervinarviandi.pdf"
                  className="absolute flex font-poppins text-base items-center py-2 px-4 border-pink-500  dark:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  hover:bg-pink-500 border rounded-full"
                >
                  Download CV
                  <AiFillFilePdf className="ml-3" />
                </Button>
              </motion.div>
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

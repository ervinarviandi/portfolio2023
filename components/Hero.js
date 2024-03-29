import React, { useEffect } from "react";
import { AiFillFilePdf } from "react-icons/ai";
import Button from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import AOS from "aos";
import "aos/dist/aos.css";
import "tippy.js/themes/light-border.css";

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
          <Tippy className="tippy-box font-bold font-poppins" content="hy I&#39;m ervin 👋" placement="right-start" animation="scale-extreme" theme="light-border">
            <img src="ervinarviandii.webp " className="w-48 h-48 md:w-50 md:h-50 md:hidden lg:hidden rounded-lg lg:-z-20 p-4 aspect-square" alt="myprofile" data-aos="fade-up" />
          </Tippy>
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2" data-aos="fade-up">
              <h5 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gradient100 via-gradient200 to-gradient300   text-[24px] mt-2 mb-4 font-poppins" data-aos="fade-up" data-aos-delay="100">
                Frontend Developer
              </h5>
              {/* <p className="py-2  font-poppins text-3xl text-gray-700 dark:text-primary5 space-x-5 ">
                Hi, I&#39;m
                <a href="https://www.showwcase.com/ervinarviandi" name="link" aria-label="link-showcase" className="hover:text-gradient100 font-poppins text-3xl ml-2">
                  Ervin
                </a>
                <span className="text-3xl">👋</span>
              </p> */}

              <div className=" flex items-center space-x-4 typewriter  relative mt-4">
                <span className="font-poppins dark:text-primary5 text-gray-700 text-lg"> I&#39;m a {""} </span>
                <TypeAnimation
                  className="text-writer flex text-gradient100 ml-4 font-bold items-center  text-lg font-poppins"
                  sequence={[
                    "Developer 👩‍💻", // Types 'One'
                    1000, // Waits 1s
                    "Web Designer 💻", // Deletes 'One' and types 'Two'
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

              <p className="font-poppins text-md dark:text-primary5 text-gray-700 mt-3">
                Seasoned Software Engineer especially in Frontend side, with a passion for creating pixel-perfect web experiences. I work with JavaScript and specialize in all-things web. I thrive on collaborating with teams to deliver
                efficient, scalable, and visually appealing web applications.
              </p>

              <div className="mt-12 " initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
                <Button
                  id="downloadCV"
                  name="link"
                  aria-label="mybutton"
                  href="https://resume.showwcase.com/ervinarviandi.pdf"
                  className="absolute flex font-poppins text-base items-center  border-2 border-neutral-400  hover:border-card100 dark:text-primary5 text-gray-700 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gradient-to-r before:from-gradient100 before:to-gradient200 before:transition-transform before:duration-300 before:content-[''] hover:text-primary5 before:hover:scale-x-100 rounded-lg hover:shadow-xl before:hover:rounded-lg  "
                >
                  Download CV
                  <AiFillFilePdf className="ml-3" />
                </Button>
              </div>
            </div>
            <div className="w-full  px-4 lg:w-1/2">
              <div className="top-0 right-0  sm:mx-auto ">
                <figure className="bg-gray-500  mx-auto relative">
                  <Tippy className="" content="hy I&#39;m ervin 👋" placement="right-start" animation="scale-extreme">
                    <img src="https://ervinarviandi.netlify.app/dist/img/FB_IMG_1633693737797.jpg" className="w-60 h-60 hidden md:w-80 md:h-80 rounded-lg lg:block lg:-z-20   mr-4 rotate-45 absolute" alt="profile" data-aos="fade-left" />
                  </Tippy>
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

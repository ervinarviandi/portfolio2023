import React from "react";
import TailwindLogo from "../src/Tech Stack/TailwindLogo";
import Nextjs from "../src/Tech Stack/NextJs";
import HtmlLogo from "../src/Tech Stack/HtmlLogo";
import BootstrapLogo from "../src/Tech Stack/BootstrapLogo";
import CssLogo from "../src/Tech Stack/CssLogo";
import JavascriptLogo from "../src/Tech Stack/JavascriptLogo";
import ReactLogo from "../src/Tech Stack/ReactLogo";
import Framermotion from "../src/Tech Stack/Framermotion";
import Typescript from "../src/Tech Stack/Typescript";
import CodeigniterLogo from "../src/Tech Stack/CodeigniterLogo";
import { gsap } from "gsap";
// // import { gsap } from "gsap";
// import SplitText from "gsap-trial/SplitText";

function Skills() {
  return (
    <>
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4">
          <div className="mb-10">
            <h2 className="dark:text-white text-gray-700 font-poppins font-extrabold md:text-7xl text-3xl">
              Tools <br />& Skills
            </h2>
          </div>
          {/* <div id="title">Tools & skills</div> */}
          <div className="grid md:grid-cols-4 gap-4 ">
            <div className="flex flex-col">
              <div className="dark:bg-primary bg-gray-300 p-2 rounded-lg border-t-2 border-t-blue-500 relative overflow-hidden">
                <HtmlLogo className="z-5" />
                <h1 className="text-9xl absolute -z-4 dark:text-backgrounddark/50 text-white/50 font-extrabold -rotate-45">HTML</h1>
                <div className="px-4 pt-4">
                  <h2 className="dark:text-blue-500 text-blue-500 font-poppins font-bold ">Html</h2>
                  <p className="text-sm font-poppins">Hypertext Markup Language is the standard markup language for documents designed to be displayed in internet browsers.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="dark:bg-primary bg-gray-300 p-2 rounded-lg border-t-2 border-t-blue-500 relative overflow-hidden">
                <CssLogo className="z-5" />
                <h1 className="text-9xl absolute -z-4 dark:text-backgrounddark/50 text-white/50 font-extrabold -rotate-45">CSS</h1>
                <div className="px-4 pt-4">
                  <h2 className="dark:text-blue-500 text-blue-500 font-poppins font-bold ">Css</h2>
                  <p className="dark:text-sm font-poppins">Cascading Style Sheets are rules for managing several components in a web so that it will be more structured and uniform.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="dark:bg-primary bg-gray-300 p-2 rounded-lg border-t-2 border-t-blue-500 relative overflow-hidden">
                <JavascriptLogo className="z-5" />
                <h1 className="text-8xl absolute -z-4 dark:text-backgrounddark/50 text-white/50 font-extrabold -rotate-45 -mt-50">JAVASCRIPT</h1>
                <div className="px-4 pt-4">
                  <h2 className="dark:text-blue-500 text-blue-500 font-poppins font-bold ">JavaScript</h2>
                  <p className="text-sm font-poppins">JavaScript is a high-level and dynamic programming language. for fulstack web developer, and programming languange </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="dark:bg-primary bg-gray-300 p-2 rounded-lg border-t-2 border-t-blue-500 relative overflow-hidden">
                <BootstrapLogo className="z-5" />
                <h1 className="text-7xl absolute -z-4 dark:text-backgrounddark/50 text-white/50 font-extrabold -rotate-45 text-center">BOOTSTRAP</h1>
                <div className="px-4 pt-4">
                  <h2 className="dark:text-blue-500 text-blue-500 font-poppins font-bold ">Bootstrap</h2>
                  <p className="text-sm font-poppins">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="dark:bg-primary bg-gray-300 p-2 rounded-lg border-t-2 border-t-blue-500 relative overflow-hidden">
                <TailwindLogo className="z-5" />
                <h1 className="text-9xl absolute -z-4 dark:text-backgrounddark/50 text-white/50 font-extrabold -rotate-45 text-center -mt-60">TailwindCSS</h1>
                <div className="px-4 pt-4">
                  <h2 className="dark:text-blue-500 text-blue-500 font-poppins font-bold ">TailwindCSS</h2>
                  <p className="text-sm font-poppins">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="dark:bg-primary bg-gray-300 p-2 rounded-lg border-t-2 border-t-blue-500 relative overflow-hidden">
                <ReactLogo className="z-5" />
                <h1 className="text-9xl absolute -z-4 dark:text-backgrounddark/50 text-white/50 font-extrabold -rotate-45 text-center -mt-50">REACT</h1>
                <div className="px-4 pt-4">
                  <h2 className="dark:text-blue-500 text-blue-500 font-poppins font-bold ">React</h2>
                  <p className="text-sm font-poppins">React is a JavaScript library used to build component-based interactive user interfaces</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="dark:bg-primary bg-gray-300 p-2 rounded-lg border-t-2 border-t-blue-500 relative overflow-hidden">
                <Nextjs className="z-5" />
                <h1 className="text-9xl absolute -z-4 dark:text-backgrounddark/50 text-white/50 font-extrabold -rotate-45 text-center -mt-50">NEXTJS</h1>
                <div className="px-4 pt-4">
                  <h2 className="dark:text-blue-500 text-blue-500 font-poppins font-bold ">NextJS</h2>
                  <p className="text-sm font-poppins">Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="dark:bg-primary bg-gray-300 p-2 rounded-lg border-t-2 border-t-blue-500 relative overflow-hidden">
                <CodeigniterLogo className="z-5" />
                <h1 className="text-9xl absolute -z-4 dark:text-backgrounddark/50 text-white/50 font-extrabold -rotate-45 text-center -mt-80 -ml-20">CODEIGNITER</h1>
                <div className="px-4 pt-4">
                  <h2 className="dark:text-blue-500 text-blue-500 font-poppins font-bold ">Codeigniter</h2>
                  <p className="text-sm font-poppins">CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="dark:bg-primary bg-gray-300 p-2 rounded-lg border-t-2 border-t-blue-500 relative overflow-hidden">
                <Framermotion className="z-5" />
                <h1 className="text-9xl absolute -z-4 dark:text-backgrounddark/50 text-white/50 font-extrabold -rotate-45 text-center -ml-20">FRAMER MOTION</h1>
                <div className="px-4 pt-4">
                  <h2 className="dark:text-blue-500 text-blue-500 font-poppins font-bold ">Framer Motion</h2>
                  <p className="text-sm font-poppins">CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="dark:bg-primary bg-gray-300 p-2 rounded-lg border-t-2 border-t-blue-500 relative overflow-hidden">
                <Typescript className="z-5" />
                <h1 className="text-9xl absolute -z-4 dark:text-backgrounddark/50 text-white/50 font-extrabold -rotate-45 text-center -ml-20">TYPESCRIPT</h1>
                <div className="px-4 pt-4">
                  <h2 className="dark:text-blue-500 text-blue-500 font-poppins font-bold ">TypeScript</h2>
                  <p className="text-sm font-poppins">CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Skills;

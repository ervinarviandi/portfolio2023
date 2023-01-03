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

function Techstack() {
  return (
    <>
      <div className="px-4 py-12">
        <div className="mt-[96px] mx-auto md:max-w-3xl  xl:max-w-3xl px-4">
          <div className="w-full self-center px-4">
            <p className="text-white font-poppins font-bold text-2xl">Tech Stack </p>
            <div className="flex gap-6 flex-wrap justify-center mt-20 ">
              <HtmlLogo />
              <CssLogo />
              <JavascriptLogo />
              <BootstrapLogo />
              <TailwindLogo />
              <ReactLogo />
              <Nextjs />
              <Framermotion />
              <Typescript />
              <CodeigniterLogo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Techstack;
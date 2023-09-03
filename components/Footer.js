import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsGlobe2, BsLink45Deg, BsDribbble } from "react-icons/bs";
import { Si500Px } from "react-icons/si";
import { MdEmail, MdAlternateEmail } from "react-icons/md";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";

function Footer() {
  return (
    <>
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4 ">
          <hr className="border-dashed border-1  dark:border-card100 border-gray-700 mb-7" />
          <div className="lg:flex justify-between">
            <div className="md:w-7/12">
              <h3 className="font-poppins text-lg dark:text-primary5 mb-4 text-black">About Me</h3>
              <h1 className=" text-lg font-poppins text-3xl dark:text-[#d4d4d8] text-[#3f3f46] ">
                I&#39;m <span className="dark:text-[#d4d4d8] font-bold"> Ervin </span>, a <span className="dark:text-[#d4d4d8] font-bold"> front-end developer</span> who loves intuitive, clean and modern UI design.
              </h1>
            </div>
            <div className="md:w-5/12  ">
              <h1 className="font-poppins dark:text-primary5 text-[#3f3f46] lg:text-center lg:mt-0 mt-7">Let&#39;s Connect</h1>
              <div className="flex flex-wrap md:flex-end md:justify-end  space-x-4 text-2xl  text-gray-700 mt-4  ">
                <Tippy content="Github" placement="top" theme="light">
                  <Link href="https://github.com/ervinarviandi" aria-label="link-github" target="_blank" className=" text-gray-700 ">
                    <BsGithub className="dark:text-[#d4d4d8] dark:hover:text-white text-black" />
                  </Link>
                </Tippy>
                <Tippy content="Instagram" placement="top" theme="light">
                  <Link href="https://www.instagram.com/ervinarviandi/" aria-label="link-instagram" target="_blank" className=" text-gray-700  ">
                    <BsInstagram className="dark:text-[#d4d4d8] dark:hover:text-white text-black" />
                  </Link>
                </Tippy>
                <Tippy content="Showwcase" placement="top" theme="light">
                  <Link href="https://www.showwcase.com/ervinarviandi" aria-label="link-showcase" target="_blank" className=" text-gray-700">
                    <BsGlobe2 className="dark:text-[#d4d4d8] dark:hover:text-white text-black" />
                  </Link>
                </Tippy>
                {/* <Link href="https://react-link.vercel.app/" aria-label="link-bio" className="dark:text-[#d4d4d8] text-gray-700">
                  <BsLink45Deg className="dark:hover:text-white" />
                </Link> */}
                <Tippy content="Email" placement="top" theme="light">
                  <Link href="mailto:muhamadervin34@gmail.com" aria-label="link-email" target="_blank" className=" text-gray-700 ">
                    <MdEmail className="dark:text-[#d4d4d8] dark:hover:text-white text-black" />
                  </Link>
                </Tippy>
                <Tippy content="500px" placement="top" theme="light">
                  <Link href="https://500px.com/p/muhamadervin34?view=photos" target="_blank" aria-label="link-px500" className="  text-gray-700 ">
                    <Si500Px className="dark:text-[#d4d4d8] dark:hover:text-white text-black " />
                  </Link>
                </Tippy>
                <Tippy content="Threads" placement="top" theme="light">
                  <Link id="MyThreads" href="https://www.threads.net/@ervinarviandi" aria-label="link-px500" target="_blank" className="  text-gray-700 ">
                    <MdAlternateEmail className="dark:text-[#d4d4d8] dark:hover:text-white text-black " />
                  </Link>
                </Tippy>
              </div>
            </div>
          </div>
          <nav className="mt-10">
            <ul className="md:flex md:space-x-[30px]  ">
              <li className="dark:hover:text-white dark:text-[#d4d4d8] text-[#3f3f46] hover:text-black font-poppins">
                <Link href="/">Home</Link>
              </li>
              <li className="dark:hover:text-white dark:text-[#d4d4d8] text-[#3f3f46] hover:text-black font-poppins">
                <Link href="/MyBlog">Blog</Link>
              </li>
              <li className="dark:hover:text-white dark:text-[#d4d4d8] text-[#3f3f46] hover:text-black font-poppins">
                <Link href="/work">Portfolio</Link>
              </li>
              <li className="dark:hover:text-white dark:text-[#d4d4d8] text-[#3f3f46] hover:text-black font-poppins">
                <Link href="/Questions">Questions</Link>
              </li>
              <li className="dark:hover:text-white dark:text-[#d4d4d8] text-[#3f3f46] hover:text-black   font-poppins">
                <Link href="/Snippet">Snippet</Link>
              </li>
              <li className="dark:hover:text-white dark:text-[#d4d4d8] text-[#3f3f46] hover:text-black   font-poppins">
                <Link href="/Resume">Resume</Link>
              </li>
              <li className="dark:hover:text-white dark:text-[#d4d4d8] text-[#3f3f46] hover:text-black font-poppins">
                <Link href="/Certificate">Certificate</Link>
              </li>
            </ul>
          </nav>
          <hr className="mt-[10px] dark:border-card100" />
          <div className="mt-[22px] ">
            <p className="dark:text-[#d4d4d8] md:text-base text-sm  text-[#3f3f46]  font-poppins lg:text-left text-center">
              &copy; 2023 Develop by{" "}
              <Link href="" className="">
                Ervin Arviandi
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Footer;

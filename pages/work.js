import React from "react";
import Navigation from "../components/Navigation";
import TailwindLogo from "../src/TailwindLogo";
import Nextjs from "../src/NextJs";
import HtmlLogo from "../src/HtmlLogo";
import BootstrapLogo from "../src/BootstrapLogo";
import CssLogo from "../src/CssLogo";
import JavascriptLogo from "../src/JavascriptLogo";
import ReactLogo from "../src/ReactLogo";
import CodeigniterLogo from "../src/CodeigniterLogo";
import ViteLogo from "../src/Vite.jsx";
import Footer from "../components/Footer";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/croosocean.webp";
import Logo1 from "/public/theguardian.webp";
import Logo2 from "/public/dheni patungka.webp";
import Logo3 from "/public/erfan.webp";
import Logo4 from "/public/reza arap.webp";
import Logo5 from "/public/the last soldier.webp";
import Logo6 from "/public/hitam putih.webp";

function work() {
  return (
    <>
      <Navigation />
      <motion.div className="px-4 py-12 work " initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4  ">
          <div className="mb-10">
            <h2 className=" text-3xl  font-poppins font-extrabold md:text-7xl text-transparent bg-clip-text  bg-gradient-to-r  from-gradient100  to-gradient200    ">Portfolio</h2>
          </div>
          <p className="mb-6 md:mb-8 dark:text-primary5 text-gray-700 font-poppins text-base">
            A selection of my personal works. I&#39;ve included samples to showcase my skills and experience. Take a look around and let me know what you think. Im always open to feedback and opportunities to collaborate.
          </p>
          <hr className="border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text  border-1  dark:border-card100 border-gray-700 mt-4" />
          <h2 className="dark:text-primary5 text-gray-700 text-3xl mb-10 font-bold mt-4 ">Personal Website</h2>
          <p className="dark:text-primary10 text-gray-700 text-base font-poppins mb-5">
            I`ve put together a portfolio of my personal work, mostly from my junior years. Yo`re welcome to take a look and explore. Some of the portfolios even have website demos that you can try out if you,d like.
          </p>
          <Tab.Group manual>
            <Tab.List className="flex space-x-1 rounded-full dark:bg-card100 bg-card200 p-1 text-white ">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-gradient100 font-poppins ",
                    selected ? "bg-backgrounddark text-white " : "dark:text-gradient200  text-gradient200"
                  )
                }
              >
                Web Developer
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-gradient100 font-poppins",
                    selected ? "bg-backgrounddark text-white " : "dark:text-gradient200  text-gradient200"
                  )
                }
              >
                Web Design
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-gradient100 font-poppins",
                    selected ? "bg-backgrounddark text-white " : "dark:text-gradient200 text-gradient200"
                  )
                }
              >
                Graphic Design
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="rounded-xl dark:bg-backgrounddark p-3">
                <div className="grid md:grid-cols-2 gap-5 ">
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-card100 bg-cardlight shadow-md ">
                      <picture className="block overflow-hidden ">
                        <img src="qrcode-generator.jpg" alt="expense-project" className="hover:scale-125 overflow-hidden ease-in-out duration-700" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-primary5 text-gray-700 font-bold font-poppins text-[22px] ">
                          <a className="dark:hover:border-b-2 dark:hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text   " href=" QrGenerator">
                            {" "}
                            QR Generator
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <ReactLogo />
                          <TailwindLogo />
                        </div>
                        <p className="dark:text-primary10 text-gray-700 font-poppins text-base">A simple QR Code Generator. You can convert the web link into QR Code instantly here and download it to your local device.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-card100 bg-cardlight shadow-md  ">
                      <picture className="block overflow-hidden">
                        <img src="reactlink.jpg" className="hover:scale-125 ease-in-out duration-700" alt="reactlink" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-primary5 text-gray-700 font-bold font-poppins text-[22px]">
                          <a href="linkbio" className="hover:border-b-2 hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text  ">
                            {" "}
                            Link Bio
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />
                          <ReactLogo />
                        </div>
                        <p className="dark:text-primary10 text-gray-700 font-poppins text-base">A Bio link to connect customers to the business or portfolio website, built with react and emotion styled.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-card100 bg-cardlight shadow-md   ">
                      <picture className="block overflow-hidden">
                        <img src="nugget.jpg" className="hover:scale-125 ease-in-out duration-700" alt="nuggetpages" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-primary5 text-gray-700 font-bold font-poppins text-[22px]">
                          <a href="NuggetApp" className="hover:border-b-2 hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text  ">
                            {" "}
                            Nugget Pages
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />
                          <Nextjs />
                        </div>
                        <p className="dark:text-primary10 text-gray-700 font-poppins text-base">🍌A simple page I made to improve my slicing skills</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-card100 bg-cardlight shadow-md ">
                      <picture className="block overflow-hidden">
                        <img src="zeitplans.jpg" alt="expense-project" className="hover:scale-125 ease-in-out duration-700" />
                      </picture>

                      <div className="mt-3 p-4">
                        <h3 className="dark:text-primary5 text-gray-700 font-bold font-poppins text-[22px] ">
                          <a className="hover:border-b-2 hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text  " href="">
                            {" "}
                            Zeitplan App
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <HtmlLogo />
                          <CssLogo />
                          <JavascriptLogo />
                          <BootstrapLogo />

                          <Nextjs className="dark:text-white" />
                        </div>
                        <p className="dark:text-primary10 text-gray-700 font-poppins text-base">A landing page of a Schedule App. Its also a Dicoding Submission Project for Learn Basic of Web Programming class.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-card100 bg-cardlight shadow-md ">
                      <picture className="block overflow-hidden">
                        <img src="Crud Ci.jpg" className="hover:scale-125 ease-in-out duration-700" alt="Crud Ci" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-primary5 text-gray-700 font-bold border-b-2 border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text  border-transparent font-poppins text-[22px]">
                          <a className="hover:border-b-2 hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text " href="">
                            {" "}
                            Bookself
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <BootstrapLogo />
                          <CodeigniterLogo />
                        </div>
                        <p className="dark:text-primary10 text-gray-700 font-poppins text-base">A bookshelf app that can show, search, add, delete, update book and move book to other shelf.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-card100 bg-cardlight shadow-md  ">
                      <picture className="block overflow-hidden">
                        <img src="bubble-cleaner.jpg" className="hover:scale-125 ease-in-out duration-700" alt="bubble" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-primary5 text-gray-700 font-bold font-poppins text-[22px]">
                          <a className="hover:border-b-2 hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text  " href="https://bubble-cleaner-4rq1.vercel.app/">
                            {" "}
                            Bubble Cleaner
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />
                          <ReactLogo />
                          <ViteLogo />
                        </div>
                        <p className="dark:text-primary10 text-gray-700 font-poppins text-base">a simple landing page bubble cleaner i made to improve my slicing .</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-card100 bg-cardlight shadow-md ">
                      <picture className=" block overflow-hidden">
                        <img src="workly.jpg" className="hover:scale-125 ease-in-out duration-700" alt="workly" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-primary5 font-bold font-poppins text-[22px]">
                          <a className="hover:border-b-2 hover:border-dashed hover:bg-gradient-to-r hover:from-gradient100 hover:to-gradient200 hover:text-transparent bg-clip-text  " href="#">
                            {" "}
                            Work.ly
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />
                          <ReactLogo />
                        </div>
                        <p className="dark:text-primary10 text-gray-700 font-poppins text-base">Slicing design with React, Tailwind CSS, lazy loading image, and more.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl dark:bg-backgrounddark p-3 dark:text-white text-gray-700"></Tab.Panel>
              <Tab.Panel className="rounded-xl dark:bg-backgrounddark p-3 dark:text-white text-gray-700 ">
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <Image src={Logo} alt="gambar1" />
                  </div>
                  <div className="flex flex-col">
                    <Image src={Logo1} alt="gambar2" />
                  </div>
                  <div className="flex flex-col">
                    <Image src={Logo2} alt="gambar3" />
                  </div>
                  <div className="flex flex-col">
                    <Image src={Logo3} alt="gambar4" />
                  </div>
                  <div className="flex flex-col">
                    <Image src={Logo4} alt="gambar5" />
                  </div>
                  <div className="flex flex-col">
                    <Image src={Logo5} alt="gambar6" />
                  </div>
                  <div className="flex flex-col">
                    <Image src={Logo6} alt="gambar7" />
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}

export default work;

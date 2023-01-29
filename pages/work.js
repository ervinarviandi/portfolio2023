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
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Footer from "../components/Footer";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
function work() {
  return (
    <>
      <Navigation />
      <motion.div className="px-4 py-12 " initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4  ">
          <h1 className="dark:text-white text-gray-700 md:text-7xl text-3xl mb-10 font-poppins font-extrabold ">Portfolio</h1>
          <p className="mb-6 md:mb-8 dark:text-white text-gray-700 font-poppins text-base">
            A selection of my personal works. I,ve included samples to showcase my skills and experience. Take a look around and let me know what you think. Im always open to feedback and opportunities to collaborate.
          </p>

          <h2 className="dark:text-white text-gray-700 text-3xl mb-10 font-bold ">Personal Website</h2>
          <p className="dark:text-white text-gray-700 text-base font-poppins mb-5">
            I,ve put together a portfolio of my personal work, mostly from my junior years. You,re welcome to take a look and explore. Some of the portfolios even have website demos that you can try out if you,d like.
          </p>
          <Tab.Group manual>
            <Tab.List className="flex space-x-1 rounded-full bg-gray-900 p-1 text-white ">
              <Tab
                className={({ selected }) =>
                  classNames("w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-blue-700 font-poppins ", selected ? "bg-white text-white " : "text-pink-500")
                }
              >
                Web Developer
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames("w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-blue-700 font-poppins", selected ? "bg-white text-white " : "text-pink-500")
                }
              >
                Web Design
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames("w-full rounded-full transition  duration-700 ease-in-out delay-50 py-2.5 text-sm font-medium leading-5 text-blue-700 font-poppins", selected ? "bg-white text-white " : "text-pink-500")
                }
              >
                Graphic Design
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="rounded-xl dark:bg-gray-900 p-3">
                <div className="grid md:grid-cols-2 gap-5 ">
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-gray-800 bg-slate-200 shadow-lg  ">
                      <picture className="block overflow-hidden">
                        <img src="reactlink.jpg" className="hover:scale-125 ease-in-out duration-700" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px]">
                          <Link href="linkbio" className="hover:border-b-2 hover:border-dashed ">
                            {" "}
                            Link Bio
                          </Link>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />
                          <ReactLogo />
                        </div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">A Bio link to connect customers to the business or portfolio website.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-gray-800 bg-slate-200 shadow-lg ">
                      <picture className="block overflow-hidden">
                        <img src="zeitplans.jpg" alt="expense-project" className="hover:scale-125 ease-in-out duration-700" />
                      </picture>
                      {/* <Image src="/expenseApp_qFvD7zZ8y.jpg" width={560} height={560} alt="expense_project" className="relative" /> */}
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px] ">
                          <a className="hover:border-b-2 hover:border-dashed " href="">
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
                        <p className="dark:text-white text-gray-700 font-poppins text-base">A landing page of a Schedule App. Its also a Dicoding Submission Project for Learn Basic of Web Programming class.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-gray-800 bg-slate-200  shadow-lg">
                      <picture className="block overflow-hidden">
                        <img src="expenseApp_qFvD7zZ8y.jpg" className="hover:scale-125 ease-in-out duration-700" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-white text-gray-700 font-bold border-b-2 border-dashed border-transparent font-poppins text-[22px]">
                          <a className="hover:border-b-2 hover:border-dashed" href="">
                            {" "}
                            Bookself
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <BootstrapLogo />
                          <CodeigniterLogo />
                        </div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">A bookshelf app that can show, search, add, delete, update book and move book to other shelf.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-gray-800 bg-slate-200 shadow-lg ">
                      <picture className="block overflow-hidden">
                        <img src="notta.jpg" className="hover:scale-125 ease-in-out duration-700" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-white text-gray-700 font-bold font-poppins text-[22px]">
                          <a className="hover:border-b-2 hover:border-dashed " href="https://react-link.vercel.app/">
                            {" "}
                            Notta
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />
                          <ReactLogo />
                        </div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">App submission for Dicoding React course, Simple note taking app.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-gray-800 bg-slate-200 shadow-lg ">
                      <picture className=" block overflow-hidden">
                        <img src="workly.jpg" className="hover:scale-125 ease-in-out duration-700" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="dark:text-white font-bold font-poppins text-[22px]">
                          <a className="hover:border-b-2 hover:border-dashed " href="https://react-link.vercel.app/">
                            {" "}
                            Work.ly
                          </a>
                        </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3">
                          <TailwindLogo />
                          <ReactLogo />
                        </div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">Slicing design with React, Tailwind CSS, lazy loading image, and more.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl dark:bg-gray-900 p-3 dark:text-white text-gray-700">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden dark:bg-gray-800 bg-slate-200 shadow-lg">
                      <picture className="block overflow-hidden">
                        <img src="logo.png" className="hover:scale-125 ease-in-out duration-700" alt="logo" />
                      </picture>
                      <div className="mt-3 p-4">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">3D Room</h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">3D Room di buat menggunakan aplikasi spline </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl dark:bg-gray-900 p-3 dark:text-white text-gray-700 ">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="croosocean.jpg" className="App-logo" alt="logo" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">Cross The Ocean</h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">Cross the ocean poster dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="theguardian.jpg" className="App-logo" alt="theguardian" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">The Guardian Angel</h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster The Guardian Angel dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="erfan.jpg" className="App-logo" alt="erfanarfianda" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">Erfan Arfianda</h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster smudge painting dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="the last soldier.jpg" className="App-logo" alt="thelastsoldier" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">The Last Soldier</h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="hitam putih.jpg" className="App-logo" alt="hitam putih" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">Running With Millie</h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="dheni patungka.jpg" className="App-logo" alt="dhenypatungka" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">Dheny Patungka </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="manji.jpg" className="App-logo" alt="manji" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">Anji </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="RD.jpg" className="App-logo" alt="Radityadika" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">Raditya Dika </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="reza arap.jpg" className="App-logo" alt="Reza Arap" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">Reza Arap </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="illustrasi.jpg" className="App-logo" alt="illustrasi" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">Illustrasi </h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden">
                      <img src="gusti aji 2.jpg" className="App-logo" alt="gustiaji" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">Alice</h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="rounded-md overflow-hidden ">
                      <img src="kartun.jpg" className="App-logo" alt="kartun" />
                      <div className="mt-3">
                        <h3 className="font bold dark:text-white font-poppins text-gray-700 text-[22px] ">Cartoon</h3>
                        <div className="flex items-center space-x-2.5 mt-1.5 mb-3"></div>
                        <p className="dark:text-white text-gray-700 font-poppins text-base">poster dibuat menggunakan Adobe photoshop cc 2017 </p>
                      </div>
                    </div>
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

import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsGlobe2, BsLink45Deg, BsDribbble } from "react-icons/bs";

function Footer() {
  return (
    <>
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl  xl:max-w-3xl px-4 ">
          <hr className="mt-[10px] dark:bg-white" />
          <div className="flex ">
            <div className="flex items-center mt-[10px]">
              {/* kiri */}
              <nav>
                <ul className="md:flex md:space-x-[30px] dark:text-slate-300 font-poppins ">
                  <li className="hover:text-pink-500">
                    <Link href="/b">Home</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/b">Blog</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/b">Portfolio</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/b">Tags</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/b">Snippet</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/b">Resume</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/b">Certificate</Link>
                  </li>
                </ul>
              </nav>

              {/* kanan */}
            </div>
          </div>
          <div className="flex items-center space-x-[20px] dark:text-gray-200 mt-[30px] text-2xl  ">
            <BsGithub className="dark:text-slate-300 dark:hover:text-pink-500" />
            <BsInstagram className="dark:text-slate-300 dark:hover:text-pink-500" />
            <BsGlobe2 className="dark:text-slate-300 dark:hover:text-pink-500" />
            <BsLink45Deg className="dark:text-slate-300 dark:hover:text-pink-500" />
          </div>
          <div className="mt-[20px]">
            <p className="dark:text-slate-300 text-center font-poppins">
              Copyright &copy; 2023 Develop by{" "}
              <a href="" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Ervin Arviandi
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Footer;

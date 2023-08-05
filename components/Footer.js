import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsGlobe2, BsLink45Deg, BsDribbble } from "react-icons/bs";
import { Si500Px } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4 ">
          <hr className="mt-[10px] dark:bg-white" />
          <div className="flex ">
            <div className="flex items-center mt-[10px]">
              {/* kiri */}
              <nav>
                <ul className="md:flex md:space-x-[30px] dark:text-slate-300 text-gray-500 font-poppins ">
                  <li className="hover:text-pink-500">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/MyBlog">Blog</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/work">Portfolio</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/Questions">Questions</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/Snippet">Snippet</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/Resume">Resume</Link>
                  </li>
                  <li className="hover:text-pink-500">
                    <Link href="/Certificate">Certificate</Link>
                  </li>
                </ul>
              </nav>

              {/* kanan */}
            </div>
          </div>
          <div className="flex items-center space-x-[20px] dark:text-gray-200 mt-[30px] text-2xl  ">
            <Link href="https://github.com/ervinarviandi">
              <BsGithub className="dark:text-slate-300 dark:hover:text-pink-500 hover:text-pink-500  text-gray-500" />
            </Link>
            <Link href="https://www.instagram.com/ervinarviandi/">
              <BsInstagram className="dark:text-slate-300 dark:hover:text-pink-500 hover:text-pink-500 text-gray-500" />
            </Link>
            <Link href="https://www.showwcase.com/ervinarviandi">
              <BsGlobe2 className="dark:text-slate-300 dark:hover:text-pink-500 hover:text-pink-500 text-gray-500" />
            </Link>
            <Link href="https://react-link.vercel.app/">
              <BsLink45Deg className="dark:text-slate-300 dark:hover:text-pink-500 hover:text-pink-500 text-gray-500" />
            </Link>
            <Link href="mailto:muhamadervin34@gmail.com">
              <MdEmail className="dark:text-slate-300 dark:hover:text-pink-500 hover:text-pink-500 text-gray-500" />
            </Link>
            <Link href="https://500px.com/p/muhamadervin34?view=photos">
              <Si500Px className="dark:text-slate-300 dark:hover:text-pink-500 hover:text-pink-500 text-gray-500" />
            </Link>
          </div>
          <div className="mt-[20px] ">
            <p className="dark:text-slate-300 text-gray-500 text-center font-poppins">
              Copyright &copy; 2023 Develop by{" "}
              <Link href="" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
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

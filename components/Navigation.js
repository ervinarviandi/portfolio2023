import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
// import { MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import Image from "next/image";

import LoadingBar from "react-top-loading-bar";

const Navigation = () => {
  const [progress, setProgress] = useState(0);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("transparent");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#transparent");
        setTextColor("#ffffff");
      } else {
        setColor("#transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button className="bg-card100 p-2 rounded-lg  " onClick={() => setTheme("light")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#f59e0b" viewBox="0 0 24 24" stroke-width="2" stroke="#f59e0b" className="w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button className="bg-card200 p-2 rounded-lg " onClick={() => setTheme("dark")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#33dbd1" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" className="w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      );
    }
  };

  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full  ease-in duration-300 dark:text-white backdrop-blur-md bg-black/90   z-10">
      <LoadingBar color="#fbbf24" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <hr className="relative h-2 w-full bg-gradient-to-r  from-gradient100 via-gradient200 to-teal-200 before:absolute before:inset-0 before:bg-gradient-to-r before:from-gradient100 before:to-gradient200 before:animate-pulse rou  " />
      <div className=" md:max-w-5xl xl:max-w-5xl mx-auto flex justify-between items-center p-4 ">
        {/* Mobile Button */}

        <Link href="/" className="flex items-center space-x-3">
          <Image src="/ervinarviandii.webp" className=" rounded-full" width={30} height={30} alt="profile" />
          <h1
            // style={{ color: `${textColor}` }}
            className="font-bold text-1xl z-index: 50 font-poppins text-[18px] dark:text-white"
          >
            Ervin Arviandi
          </h1>
        </Link>

        {/* Mobile Button */}

        <ul
          // style={{ color: `${textColor}` }}
          className="hidden sm:flex"
        >
          <li className="p-4  font-poppins dark:text-white ">
            <Link onClick={() => setProgress(100)} href="/" className="hover:text-gradient200">
              Home
            </Link>
          </li>
          <li className="p-4 font-poppins dark:text-white">
            <Link onClick={() => setProgress(100)} href="/about" className=" hover:text-gradient200">
              About
            </Link>
          </li>
          <li className="p-4  font-poppins dark:text-white">
            <Link onClick={() => setProgress(100)} href="/work" className="hover:text-gradient200">
              Portfolio
            </Link>
          </li>
          <li className="p-4  font-poppins dark:text-white">
            <Link onClick={() => setProgress(100)} href="/MyBlog" className="hover:text-gradient200">
              Blog
            </Link>
          </li>
          <li className="p-4  font-poppins dark:text-white">
            <Link onClick={() => setProgress(100)} href="/GuestBook" className="hover:text-gradient200">
              Guestbook
            </Link>
          </li>
          <li className="p-4  font-poppins dark:text-white">
            <Link onClick={() => setProgress(100)} href="/MyContact" className="hover:text-gradient200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}

        <div className="flex justify-center items-center gap-2">
          {renderThemeChanger()}

          <div onClick={handleNav} className=" z-10 dark:text-white lg:hidden block ">
            {nav ? (
              <XMarkIcon
                className="w-6 h-6 "
                //  style={{ color: `${textColor}` }}
              />
            ) : (
              <Bars3Icon
                className="w-6 h-6"
                // style={{ color: `${textColor}` }}
              />
            )}
          </div>
        </div>

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  backdrop-filter backdrop-blur-lg dark:bg-backgrounddark bg-white text-center ease-in duration-300 z-8"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen dark:bg-backgroundark backdrop-filter backdrop-blur-lg text-center ease-in  duration-300 z-8 dark:text-white   "
          }
        >
          <ul>
            <li className="p-4 text-2xl  font-poppins dark:text-white text-black">
              <Link onClick={() => setProgress(100)} href="/" className="hover:text-gradient200">
                Home
              </Link>
            </li>
            <hr className="text-sky-500 w-[100%]" />
            <li className="p-4 text-2xl font-poppins dark:text-white text-black">
              <Link onClick={() => setProgress(100)} href="/about" className="hover:text-gradient200">
                About
              </Link>
            </li>
            <hr />
            <li className="p-4 text-2xl  font-poppins dark:text-white text-black">
              <Link onClick={() => setProgress(100)} href="/work" className="hover:text-gradient200">
                Portfolio
              </Link>
            </li>
            <hr />
            <li className="p-4 text-2xl font-poppins dark:text-white text-black">
              <Link onClick={() => setProgress(100)} href="/MyBlog" className="hover:text-gradient200">
                Blog
              </Link>
            </li>
            <hr />
            <li className="p-4 text-2xl font-poppins dark:text-white text-black">
              <Link onClick={() => setProgress(100)} href="/GuestBook" className="hover:text-gradient200">
                GuestBook
              </Link>
            </li>
            <hr />
            <li className="p-4 text-2xl font-poppins dark:text-white text-black">
              <Link onClick={() => setProgress(100)} href="/MyContact" className="hover:text-gradient200">
                Contact
              </Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

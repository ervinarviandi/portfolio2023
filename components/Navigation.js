import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#transparent");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full  ease-in duration-300 text-white backdrop-blur-md bg-black/90 shadow-lg border-b border-purple-700 z-10">
      <hr className="relative h-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-lime-300 before:animate-pulse" />
      <div className=" md:max-w-3xl xl:max-w-3xl m-auto flex justify-between items-center p-4 ">
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <XMarkIcon className="w-6 h-6" style={{ color: `${textColor}` }} /> : <Bars3Icon className="w-6 h-6" style={{ color: `${textColor}` }} />}
        </div>
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-1xl z-index: 50 font-poppins text-[18px]">
            Ervin Arviandi
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hover:text-pink-500 font-poppins">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-pink-500 font-poppins">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 hover:text-pink-500 font-poppins">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4 hover:text-pink-500 font-poppins">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu */}

        <button className=" hover:text-pink-300 bg-sky-900  p-2 rounded-lg sm:top-0 sm:left-0 z-10 ">
          <MoonIcon className="w-5 h-5 animate-pulse " />
        </button>

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  backdrop-filter backdrop-blur-lg bg-black text-center ease-in duration-300 -z-10"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black backdrop-filter backdrop-blur-lg text-center ease-in duration-300 -z-10"
          }
        >
          <ul>
            <li className="p-4 text-2xl hover:text-pink-500 font-poppins">
              <Link href="/">Home</Link>
            </li>
            <hr className="text-sky-500 w-[100%]" />
            <li className="p-4 text-2xl hover:text-pink-500 font-poppins">
              <Link href="/about">About</Link>
            </li>
            <hr />
            <li className="p-4 text-2xl hover:text-pink-500 font-poppins">
              <Link href="/work">Work</Link>
            </li>
            <hr />
            <li className="p-4 text-2xl hover:text-pink-500 font-poppins">
              <Link href="/contact">Contact</Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

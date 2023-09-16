import React from "react";
import Image from "next/image";
import Notfound from "../public/notfound.png";
import Link from "next/link";
import { RiHomeGearFill } from "react-icons/ri";

const Error = () => {
  return (
    <div>
      <div className="lg:max-w-6xl mx-auto mt-48 px-4">
        <h2 className="text-7xl font-poppins font-extrabold  text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gradient100 to-gradient200  ">Oops !</h2>
        <h4 className="font-poppins text-lg font-semibold text-center">404-PAGE NOT FOUND</h4>
        <p className="text-md font-poppins lg:w-7/12 md:w-5/12 text-center mx-auto py-4">The page you are lookig for might have bee removed had it&#39;s name changed os ir temporarily unavailable.</p>

        <Link
          href="/"
          className="flex lg:w-3/12 md:w-7/12 w-7/12 mx-auto justify-center items-center text-center px-6 py-2 rounded-lg  font-poppins font-bold bg-gradient100
       "
        >
          <RiHomeGearFill className="mr-2 text-white" />
          <span className="text-md font-poppins text-white"> GO Back</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;

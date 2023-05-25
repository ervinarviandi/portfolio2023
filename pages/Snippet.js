import React from "react";
import Image from "next/image";
import Notfound from "../public/notfound.png";
import Link from "next/link";
import { RiHomeGearFill } from "react-icons/ri";

const Snippet = () => {
  return (
    <div>
      <div className="lg:max-w-6xl mx-auto mt-[96px] px-4">
        <Image src={Notfound} alt="error" width={500} height={500} className="justify-center items-center mx-auto mb-7 animate animate-pulse" />
        <marquee>
          <h2 className="text-3xl font-poppins font-bold text-gray-300 text-center mb-10">Sorry, Page Not Found</h2>
        </marquee>
        <Link
          href="/"
          className="flex w-4/12 mx-auto justify-center items-center text-center px-6 py-2 rounded-lg  font-poppins font-bold bg-amber-500
       "
        >
          <RiHomeGearFill className="mr-2 animate animate-bounce" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Snippet;

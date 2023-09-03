import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import ReactLogo from "../src/ReactLogo";
import TailwindLogo from "../src/TailwindLogo";
import { FaEdit } from "react-icons/fa";
import Logo from "../src/images/qrcode-generator.jpg";

function QrGenerator() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl xl:max-w-4xl px-4 ">
          <h1 className="dark:text-white text-3xl mb-10 font-poppins font-bold">QR Generator</h1>
          <p className="mb-6 md:mb-8 dark:text-white font-poppins text-base">
            A selection of my personal works. I,ve included samples to showcase my skills and experience. Take a look around and let me know what you think. Im always open to feedback and opportunities to collaborate.
          </p>
          <div className="flex items-center space-x-5">
            <div className="flex items-center dark:text-white">
              <a href="https://github.com/ervinarviandi/QRCode-Generator" className="flex items-center space-x-3 border-b-2 border-dashed  hover:text-gradient200 font-bold py-2">
                <BsGithub />
                <h4>Repository</h4>
              </a>
            </div>
            <div className="flex items-center dark:text-white">
              <a href="https://qr-ervinarviandi.vercel.app/" className="flex items-center space-x-3 hover:text-gradient200  border-b-2 py-2 border-dashed  dark:hover:text-gradient200 font-bold">
                <BsGlobe2 />
                <h4>Live Demo</h4>
              </a>
            </div>
          </div>

          <hr className="mt-10 dark:border-card100 " />

          <div className="flex items-center space-x-4 mt-5">
            <ReactLogo />
            <TailwindLogo />
          </div>

          <Image src={Logo} className=" w-full mt-7" width={700} height={700} alt="qrcode" />

          <p className="dark:text-white text-base font-poppins mt-5">A simple QR Code Generator. You can convert the web link into QR Code instantly here and download it to your local device</p>

          {/* <p className="dark:text-white text-base font-poppins mt-7">
            The benefits are to quickly increase the number of visits to all online/portfolio business channels, be it social media, online shops, or marketplaces used to run a business.
          </p> */}
          <div className="flex justify-between ">
            <div className="">
              <a href="https://github.com/ervinarviandi/QRCode-Generator" className=" flex items-center space-x-4 dark:text-white font-bold font-poppins border-b-2 py-2 border-dashed  mt-4  font-bold">
                <FaEdit />
                <h4 className=" font-poppins hover:text-gradient200">Edit On Github</h4>
              </a>
            </div>
            {/* <div className="">
            <Link href="" className="flex items-center space-x-4 text-white font-bold font-poppins  border-b-2 py-2 border-dashed   font-bold">
              <MdVerticalAlignTop />
              <h4 className=" text-white font-poppins">Back To Top</h4>
            </Link>
          </div> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default QrGenerator;

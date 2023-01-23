import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import ReactLogo from "../src/ReactLogo";
import BootstrapLogo from "../src/BootstrapLogo";
import { FaEdit } from "react-icons/fa";
import { MdVerticalAlignTop } from "react-icons/md";

function linkbio() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl xl:max-w-4xl px-4 ">
          <h1 className="dark:text-white text-3xl mb-10 font-poppins font-bold">Link Bio</h1>
          <p className="mb-6 md:mb-8 dark:text-white font-poppins text-base">
            A selection of my personal works. I,ve included samples to showcase my skills and experience. Take a look around and let me know what you think. Im always open to feedback and opportunities to collaborate.
          </p>
          <div className="flex items-center space-x-5">
            <div className="flex items-center dark:text-white">
              <Link href="https://github.com/ervinarviandi/portfolio2023" className="flex items-center space-x-3 border-b-2 border-dashed  hover:text-pink-500 font-bold py-2">
                <BsGithub />
                <h4>Repository</h4>
              </Link>
            </div>
            <div className="flex items-center dark:text-white">
              <Link href="https://react-link.vercel.app/" className="flex items-center space-x-3 hover:text-pink-500  border-b-2 py-2 border-dashed  dark:hover:text-pink-500 font-bold">
                <BsGlobe2 />
                <h4>Live Demo</h4>
              </Link>
            </div>
          </div>

          <hr className="mt-10" />

          <div className="flex items-center space-x-4 mt-5">
            <BootstrapLogo />
            <ReactLogo />
          </div>

          <img src="reactlink.jpg" className="w-full mt-7" />

          <p className="dark:text-white text-base font-poppins mt-5">
            Link bio ini adalah project kecil-kecilan yang saya buat untuk menambah portfolio saya, project ini saya buat karena terinspirasi oleh beberapa content creator dan para pembisnis di sosial media yang menggunakan layanan linktree
            untuk membantu mereka dalam membuat halaman khusus untuk berbisnis secara online / dengan kata lain para pengunjung akan dengan mudah dapat mengakses seluruh konten yang ada dengan mengklik link utama saja{" "}
          </p>

          <p className="dark:text-white text-base font-poppins mt-7">
            manfaatnya untuk meningkatkan jumlah kunjungan ke semua saluran bisnis online/portfolio dengan cepat, baik itu media sosial, toko online, maupun marketplace yang digunakan untuk menjalankan bisnis.
          </p>
          <div className="flex justify-between ">
            <div className="">
              <a href="https://github.com/ervinarviandi/React-Link" className=" flex items-center space-x-4 dark:text-white font-bold font-poppins border-b-2 py-2 border-dashed   font-bold">
                <FaEdit />
                <h4 className="dark:text-white font-poppins">Edit On Github</h4>
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

export default linkbio;

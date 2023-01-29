import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import AOS from "aos";
// import "aos/dist/aos.css";

function about() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4 ">
        <div className="flex flex-wrap" initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
          <div className="w-full self-center px-4 lg:w-1/2">
            <img src="avatar-ervin.png" className="w-48 h-48 md:w-50 md:h-50 md:hidden lg:hidden rounded-lg lg:-z-20 p-4 aspect-square" data-aos="fade-left" />
            <h2 className="flex flex-col font-light text-[34px] font-bold dark:text-white text-gray-700 font-poppins" data-aos="fade-up">
              Muhammad Ervin Arviandi
            </h2>
            <h5 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[24px] mt-7 font-poppins" data-aos="fade-right">
              Frontend Developer
            </h5>
          </div>
          <div className="w-full self-center px-4 lg:w-1/2">
            <img src="avatar-ervin.png" className="  w-52 h-52 hidden md:w-30 md:h-30 rounded-lg lg:block lg:-z-20 mt-[20px] rounded-full  " data-aos="fade-left" />
            <div></div>
          </div>

          <div className="w-full mt-10 px-4 space-y-5" data-aos="fade-up" data-aos-delay="300">
            <p className="dark:text-white text-gray-700 font-poppins text-base">
              Halo👋, saya <span className="font-bold underline decoration-pink-500"> Muhammad Ervin Arviandi </span>,saya sangat suka dengan desain grafis, coding, musik, dan kopi, selamat datang di website pribadi saya dimana kalian,
              dapat menemukan portfolio, blog dan lainnya.
            </p>
            <p className="dark:text-white text-gray-700 font-poppins text-base">
              Sebagai <span className="font-bold"> Pengembang web otodidak </span>, saya mulai belajar pengembangan web ketika saya duduk di kelas 12 dan secara bertahap meningkatkan keterampilan saya dari waktu ke waktu.
            </p>
            <p className="dark:text-white text-gray-700 font-poppins text-base">
              Saya sangat senang membuat <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold"> Website </span> meskipun masih banyak kekurangan, untuk kedepannnya saya akan terus belajar
              bagaimana membuat sebuah aplikasi/website yang bisa berguna untuk masyarakat luas, untuk sekarang saya masih fokus untuk membuat tampilan depan sebuah website atau dalam dunia{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">IT</span> disebutnya{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold"> Frontend Developer</span> dan menggabungkan dengan beberapa teknologi yang yang membuat sebuah website terlihat menarik.
            </p>

            <p className="dark:text-white text-gray-700 font-poppins text-base">
              Saya sangat tertarik dengan <span className="font-bold"> Frontend Architecture</span>, <span className="font-bold"> Frontend Accessibility</span>, and <span className="font-bold">User Experience</span>, dan membuat aplikasi
              mobile dengan flutter.
            </p>

            <p className="dark:text-white text-gray-700 font-poppins text-base">
              Di website ini saya suka membagikan berbagai <span className="font-bold"> Pemikiran</span> saya tentang topik, terkait pengembangan web <span className="font-bold">kehidupan sehari-hari</span> secara umum dan tempat untuk
              memamerkan <span className="font-bold">portfolio</span> saya.
            </p>

            <div className="">
              <blockquote className="dark:text-white text-gray-700 text-gray-500 text-2xl border-l-4  border-l-pink-500 ">
                <p className="ml-4 italic font-poppins text-base">the important thing is not to stop questioning.Curiosity has its own reason for exitense.</p>
                <h5 className="font-bold dark:text-white italic ml-4 mt-5 font-poppins ">-Albert Einstein</h5>
              </blockquote>
            </div>

            <p className="dark:text-gray-200 text-gray-700 font-poppins text-base">
              saya mulai belajar <span className="font-bold dark:text-white">Web Development</span> di awal <span className="font-bold">tahun 2021 </span> secara otodidak, tapi sebelum itu terjadi sebenarnya saya sudah belajar dasar-dasar{" "}
              <span className="font-bold dark:text-white">Software Enginering</span> waktu <span className="font-bold dark:text-white">SMK</span>, secara otodidak. sekarang saya fokus pada pengembangan{" "}
              <span className="font-bold dark:text-white">Frontend Development</span>, dan <span className="font-bold dark:text-white">Mobile App Development.</span>
            </p>

            <p className="dark:text-gray-200 text-gray-700 font-poppins text-base">
              Di website pribadi saya ini, saya suka membagikan berbagai pemikiran saya, termasuk <span className="font-bold dark:text-white">Web Development</span>, dan memamerkan{" "}
              <span className="font-bold dark:text-white">Website pribadi saya.</span>
            </p>
          </div>
        </div>
      </section>
      <Skills />

      <Footer />
    </>
  );
}

export default about;

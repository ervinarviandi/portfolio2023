import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
// import Link from "next/link";
import Image from "next/image";
import Image1 from "/backend.jpg";
import Image2 from "/baparekraf-developer.jpg";
import Image3 from "/software-developer.jpg";
import Image4 from "/dicoding-scholarship.jpg";
import Image5 from "/mobile-enginer.jpg";
import Image6 from "/modular-javascript.jpg";
import Image7 from "/javascriptevents.jpg";
import Image8 from "/idcamp.jpg";
import Image9 from "/flutter.jpg";
import Image10 from "/Cintessa.jpg";
import Image11 from "/wbix.jpg";
// import Image12 from "/progate.png";
function Certificate() {
  return (
    <>
      <Navigation />
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4">
          <div className="mb-10">
            <h2 className=" text-3xl  font-poppins font-extrabold md:text-7xl text-transparent bg-clip-text  bg-gradient-to-r  from-gradient100  to-gradient200 before:relative before:inset-0 before:bg-gradient-to-r before:from-pink-300  before:to-blue-300 ">
              Certificate
            </h2>
          </div>
          <p className="dark:text-white text-gray-700 text-base font-poppins mt-4">Di bawah ini adalah beberapa sertifikat yang pernah saya dapatkan saat mengikuti beberapa event dan webinar </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div className="" initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
                  <Image src={Image1} width={300} height={300} className="app-baparekraf hover:brightness-50 " alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.3, type: "spring" }}>
                  <Image src={Image2} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.4, type: "spring" }}>
                  <Image src={Image3} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.5, type: "spring" }}>
                  <Image src={Image4} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.6, type: "spring" }}>
                  <Image src={Image5} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.7, type: "spring" }}>
                  <Image src={Image6} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.8, type: "spring" }}>
                  <Image src={Image7} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <Image src={Image8} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <Image src={Image9} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <Image src={Image10} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <Image src={Image11} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            {/* <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <Image src={Image12} width={300} height={300} className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Certificate;

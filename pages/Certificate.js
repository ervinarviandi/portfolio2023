import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
// import Link from "next/link";
import Image from "next/image";

function Certificate() {
  return (
    <>
      <Navigation />
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4">
          <div className="mb-10">
            <h2 className=" text-3xl  font-poppins font-extrabold md:text-7xl text-transparent bg-clip-text  bg-gradient-to-r  from-pink-500  to-blue-500 before:relative before:inset-0 before:bg-gradient-to-r before:from-pink-500  before:to-blue-500 ">
              Certificate
            </h2>
          </div>
          <p className="dark:text-white text-gray-700 text-base font-poppins mt-4">Di bawah ini adalah beberapa sertifikat yang pernah saya dapatkan saat mengikuti beberapa event dan webinar </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div className="" initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
                  <i src="baparekraf-developer.jpg" className="app-baparekraf hover:brightness-50 " alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.3, type: "spring" }}>
                  <Image src="idcamp.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.4, type: "spring" }}>
                  <Image src="flutter.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.5, type: "spring" }}>
                  <Image src="javascriptevents.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.6, type: "spring" }}>
                  <Image src="software-developer.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.7, type: "spring" }}>
                  <Image src="backend.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.8, type: "spring" }}>
                  <Image src="modular-javascript.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <Image src="mobile-enginer.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <Image src="progate.png" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <Image src="Cintessa.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <Image src="wbix.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <Image src="dicoding-scholarship.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
              </figure>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Certificate;

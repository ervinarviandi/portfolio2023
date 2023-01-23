import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Certificate() {
  return (
    <>
      <Navigation />
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4">
          <h1 className="dark:text-white text-gray-700 font-poppins text-3xl font-bold">Certificate</h1>
          <p className="dark:text-white text-gray-700 text-base font-poppins mt-4">Di bawah ini adalah beberapa sertifikat yang pernah saya dapatkan saat mengikuti beberapa event dari dicoding </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div className="" initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring" }}>
                  <img src="baparekraf-developer.jpg" className="app-baparekraf hover:brightness-50 " alt="cerificate" />
                </motion.div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.3, type: "spring" }}>
                  <img src="idcamp.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
                <div className=""></div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.4, type: "spring" }}>
                  <img src="flutter.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
                <div className=""></div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.5, type: "spring" }}>
                  <img src="javascriptevents.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
                <div className=""></div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.6, type: "spring" }}>
                  <img src="software-developer.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
                <div className=""></div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.7, type: "spring" }}>
                  <img src="backend.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
                <div className=""></div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.8, type: "spring" }}>
                  <img src="modular-javascript.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
                <div className=""></div>
              </figure>
            </div>
            <div className="flex flex-col">
              <figure className=" mt-4">
                <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.9, type: "spring" }}>
                  <img src="mobile-enginer.jpg" className="hover:brightness-50" alt="cerificate" />
                </motion.div>
                <div className=""></div>
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

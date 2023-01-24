import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Questions from "../components/Questions";

function Question() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <div className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4">
          <div className="">
            <h2 className="dark:text-white text-gray-700 font-poppins text-2xl">Questions</h2>
            <p className="dark:text-white text-gray-700 font-poppins text-base mt-4">Di Bawah Ini adalah Beberapa pertanyaan Yang Sering Di tanyakan</p>
            <Questions />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Question;
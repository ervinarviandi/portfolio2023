import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Questions from "../components/Questions";

function Question() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <div className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4 ">
          <div className="">
            <div className="mb-10">
              <h2
                id="quote"
                className=" text-3xl  font-poppins font-extrabold md:text-7xl text-transparent bg-clip-text  bg-gradient-to-r  from-pink-500  to-blue-500 before:relative before:inset-0 before:bg-gradient-to-r before:from-pink-500  before:to-blue-500 "
              >
                Questions
              </h2>
              <div className="mt-20">
                <picture>
                  <img src="undraw_questions_re_1fy7.svg" alt="Questions" width="400" />
                </picture>
              </div>
            </div>
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

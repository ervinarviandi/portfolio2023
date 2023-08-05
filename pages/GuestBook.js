import React from "react";
import Navigation from "../components/Navigation";
import Comment from "../components/Comment";
import Footer from "../components/Footer";

function Guestbook() {
  return (
    <>
      <Navigation />
      <main className="px-4 py-12 guestbook">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-poppins font-extrabold md:text-7xl text-transparent bg-clip-text  bg-gradient-to-r  from-pink-500  to-blue-500 before:relative before:inset-0 before:bg-gradient-to-r before:from-pink-500  before:to-blue-500 ">
              Guestbook
            </h2>
          </div>
          <p className="dark:text-white text-gray-700 font-poppins text-base mt-4 mb-5">
            Hey, leave a little message to let me and other visitors know you were here. You can write whatever you want, maybe some appreciation, a friendly message, a joke, or just a quick hello.🤪👋🙏{" "}
          </p>
          <div>
            <Comment />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Guestbook;

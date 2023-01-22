import React from "react";
import Navigation from "../components/Navigation";
import Comment from "../components/Comment";
import Footer from "../components/Footer";

function Guestbook() {
  return (
    <>
      <Navigation />
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl px-4">
          <h1 className="dark:text-white text-gray-700 font-poppins text-3xl font-bold">Guestbook</h1>
          <p className="dark:text-white text-gray-700 font-poppins text-base mt-4 mb-5">jika kamu ingin bertanya silahkan tinggalkan pesan di bawah ini, terimaksih 🤪 </p>
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

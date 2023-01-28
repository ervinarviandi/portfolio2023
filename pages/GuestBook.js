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
          <h1 className="dark:text-white text-gray-700 font-poppins text-7xl font-extrabold">Guestbook</h1>
          <p className="dark:text-white text-gray-700 font-poppins text-base mt-4 mb-5">
            Hei, tinggalkan sedikit pesan agar aku dan pengunjung lain tahu kamu ada di sini. kamu dapat menulis apa pun yang kamu inginkan, mungkin penghargaan, pesan ramah, lelucon, atau sekadar halo singkat.🤪👋🙏{" "}
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

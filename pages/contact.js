import React from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function errorPage() {
  return (
    <>
      <Navigation />
      <main className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl ">
          <h1 className=" font-poppins text-3xl dark:text-white text-gray-700 font-bold">Contact</h1>
          <main className="md:flex lg:flex dark:bg-black mt-10 ">
            {/* Headline */}
            <div className="md:w-7/12 mb-56">
              <form>
                <div className="w-full lg:w-7/12 ">
                  <div className="w-full px-4 mb-8">
                    <label for="name" class="text-base font-bold text-primary">
                      Nama
                    </label>
                    <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500" />
                  </div>
                  <div className="w-full px-4 mb-8">
                    <label for="email" class="text-base font-bold text-primary">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500" />
                  </div>
                  <div class="w-full px-4 mb-8">
                    <label for="message" className="text-base font-bold text-primary">
                      Pesan
                    </label>
                    <input type="message" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500 h-32" />
                  </div>
                  <div className="relative w-full px-4">
                    <button className=" absolute flex font-poppins text-base items-center  border-2 dark:text-white text-gray-700 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg ">
                      Kirim
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Hero */}
            <div className="relative">
              <img src="right-side-arrow.png" width="90" height="90" className="inset-y-0  right-0 mt-60 mr-9 md:block hidden" />
              <h4 className="dark:text-white text-gray-700 font-poppins md:block hidden">Lihat Lokasi</h4>
            </div>
            <div className=" bg-black px-4  h-96 w-full md:w-5/12  mt-20 ">
              <figure>
                <iframe
                  className="w-full h-96 "
                  width=""
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=wawo,Dompu,%20West%20Nusa%20Tenggara&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </figure>
            </div>
          </main>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default errorPage;

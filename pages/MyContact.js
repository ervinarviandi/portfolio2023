import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "next/link";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

function MyContact() {
  return (
    <>
      <Navigation />

      <main className="mt-[98px] mx-auto md:max-w-4xl xl:max-w-4xl dark:bg-card100 bg-card200 rounded-lg lg:flex md:flex w-screen mx-auto hidden lg:block md:block bgik ">
        {/* Contact */}
        <div className="w-7/12 flex flex-row items-center px-[90px] ">
          <div>
            <div className="mb-10 md:max-w-4xl xl:max-w-4xl">
              <h2 className="text-3xl font-poppins font-extrabold md:text-7xl text-transparent bg-clip-text  bg-gradient-to-r bg-gradient-to-r from-gradient100 via-gradient200 to-bg-gradient200 before:relative before:inset-0 before:bg-gradient-to-r before:from-gradient100  before:to-blue-500 ">
                Contact
              </h2>
            </div>
            {/* <h2 className="text-2xl font-poppins font-bold dark:text-white text-gray-700">Contact</h2> */}
            <form name="ervin-contact-form">
              <div className="w-full">
                <div className="w-full px-4 mb-8">
                  <label for="name" class="text-base font-bold dark:text-primary5 text-gray-700">
                    Nama
                  </label>
                  <input type="text" id="name" name="user_name" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-gradient100 focus:ring-1 focus:border-gradient100" />
                </div>
                <div className="w-full px-4 mb-8">
                  <label for="email" className="text-base font-bold dark:text-primary5 text-gray-700">
                    Email
                  </label>
                  <input type="email" id="email" name="user_email" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-gradient100 focus:ring-1 focus:border-gradient100" />
                </div>
                <div class="w-full px-4 mb-8">
                  <label for="message" className="text-base font-bold dark:text-primary5 text-gray-700">
                    Pesan
                  </label>
                  <textarea type="message" id="name" name="message" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-gradient100 focus:ring-1 focus:border-gradient100 h-32" />
                </div>
                <div className=" w-full px-4">
                  <Button href="" type="submit" value="send" className="absolute flex font-poppins text-base items-center text-primary5 text-gray-700 font-poppins py-2 px-5  rounded-lg bg-gradient100  hover:shadow-2xl  ">
                    Kirim
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-5/12 bg-gray-400">
          <iframe
            className="w-full h-screen  grid  "
            width=""
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=-8.554087683049566,%20118.43171044960754&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="yes"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </main>

      <main className="px-4 py-12 lg:hidden md:hidden xl:hidden block bgik">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl ">
          <div className="mb-10">
            <h2 className="text-3xl font-poppins font-extrabold md:text-7xl text-transparent bg-clip-text  bg-gradient-to-r  bg-gradient-to-r from-gradient100 via-gradient200 to-gradient200 before:relative before:inset-0 before:bg-gradient-to-r before:from-gradient100  before:to-blue-500 ">
              Contact
            </h2>
          </div>
          <main className="md:flex lg:flex dark:bg-card100 bg-card200 mt-10 rounded-lg py-4 ">
            {/* Headline */}
            <div className="md:w-7/12 mb-56">
              <form name="ervin-contact-form">
                <div className="w-full lg:w-7/12 ">
                  <div className="w-full px-4 mb-8">
                    <label for="name" className="text-base font-bold  dark:text-primary5 text-gray-700">
                      Nama
                    </label>
                    <input type="text" id="name" name="nama" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-gradient100 focus:ring-1 focus:border-gradient100" />
                  </div>
                  <div className="w-full px-4 mb-8">
                    <label for="email" className="text-base font-bold dark:text-primary5 text-gray-700">
                      Email
                    </label>
                    <input type="email" id="email" name="email" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-gradient100 focus:ring-1 focus:border-gradient100" />
                  </div>
                  <div class="w-full px-4 mb-8">
                    <label for="message" className="text-base font-bold  dark:text-primary5 text-gray-700">
                      Pesan
                    </label>
                    <textarea type="message" id="name" name="pesan" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-gradient100 focus:ring-1 focus:border-gradient100 h-32" />
                  </div>
                  <div className=" px-4">
                    <Button href="" className="absolute flex font-poppins text-base items-center border-gradient200 border-2 dark:text-primary5 text-gray-700  py-2 px-5  rounded-lg bg-gradient100 hover:shadow-2xl ">
                      Kirim
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Hero */}

            <div className="relative py-4">
              <picture>
                <img src="right-side-arrow.png" width="90" height="90" className="inset-y-0  right-0 mt-60 mr-9 md:block hidden " alt="icons" />
              </picture>
            </div>
            <div className="  rounded-lg  px-4  h-screen w-full md:w-5/12  mt-10 ">
              <figure className="shadow-lg">
                <iframe
                  className="w-full h-screen "
                  width=""
                  id="gmap_canvas"
                  // src="https://maps.google.com/maps?q=wawo,Dompu,%20West%20Nusa%20Tenggara&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  // // src="https://www.google.com/maps/embed?pb=!4v1674717090785!6m8!1m7!1smAebVP4pWsoKV-N8zesUcA!2m2!1d-8.554098816804652!2d118.4318300762977!3f269.5188534322473!4f3.7516221478486216!5f0.7820865974627469"
                  // src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d1686.191135723415!2d118.43063972618768!3d-8.553956683762724!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dca6f71635eb141%3A0xd361de20cae47ef0!2sJl.%20Lintas%20Wawonduru%2C%20Kec.%20Woja%2C%20Kabupaten%20Dompu%2C%20Nusa%20Tenggara%20Bar.%2C%20Indonesia!5e1!3m2!1sid!2sus!4v1674717996036!5m2!1sid!2sus"

                  // Link Gambar rumah

                  // Maps Baru
                  // src="https://maps.google.com/maps?q=-8.554087683049566,%20118.43171044960754&t=&z=13&ie=UTF8&iwloc=&output=embed"

                  src="https://maps.google.com/maps?q=-8.554087683049566,%20118.43171044960754&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="yes"
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

export default MyContact;

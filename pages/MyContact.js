import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "next/link";
function MyContact() {
  return (
    <>
      <Navigation />
      <main className="mt-[98px] mx-auto md:max-w-4xl xl:max-w-4xl bg-violet-700 lg:flex md:flex w-screen mx-auto hidden lg:block md:block">
        {/* Contact */}
        <div className="w-7/12 flex flex-row items-center px-[90px]">
          <div>
            <form name="ervin-contact-form">
              <div className="w-full">
                <div className="w-full px-4 mb-8">
                  <label for="name" class="text-base font-bold text-primary">
                    Nama
                  </label>
                  <input type="text" id="name" name="nama" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500" />
                </div>
                <div className="w-full px-4 mb-8">
                  <label for="email" class="text-base font-bold text-primary">
                    Email
                  </label>
                  <input type="email" id="email" name="email" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500" />
                </div>
                <div class="w-full px-4 mb-8">
                  <label for="message" className="text-base font-bold text-primary">
                    Pesan
                  </label>
                  <textarea type="message" id="name" name="pesan" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500 h-32" />
                </div>
                <div className="relative w-full px-4">
                  <Button
                    href=""
                    className=" absolute flex font-poppins text-base items-center  border-2 dark:text-white text-gray-700 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg "
                  >
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
        </div>
      </main>

      <main className="px-4 py-12 lg:hidden md:hidden xl:hidden block">
        <section className="mt-[96px] mx-auto md:max-w-4xl  xl:max-w-4xl ">
          <h1 className=" font-poppins text-3xl dark:text-white text-gray-700 font-bold">Contact</h1>
          <main className="md:flex lg:flex dark:bg-gray-900 mt-10 ">
            {/* Headline */}
            <div className="md:w-7/12 mb-56">
              <form name="ervin-contact-form">
                <div className="w-full lg:w-7/12 ">
                  <div className="w-full px-4 mb-8">
                    <label for="name" class="text-base font-bold text-primary">
                      Nama
                    </label>
                    <input type="text" id="name" name="nama" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500" />
                  </div>
                  <div className="w-full px-4 mb-8">
                    <label for="email" class="text-base font-bold text-primary">
                      Email
                    </label>
                    <input type="email" id="email" name="email" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500" />
                  </div>
                  <div class="w-full px-4 mb-8">
                    <label for="message" className="text-base font-bold text-primary">
                      Pesan
                    </label>
                    <textarea type="message" id="name" name="pesan" className="w-full bg-slate-200 dark:text-black p-3 rounded-md focus:outline-none focus:ring-pink-500 focus:ring-1 focus:border-pink-500 h-32" />
                  </div>
                  <div className="relative w-full px-4">
                    <Button
                      href=""
                      className=" absolute flex font-poppins text-base items-center  border-2 dark:text-white text-gray-700 bg-transparent py-2 px-5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg "
                    >
                      Kirim
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Hero */}
            <div className="relative">
              <img src="right-side-arrow.png" width="90" height="90" className="inset-y-0  right-0 mt-60 mr-9 md:block hidden " />
              <h4 className="dark:text-white text-gray-700 font-poppins md:block hidden">Lihat Lokasi</h4>
            </div>
            <div className=" dark:bg-gray-900 px-4  h-96 w-full md:w-5/12  mt-20 ">
              <figure className="shadow-lg">
                <iframe
                  className="w-full h-96 "
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

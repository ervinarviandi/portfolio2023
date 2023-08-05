import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { IoLogoNodejs } from "react-icons/io";
function Blog() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl xl:max-w-3xl ">
          <div className="w-full self-center px-4">
            <div className="rounded-md overflow-hidden">
              <div className="flex flex-col">
                <h2 className="dark:text-white text-gray-700 md:text-5xl text-2xl font-poppins font-bold mt-7">
                  Tutorial Cara Install Node Js Di Windows <IoLogoNodejs />
                </h2>
                <div className="mt-5 mb-3 flex space-x-3">
                  <span className="py-1 px-3 bg-violet-500 dark:text-white text-yellow-500 rounded-lg text-base font-poppins">git</span>

                  <span className="py-1 px-3 bg-yellow-500 dark:text-white text-teal-600 rounded-lg text-base font-poppins">Node Js</span>
                </div>

                <div className="md:flex justify-between items-center mt-4">
                  {/* kiri */}
                  <div className="flex space-x-3 items-center dark:text-white text-gray-700 text-base font-poppins">
                    <AiOutlineFieldTime />
                    <p>17 min read</p>
                  </div>
                  {/* Kanan */}
                  <div className="flex space-x-3 items-center dark:text-white text-gray-700 text-base font-poppins">
                    <AiFillCalendar />
                    <p>Wed, 30 Jan 2023</p>
                  </div>
                </div>

                <hr />
                <div className="flex items-center space-x-3 mt-7">
                  <Image src="ervinarviandi.jpg" width="40px" className="rounded-full" alt="profile" />
                  <p className="font-poppins text-base dark:text-white text-gray-700">
                    Written by/
                    <a href="https://github.com/ervinarviandi" className="text-pink-500 border-b border-dashed py-1 border:animate-pulse">
                      Muhammad Ervin Arviandi
                    </a>
                  </p>
                </div>

                <h4 className="font-poppins text-2xl dark:text-white text-gray-700 mt-7 ">Download Node Js</h4>
                <p className="font-poppins text-base dark:text-white text-gray-700 mt-4">
                  Silahkan buka website resminya Node Js{" "}
                  <a href="https://nodejs.org/en/download/" className="text-pink-500 font-poppins">
                    {" "}
                    nodejs.org.
                  </a>{" "}
                  Kemudian unduh Node Js sesuai dengan arsitektur komputer kita. Kalau menggunakan 64bit, unduh yang 64 bit. Begitu juga kalau menggunakan 32bit.
                </p>

                <h2 className="text-2xl font-poppins dark:text-white text-gray-700 font-bold mt-10">Langkah-langkah Install Node Js di Windows</h2>

                <p className="font-poppins text-base dark:text-white text-gray-700 mt-5">
                  1. Download{" "}
                  <a className="text-pink-500" href="https://nodejs.org/en/download/">
                    installer Node.js
                  </a>{" "}
                  langsung dari website resminya.
                </p>

                <p className="font-poppins text-base dark:text-white text-gray-700 mt-5">
                  2. Klik dua kali file yang didownload, dan jendela Node.js Setup akan terbuka. Klik <span className="font-bold">Next</span>.
                </p>

                <Image src="https://www.hostinger.co.id/tutorial/wp-content/uploads/sites/11/2022/06/node.js-di-windows.webp" alt="hostinger" className="mt-4" width="600" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">
                  3. Baca EULA program dan centang <span className="font-bold">I accept the terms in the License Agreement</span> . Klik <span className="font-bold">Next</span> lagi.
                </p>

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">
                  4. Pilih folder tujuan, lalu klik <span className="font-bold">Next</span> .
                </p>
                <Image src="https://www.hostinger.co.id/tutorial/wp-content/uploads/sites/11/2022/06/folder-tujuan-node.js-di-windows.webp" className="mt-4" alt="gambar2" width="600" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">
                  5. Pilih fitur yang akan diinstal. Kalau tidak yakin, biarkan nilai defaultnya. Klik <span>Next</span> .
                </p>
                <Image src="https://www.hostinger.co.id/tutorial/wp-content/uploads/sites/11/2022/06/setup-node.js-kustom-di-windows.webp" className="mt-4" alt="gambar3" width="600" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">
                  6. Install dependencies, dengan mencentang <span className="font-bold">Automatically install the necessary tools</span>.
                </p>
                <Image src="https://hkalabs.com/wp-content/uploads/2021/04/6installDependensi-1.png" className="mt-4" alt="gambar4" width="600" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">
                  7. Klik <span className="font-bold">install</span> untuk memulai instalasi
                </p>
                <Image src="https://hkalabs.com/wp-content/uploads/2021/04/7install.png" className="mt-4" alt="gambar5" width="600" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">8. Install Chocolatey, dan segala dependensi lainnya (opsional)</p>
                <Image src="https://hkalabs.com/wp-content/uploads/2021/04/9instalasiSelesai.png" className="mt-4" alt="gambar6" width="600" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">
                  9. Tahap instalasi selanjutnya akan berlanjut secara otomatis di <span className="font-bold">Windows PowerShell</span>{" "}
                </p>
                <Image src="https://hkalabs.com/wp-content/uploads/2021/04/10instalasiDependensi.png" className="mt-4" alt="gambar7" width="600" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">10. Tunggu hingga instalasi selesai. Setelah proses selesai, Command Prompt akan meminta Anda menekan Enter untuk menutup jendela.</p>
                <Image src="https://hkalabs.com/wp-content/uploads/2021/04/11instalasiDependensiSelesai.png" className="mt-4" alt="gambar8" width="600" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">11. Untuk memverifikasi versi Node.js, buka Command Prompt dan jalankan command berikut:</p>
                <Image src="nodev.jpg" className="mt-4" alt="gambar9" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Blog;

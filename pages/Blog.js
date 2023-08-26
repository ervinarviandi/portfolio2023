import React from "react";
import { FaGitSquare } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
// import Image1 from "../src/gitblog/Image1.JPG";
// import Image2 from "../src/gitblog/Image2.JPG";
// import Image3 from "../src/gitblog/Image3.JPG";
// import Image4 from "../src/gitblog/Image4.JPG";
// import Image5 from "../src/gitblog/Image5.JPG";
// import Image6 from "../src/gitblog/Image6.JPG";
// import Image7 from "../src/gitblog/Image7.JPG";
// import Image8 from "../src/gitblog/Image8.JPG";
// import Image9 from "../src/gitblog/Image9.JPG";
// import Image10 from "../src/gitblog/Image10.JPG";
// import Image11 from "../src/gitblog/Image11.JPG";
// import Image12 from "../src/gitblog/Image12.JPG";
// import Image13 from "../src/gitblog/Image13.JPG";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
function Blog() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-4xl xl:max-w-4xl ">
          <div className="w-full self-center px-4">
            <div className="rounded-md overflow-hidden">
              <div className="flex flex-col">
                <h2 className="dark:text-white text-gray-700 md:text-5xl text-2xl font-poppins font-bold mt-7">
                  Tutorial Git, Cara Install Git dan Konfigurasi Awal yang Harus Dilakukan <FaGitSquare />
                </h2>

                <div className="mt-5 mb-3 flex space-x-3">
                  <span className="py-1 px-3 bg-violet-500 text-white text-yellow-500 rounded-lg text-base font-poppins">git</span>

                  <span className="py-1 px-3 bg-yellow-500 dark:text-white text-teal-600 rounded-lg text-base font-poppins">github</span>
                </div>

                <div className="md:flex justify-between items-center mt-4">
                  <div className="flex space-x-3 items-center dark:text-white text-gray-700 text-base font-poppins">
                    <AiOutlineFieldTime />
                    <p>10 min read</p>
                  </div>

                  <div className="flex space-x-3 items-center dark:text-white text-gray-700 text-base font-poppins">
                    <AiFillCalendar />
                    <p>Wed, 30 Jan 2023</p>
                  </div>
                </div>

                <hr />
                <div className="flex items-center space-x-3 mt-7">
                  {/* <Image src="/ervinarviandi.jpg" width={30} height={30} className="rounded-full" /> */}
                  <p className="font-poppins text-base dark:text-white text-gray-700">
                    Written by/
                    <a href="https://github.com/ervinarviandi" className="text-transparent bg-clip-text bg-gradient-to-r from-gradient100 to-gradient200 border-b border-dashed py-1 border:animate-pulse">
                      Muhammad Ervin Arviandi
                    </a>
                  </p>
                </div>

                <h4 className="font-poppins text-2xl dark:text-white text-gray-700 mt-7 ">Download Git</h4>
                <p className="font-poppins text-base dark:text-white text-gray-700 mt-4">
                  Silahkan buka website resminya Git{" "}
                  <a href="https://git-scm.com/" className="text-gradient200 font-poppins">
                    {" "}
                    git-scm.com.
                  </a>{" "}
                  Kemudian unduh Git sesuai dengan arsitektur komputer kita. Kalau menggunakan 64bit, unduh yang 64 bit. Begitu juga kalau menggunakan 32bit.
                </p>

                <h2 className="text-2xl font-poppins dark:text-white text-gray-700 font-bold mt-10">Langkah-langkah Install Git di Windows</h2>

                <p className="font-poppins text-base dark:text-white text-gray-700 mt-5">1. Baiklah, mari kita mulai ritual instalnya. Silahkan klik 2x file instaler Git yang sudah diunduh.</p>

                {/* <Image src={Image1} className="mt-4" alt="gambar1" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">2. Maka akan muncul infomasi lisensi Git, klik Next untuk melanjutkan.</p>
                {/* <Image src={Image2} className="mt-4" alt="gambar2" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">3. Selanjutnya menentukan lokasi instalasi. Biarkan saja apa adanya, kemudian klik Next </p>
                {/* <Image src={Image3} className="mt-4" alt="gambar3" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">4. Selanjutnya pemilihan komponen, biarkan saja seperti ini kemudian klik Next.</p>
                {/* <Image src={Image4} className="mt-4" alt="gambar4" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">5. Selanjutnya pemlilihan direktori start menu, klik Next </p>
                {/* <Image src={Image5} className="mt-4" alt="gambar5" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">
                  6. Selanjutnya pengaturan PATH Environment. Pilih yang tengah agar perintah <span className="py-1 px-3 rounded-lg bg-pink-500">git</span> dapat di kenali di Command Prompt (CMD). Setelah itu klik Next.{" "}
                </p>
                {/* <Image src={Image6} className="mt-4" alt="gambar6" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">7. Selanjutnya konversi line ending. Biarkan saja seperti ini, kemudian klik Next.</p>
                {/* <Image src={Image7} className="mt-4" alt="gambar7" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">8. Selanjutnya pemilihan emulator terminal. Pilih saja yang bawah, kemudian klik Next.</p>
                {/* <Image src={Image8} className="mt-4" alt="gambar8" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">9. Selanjutnya pemilihan opsi ekstra. Klik saja Next.</p>
                {/* <Image src={Image9} className="mt-4" alt="gambar9" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">10. Selanjutnya pemilihan opsi ekspreimental, langsung saja klik Install untuk memaulai instalasi.</p>
                {/* <Image src={Image10} width={500} height={500} className="mt-4" alt="gambar10" /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">11. Tunggu beberapa saat, instalasi sedang dilakukan.</p>
                {/* <Image src={Image11} className="mt-4" alt="gambar11" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">12. Setelah selesai, kita bisa langsung klik Finish.</p>
                {/* <Image src={Image12} className="mt-4" alt="gambar12" width={500} height={500} /> */}

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">
                  13. Selamat, Git sudah terinstal di Windows. Untuk mencobanya, silahkan buka CMD atau PowerShell, kemudian ketik perintah <span className="py-1 px-3 bg-cyan-600 rounded-lg"> git --version</span> .
                </p>
                {/* <Image src={Image13} className="mt-4" alt="gambar13" width={500} height={500} /> */}
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

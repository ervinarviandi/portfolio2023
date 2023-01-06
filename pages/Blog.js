import React from "react";
import { FaGitSquare } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
function Blog() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl xl:max-w-3xl ">
          <div className="w-full self-center px-4">
            <h2 className="text-3xl font-bold font-poppins dark:text-white text-gray-500">Blog</h2>
            <p className="text-base font-poppins dark:text-white text-gray-500 mt-7">
              Youll find a collection of my thoughts and musings on a variety of topics. I write about everything from current events to personal experiences, and I always strive to share my honest opinions. Keep in mind that my views are
              my own and do not necessarily reflect those of any other person or organization.
            </p>
            <div className="mt-[20px]">
              <h2 className="dark:text-white text-gray-500 text-2xl font-poppins font-bold">
                Tutorial Git Cara Install Git dan Konfigurasi Awal yang Harus Dilakukan <FaGitSquare />
              </h2>

              <h4 className="font-poppins text-2xl dark:text-white text-gray-500 mt-7 ">Download Git</h4>
              <p className="font-poppins text-base dark:text-white text-gray-500 mt-4">
                Silahkan buka website resminya Git{" "}
                <a href="" className="text-pink-500">
                  {" "}
                  git-scm.com.
                </a>{" "}
                Kemudian unduh Git sesuai dengan arsitektur komputer kita. Kalau menggunakan 64bit, unduh yang 64bit. Begitu juga kalau menggunakan 32bit.
              </p>

              <h2 className="text-2xl font-poppins dark:text-white text-gray-500 font-bold mt-10">Langkah-langkah Install Git di Windows</h2>

              <p className="font-poppins text-base dark:text-white text-gray-500 mt-5">Baiklah, mari kita mulai ritual instalnya. Silahkan klik 2x file instaler Git yang sudah diunduh.</p>

              <Image src="Gambarsatu.jpg" className="mt-4" alt="gambar1" width="50px" height="50px" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">Maka akan muncul infomasi lisensi Git, klik Next untuk melanjutkan.</p>
              <Image src="dua.jpg" className="mt-4" alt="gambar2" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">Selanjutnya menentukan lokasi instalasi. Biarkan saja apa adanya, kemudian klik Next </p>
              <Image src="tiga.jpg" className="mt-4" alt="gambar3" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">Selanjutnya pemilihan komponen, biarkan saja seperti ini kemudian klik Next.</p>
              <Image src="empat.jpg" className="mt-4" alt="gambar4" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">Selanjutnya pemlilihan direktori start menu, klik Next </p>
              <Image src="lima.jpg" className="mt-4" alt="gambar5" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">
                Selanjutnya pengaturan PATH Environment. Pilih yang tengah agar perintah <span className="py-1 px-3 rounded-lg bg-pink-500">git</span> dapat di kenali di Command Prompt (CMD). Setelah itu klik Next.{" "}
              </p>
              <Image src="enam.jpg" className="mt-4" alt="gambar6" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">Selanjutnya konversi line ending. Biarkan saja seperti ini, kemudian klik Next.</p>
              <Image src="tujuh.jpg" className="mt-4" alt="gambar7" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">Selanjutnya pemilihan emulator terminal. Pilih saja yang bawah, kemudian klik Next.</p>
              <Image src="delapan.jpg" className="mt-4" alt="gambar8" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">Selanjutnya pemilihan opsi ekstra. Klik saja Next.</p>
              <Image src="sembilan.jpg" width="20px" alt="gambar9" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">Selanjutnya pemilihan opsi ekspreimental, langsung saja klik Install untuk memaulai instalasi.</p>
              <Image src="sepuluh.jpg" className="mt-4" alt="gambar10" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">Tunggu beberapa saat, instalasi sedang dilakukan.</p>
              <Image src="sebelas.jpg" className="mt-4" alt="gambar11" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">Setelah selesai, kita bisa langsung klik Finish.</p>
              <Image src="duabelas.jpg" className="mt-4" alt="gambar12" />

              <p className="text-base dark:text-white text-gary-500 font-poppins mt-20">
                Selamat, Git sudah terinstal di Windows. Untuk mencobanya, silahkan buka CMD atau PowerShell, kemudian ketik perintah <span className="py-1 px-3 bg-cyan-600 rounded-lg"> git --version</span> .
              </p>
              <Image src="tigabelas.jpg" className="mt-4" alt="gambar13" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Blog;

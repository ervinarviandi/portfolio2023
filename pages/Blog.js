import React from "react";
import { FaGitSquare } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
function Blog() {
  return (
    <>
      <Navigation />
      <div className="px-4 py-12">
        <section className="mt-[96px] mx-auto md:max-w-3xl xl:max-w-3xl ">
          <div className="w-full self-center px-4">
            {/* <h2 className="text-3xl font-bold font-poppins dark:text-white text-gray-700">Blog</h2>
            <p className="text-base font-poppins dark:text-white text-gray-500 mt-7">
              Youll find a collection of my thoughts and musings on a variety of topics. I write about everything from current events to personal experiences, and I always strive to share my honest opinions. Keep in mind that my views are
              my own and do not necessarily reflect those of any other person or organization.
            </p> */}
            <div className="rounded-md overflow-hidden">
              <div className="flex flex-col">
                <h2 className="dark:text-white text-gray-700 md:text-5xl text-2xl font-poppins font-bold mt-7">
                  Tutorial Git Cara Install Git dan Konfigurasi Awal yang Harus Dilakukan <FaGitSquare />
                </h2>

                <div className="mt-5 mb-3 flex space-x-3">
                  <span className="py-1 px-3 bg-violet-500 dark:text-white text-yellow-500 rounded-lg text-base font-poppins">git</span>

                  <span className="py-1 px-3 bg-yellow-500 dark:text-white text-teal-600 rounded-lg text-base font-poppins">github</span>
                </div>

                <div className="md:flex justify-between items-center mt-4">
                  {/* kiri */}
                  <div className="flex space-x-3 items-center dark:text-white text-gray-700 text-base font-poppins">
                    <AiOutlineFieldTime />
                    <p>10 min read</p>
                  </div>
                  {/* Kanan */}
                  <div className="flex space-x-3 items-center dark:text-white text-gray-700 text-base font-poppins">
                    <AiFillCalendar />
                    <p>Wed, 30 Jan 2023</p>
                  </div>
                </div>

                <hr />
                <div className="flex items-center space-x-3 mt-7">
                  <img src="ervinarviandi.jpg" width="40px" className="rounded-full" />
                  <p className="font-poppins text-base dark:text-white text-gray-700">
                    Written by/
                    <a href="https://github.com/ervinarviandi" className="text-pink-500 border-b border-dashed py-1 border:animate-pulse">
                      Muhammad Ervin Arviandi
                    </a>
                  </p>
                </div>

                <h4 className="font-poppins text-2xl dark:text-white text-gray-700 mt-7 ">Download Git</h4>
                <p className="font-poppins text-base dark:text-white text-gray-700 mt-4">
                  Silahkan buka website resminya Git{" "}
                  <a href="https://git-scm.com/" className="text-pink-500 font-poppins">
                    {" "}
                    git-scm.com.
                  </a>{" "}
                  Kemudian unduh Git sesuai dengan arsitektur komputer kita. Kalau menggunakan 64bit, unduh yang 64bit. Begitu juga kalau menggunakan 32bit.
                </p>

                <h2 className="text-2xl font-poppins dark:text-white text-gray-700 font-bold mt-10">Langkah-langkah Install Git di Windows</h2>

                <p className="font-poppins text-base dark:text-white text-gray-700 mt-5">Baiklah, mari kita mulai ritual instalnya. Silahkan klik 2x file instaler Git yang sudah diunduh.</p>

                <img src="https://3.bp.blogspot.com/-GJG55D0dDUE/WJyvgHq7V6I/AAAAAAAAD0Y/1eNFR16HwmoDXixtJfQ5HRMZ_hCelqD0gCPcB/s1600/1.%2BBuka%2Bfile%2Binstaler%2BGit.JPG" className="mt-4" alt="gambar1" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">Maka akan muncul infomasi lisensi Git, klik Next untuk melanjutkan.</p>
                <img src="https://3.bp.blogspot.com/-NzbswuR4CgU/WJyvgMeY3cI/AAAAAAAAD0Y/aa_6vg_W7Q0l7cf20FkatIkU0dXGAJXtACPcB/s1600/2.%2BInformasi%2Btentang%2Bgit.JPG" className="mt-4" alt="gambar2" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">Selanjutnya menentukan lokasi instalasi. Biarkan saja apa adanya, kemudian klik Next </p>
                <img src="https://2.bp.blogspot.com/-Ye-09zmjGXY/WJyvgKQWTxI/AAAAAAAAD0Y/hbIXryc1LBkUOaXOOlP92ynIwdVGAZs9gCPcB/s1600/3.%2BLokasi%2Binstal.JPG" className="mt-4" alt="gambar3" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">Selanjutnya pemilihan komponen, biarkan saja seperti ini kemudian klik Next.</p>
                <img src="https://2.bp.blogspot.com/-ywOWK8HlXtY/WJyvgBmH9YI/AAAAAAAAD0Y/IoJbYkEjw0oIQYxLR3Jf7AvbDhwbDneoQCPcB/s1600/4.%2BPemilihan%2Bkomponen.JPG" className="mt-4" alt="gambar4" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">Selanjutnya pemlilihan direktori start menu, klik Next </p>
                <img src="https://3.bp.blogspot.com/-iGNC1QrWtDg/WJyvgHelUtI/AAAAAAAAD0Y/fJKy0-mD6MgikbyjrjD4FDabTfPynbCiwCPcB/s1600/5.%2Bpembuatan%2Bstart%2Bmenu.JPG" className="mt-4" alt="gambar5" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">
                  Selanjutnya pengaturan PATH Environment. Pilih yang tengah agar perintah <span className="py-1 px-3 rounded-lg bg-pink-500">git</span> dapat di kenali di Command Prompt (CMD). Setelah itu klik Next.{" "}
                </p>
                <img src="https://4.bp.blogspot.com/-79ZG8B-IzCA/WJyvgLBQbjI/AAAAAAAAD0Y/u87asmJOm9UcFAT0Q87pM8xgcW82kkOOwCPcB/s1600/6.%2BPath%2Benvironment.JPG" className="mt-4" alt="gambar6" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">Selanjutnya konversi line ending. Biarkan saja seperti ini, kemudian klik Next.</p>
                <img src="https://3.bp.blogspot.com/-3ZL1Ea4exvo/WJyvgLEi3NI/AAAAAAAAD0Y/3jSy13aPLkAqkaZ5CrFQbmfCNb6m8kniQCPcB/s1600/7.%2Bkonversi%2Bline%2Bending.JPG" className="mt-4" alt="gambar7" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">Selanjutnya pemilihan emulator terminal. Pilih saja yang bawah, kemudian klik Next.</p>
                <img src="https://4.bp.blogspot.com/-wuVBFyFlmjo/WJyvgNkAcvI/AAAAAAAAD0Y/UDKA-JsD3UIuv2sDOEkdwd_X_gRG8uX3QCPcB/s1600/8.%2BPemilihan%2Bemulator%2Bterminal.JPG" className="mt-4" alt="gambar8" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">Selanjutnya pemilihan opsi ekstra. Klik saja Next.</p>
                <img src="https://1.bp.blogspot.com/-5oq7fAHTb7Q/WJyvgMQFc6I/AAAAAAAAD0Y/-5KmjFlMrsMkIsrPjoja277tQDaA_nr5ACPcB/s1600/9.%2BKonfigurasi%2BOpsi%2BEkstra.JPG" className="mt-4" alt="gambar9" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">Selanjutnya pemilihan opsi ekspreimental, langsung saja klik Install untuk memaulai instalasi.</p>
                <img src="https://2.bp.blogspot.com/-lrAn-7lh7jY/WJyvgMm0PiI/AAAAAAAAD0Y/sEhM1irdMPkvv3v615R5JhIcIDNUJxArQCPcB/s1600/10.%2BOpsi%2Bekperimental.JPG" className="mt-4" alt="gambar10" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">Tunggu beberapa saat, instalasi sedang dilakukan.</p>
                <img src="https://4.bp.blogspot.com/-1jecFYkwTzg/WJyvgJt9g5I/AAAAAAAAD0Y/5DG8OAc44Zk31_VjHz3mXybB3kThzHcbwCPcB/s1600/11.%2BInstalling.JPG" className="mt-4" alt="gambar11" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">Setelah selesai, kita bisa langsung klik Finish.</p>
                <img src="https://1.bp.blogspot.com/-lCGee-56K5Y/WJyvgAbeLGI/AAAAAAAAD0Y/fNaJIaZKf2cqMFuV_5occ6y4oAi7_vaawCPcB/s1600/12.%2BFinish.JPG" className="mt-4" alt="gambar12" />

                <p className="text-base dark:text-white text-gray-700 font-poppins mt-20">
                  Selamat, Git sudah terinstal di Windows. Untuk mencobanya, silahkan buka CMD atau PowerShell, kemudian ketik perintah <span className="py-1 px-3 bg-cyan-600 rounded-lg"> git --version</span> .
                </p>
                <img src="https://4.bp.blogspot.com/-JMZtMOkESYQ/WJyvgOEh_TI/AAAAAAAAD0Y/4Mtf48YbMUwVtQ9jbJc_TYHe2MymmooAQCPcB/s1600/13.%2BPercobaan.JPG" className="mt-4" alt="gambar13" />
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

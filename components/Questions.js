import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function Questions() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full md:max-w-4xl xl:max-w-4xl rounded-2xl dark:bg-backgrounddark p-2">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg dark:bg-card100 px-4  py-2 text-left text-sm font-medium text-gradient100 bg-white focus:outline-none focus-visible:ring focus-visible:ring-gradient100 focus-visible:ring-opacity-75">
                    <span className="font-poppins">Teknologi apa aja sih yang lu gunakan untuk mengembangkan website?</span>
                    <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-gradient200`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-white">
                    {/* Teknologi yang saya gunakan untuk mengembakan website adalah html, css, javascript, react js, next js, untuk deploy website menggunakan netlify dan vercel, dan tambahan menggunakan framework css yaitu menggunakan
                    bootstrap dan tailwind css. */}
                    nggak ada
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="flex flex-col">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg dark:bg-card100 px-4 py-2 text-left text-sm font-medium text-gradient100 bg-white focus:outline-none focus-visible:ring focus-visible:ring-gradient100 focus-visible:ring-opacity-75">
                    <span className="font-poppins">Apa sih bedanya frontend developer dan backend developer?</span>
                    <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-gradient200`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 font-poppins dark:text-white">
                    intinya sih dari segi peranan, frontend developer itu membuat tampilan website, apa yang kalian lihat pertama kali saat membuka website/aplikasi, itu kerjanya seorang frontend developer, sedangakan backend developer
                    bertugas memastikan bahwa situs dapat berfungsi dengan baik, biasanya mereka membuat/mengelola database, server, dan lain-lain{" "}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="flex flex-col">
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg dark:bg-card100 px-4 py-2 text-left text-sm font-medium text-gradient100 bg-white focus:outline-none focus-visible:ring focus-visible:ring-gradient100 focus-visible:ring-opacity-75">
                    <span className="font-poppins">apa sih yang harus di pelajari pertama kali untuk menjadi frontend Developer?</span>
                    <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-gradient200`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-white">
                    kalian bisa mengunjungi website roadmap.sh, disana atau di chanel web programming unpas(WPU), dan masih banyak lagi, tergantung kalian mau jadi web developer atau app mobile developer.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="flex flex-col">
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg dark:bg-card100 px-4 py-2 text-left text-sm font-medium text-gradient100 bg-white focus:outline-none focus-visible:ring focus-visible:ring-gradient100 focus-visible:ring-opacity-75">
                    <span className="font-poppins">Website Penyedia gambar illustrasi gratis yang bisa kalian gunakan ?</span>
                    <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-gradient200`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-white">Humaaans.com, opendoodles.com, freepik, undraw.co, getillustrations.com dan masih banyak lagi</Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;

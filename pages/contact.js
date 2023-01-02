import React from "react";
import Link from "next/link";

function errorPage() {
  return (
    <>
      <div className="px-4 py-12">
        <div className="mt-[70px] mx-auto md:max-w-3xl xl:max-w-3xl relative">
          <div className="flex justify-center text-center items-center">
            {/* <img src="/undraw_page_not_found_re_e9o6.svg" width={300} /> */}
            <img src="/404 error with person looking for-bro.svg" className="md:w-[400px] w-[200px]" />
          </div>
          <h2 className="justify-center items-center text-center font-bold text-3xl font-poppins text-pink-600">Ooopss Page Not Found</h2>
          <p className="dark:text-white text-gray-700 justify-center text-center text-base font-poppins mt-5">
            We are sorry but the page you are looking for does not exist.
            <br /> click{" "}
            <Link href="/" className="text-pink-500 font-bold  ">
              Here
            </Link>{" "}
            for go back home
          </p>
        </div>
      </div>
    </>
  );
}

export default errorPage;

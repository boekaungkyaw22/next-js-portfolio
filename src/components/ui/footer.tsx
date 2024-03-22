import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-slate-950	 rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="@/app/asset/animation/Animation - 1711095080869.gif"
              className="h-8"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-lg mr-40">
                <BsFacebook/>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-lg">
                <BsLinkedin/>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-lg">
                <BsGithub/>
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

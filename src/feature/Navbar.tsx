import { Disclosure } from "@headlessui/react";
import HamburgerMenu from "./hamburgerMenu/hamburgerMenu";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav>
        <Disclosure
          as="nav"
          className=" bg-white shadow-sm border-b border-gray-100 "
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <HamburgerMenu />
              <h1 className=" ml-5 text-blue-600 dark:text-sky-400 text-[28px]">
                Megamart
              </h1>
              <div className="ml-70 h-10 w-120 flex items-center rounded-md bg-white pl-3 outline-1 ">
                <FaSearch className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" />

                    <input type="text" placeholder="Search" />                   

              </div>
              <div className="ml-10 flex justify-start items-center w-40 border-r-3 border-gray-500 ">
                <FaRegUser className=" pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-[#008ECC]  sm:size-6  " />
                <a className="font-sans text-[14px] text-gray-600" href="#">
                  Sign In/Sign Up
                </a>
              </div>
              <div className="ml-5 flex justify-between items-center ">
                <BsCart className=" pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-[#008ECC]  sm:size-6  " />
                <a className="font-sans text-[20px] text-gray-600" href="#">
                  Cart
                </a>
              </div>
            </div>
          </div>
        </Disclosure>
      </nav>
    </>
  );
};

export default Navbar;

import { Disclosure } from "@headlessui/react";
import HamburgerMenu from "./hamburgerMenu/hamburgerMenu";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {({}) => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* Left Section */}
            <div className="flex items-center gap-x-4">
              <HamburgerMenu />

              <h1 className="text-blue-600 dark:text-sky-400 text-xl sm:text-2xl md:text-3xl font-bold">
                Megamart
              </h1>

              {/* Search bar (hidden on small screens) */}
              <div className="hidden md:flex flex-grow max-w-xl items-center rounded-md bg-gray-100 px-3 py-1.5 border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all ml-5">
                <FaSearch className="text-gray-500 mr-2 text-lg" />
                <input
                  className="w-full outline-none bg-transparent text-sm md:text-base"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-x-4">
              {/* Sign In / Cart */}
              <div className="flex items-center gap-x-4 text-gray-600 text-sm md:text-base">
                <a className="flex items-center gap-1 hover:text-blue-600" href="#">
                  <FaRegUser className="text-[#008ECC]" />
                  <span className="hidden sm:inline">Sign In/Sign Up</span>
                </a>

                <a className="flex items-center gap-1 hover:text-blue-600" href="#">
                  <BsCart className="text-[#008ECC]" />
                  <span className="hidden sm:inline">Cart</span>
                </a>
              </div>
            </div>

          </div>

          {/* Optional mobile search input */}
          <div className="md:hidden mt-2 flex items-center px-2">
            <div className="flex-grow flex items-center rounded-md bg-gray-100 px-3 py-1.5 border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
              <FaSearch className="text-gray-500 mr-2 text-lg" />
              <input
                className="w-full outline-none bg-transparent text-sm"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;

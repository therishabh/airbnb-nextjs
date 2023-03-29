import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars4Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="./images/logo.svg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>

      {/* Middles */}
      <div className="flex items-center md:border-2 rounded-full py-2 pr-3 justify-between">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="h-8 bg-red-400 cursor-pointer p-2 text-white rounded-full md:inline-flex" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-gray-300 items-center space-x-2 border-2 p-2 rounded-full">
          <Bars4Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;

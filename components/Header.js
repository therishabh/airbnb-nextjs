import Image from "next/image";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars4Icon,
  UserCircleIcon,
  UsersIcon
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();


  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const handleCancel = () => {
    setSearchInput("");
    setNoOfGuest(1);
    setStartDate(new Date());
    setEndDate(new Date());
  }

  const handleSearch = () => {
    router.push({
      pathname : '/search',
      query : {
        location : searchInput,
        startDate : startDate.toISOString(),
        endDate : endDate.toISOString(),
        noOfGuest : noOfGuest
      }
    })
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key : "selection"
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="pl-5 pr-3 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full"
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

      {searchInput && (
        <div className="m-auto flex flex-col col-span-3">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex justify-between border-b">
            <h4>Number of Guests</h4>
            <div className="flex items-center">
              <UsersIcon className="h-5" />
              <input value={noOfGuest} onChange={(e) => setNoOfGuest(e.target.value)} min="1" type="number" className="w-12 h-7 pl-2 text-red-400 outline-none font-bold"/>
            </div>
          </div>
          <div className="flex justify-around">
            <button className="cursor-pointer text-gray-400 font-bold py-3 px-9" onClick={handleCancel}>Cancel</button>
            <button onClick={handleSearch} className="cursor-pointer text-red-500 font-bold py-3 px-9">Submit</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

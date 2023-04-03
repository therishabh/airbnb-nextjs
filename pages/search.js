import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import InfoCard from './../components/InfoCard';
import { useRouter } from "next/router";
import { format } from "date-fns";

const search = ({ searchResult }) => {
  console.log(searchResult);

  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stas for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map((item) => (
              <InfoCard
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default search;

export async function getServerSideProps() {
  const searchResult = await fetch(
    "https://api.npoint.io/525355d15e66a75aef87"
  ).then((res) => res.json());

  return {
    props: {
      searchResult,
    },
  };
}

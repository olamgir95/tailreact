import React from "react";
import BookingFooter from "../BookingFooter";
import BookingHeader from "../BookingHeader";
import Brands from "../Brands";
import Carousel from "../Carousell";
import EcoSystem from "../EcoSystem";
import IndustrySection from "../IndustrySection";
import QubitSection from "../QubitSection";

function Home() {
  return (
    <div className=" max-[1560px]:">
      <BookingHeader />
      <Brands />
      <QubitSection />
      <Carousel />
      <IndustrySection />
      <EcoSystem />
      <BookingFooter />
    </div>
  );
}

export default Home;

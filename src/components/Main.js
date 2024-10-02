import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";

function Main() {
  return (
    <div>
      <FirstSection />
      <hr />
      <SecondSection />
      <hr />
      <ThirdSection />

      <hr />
      <FourthSection />
      <ImageCarousel />
      <Footer />
    </div>
  );
}

export default Main;

import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
}

export default Main;

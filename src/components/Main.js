import React, { useState, useEffect } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            className="spinner"
            style={{
              border: "16px solid #f3f3f3",
              borderRadius: "50%",
              borderTop: "16px solid #3498db",
              width: "120px",
              height: "120px",
              animation: "spin 2s linear infinite",
            }}
          ></div>
        </div>
      ) : (
        <>
          <FirstSection />
          <hr />
          <SecondSection />
          <hr />
          <ThirdSection />
          <hr />
          <FourthSection />
          <hr />
          <ImageCarousel />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Main;

import React from "react";

function SecondSection() {
  return (
    <section
      id="about"
      className="w-[80%] mx-auto flex flex-col items-center justify-center "
    >
      <div className="  items-center justify-center py-3 md:py-10">
        <h1 className="  text-white  lg:text-7xl text-6xl  font-bold  text-center py-6 ">
          About Moodeng
        </h1>
        <h3 className="text-white sm:text-2xl lg:5xl md:py-16  font-bold text-center">
          MooDeng is a fun, hippo-themed cryptocurrency on the
          Dogecoin blockchain, aimed at fostering a creative and engaged.
          community through memes, charitable initiatives, and eco-friendly
          projects. While playful in nature, MooDeng leverages the advanced
          features of the <strong>Tap Protocol</strong> , which offers robust security by
          being built directly on Dogecoin's Layer 1. Tap enables MooDeng to
          access Dogecoin's deep liquidity, use smart contracts, offer
          cost-efficient transactions, and benefit from cross-chain
          interoperability. This combination allows MooDeng to merge humor with
          cutting-edge blockchain technology for community building and
          innovation.
        </h3>

        <div className="flex justify-center items-center py-10"></div>
      </div>
    </section>
  );
}

export default SecondSection;

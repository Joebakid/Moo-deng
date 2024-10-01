import React from "react";

function FourthSection() {
  return (
    <section className="w-[80%] mx-auto flex flex-col items-center justify-center  ">
      <div className=" flex flex-col items-center justify-center  py-32">
        <h1 className="  text-white  lg:text-7xl text-6xl  font-bold  text-center py-6 ">
          Tokenomics of Moo Deng: A 100% Community Token
        </h1>
        <h3 className="text-white text-2xl lg:5xl md:py-16  font-bold text-center">
          Moo Deng is a fully community-driven token built on the Dogecoin
          blockchain, with no pre-minted allocations for developers, team
          members, or any centralized entities. This ensures that the project
          stays true to its decentralized roots, prioritizing the community's
          interest and involvement over individual gains.
        </h3>

        <div className="flex justify-center items-center py-10"></div>
      </div>
    </section>
  );
}

export default FourthSection;

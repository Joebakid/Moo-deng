import React from "react";

function FirstSection() {
  function Link({ text, href, btn }) {
    return (
      <a className={btn} href={href} target="target" rel="noopener noreferrer">
        {text}
      </a>
    );
  }
  //   flex flex-col items-center justify-center py-24   md:w-[65%] mx-auto w-[80%]
  return (
    <header id="home" className="  h-full ">
      <div className=" flex flex-col items-center justify-center py-24   md:w-[65%] mx-auto w-[80%]">
        <h1 className="  text-white  py-8  md:text-6xl   text-4xl     font-bold  text-center  2xl:text-9xl  ">
          MooDeng: The Hippo MemeCoin on Tap Protocol
        </h1>
        <h3 className="  md:text-2xl py-8 text-xl  font-bold text-center text-yellow-400  2xl:text-6xl">
          Enter the whimsical world of MooDeng, the hippo-themed meme coin, now
          powered by TapOnDoge most advanced programmable L1 protocol!
        </h3>

        <div className="flex justify-center items-center py-10">
          <Link btn="btn" href="#" text="Trade Moo Soon" />
        </div>
      </div>
    </header>
  );
}

export default FirstSection;

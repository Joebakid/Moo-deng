import React from "react";

function FirstSection() {
  function Link({ text, href, btn }) {
    return (
      <a className={btn} href={href} target="target" rel="noopener noreferrer">
        {text}
      </a>
    );
  }
  return (
    <header id="first-section" className="  h-screen ">
      <div className=" flex flex-col items-center justify-center py-3    md:w-[65%] mx-auto w-[80%]">
        <h1 className="  text-white  py-8  md:text-6xl   text-4xl     font-bold  text-center    ">
          Moodeng: The Hippo Meme Coin
        </h1>
        <h3 className="  md:text-2xl py-8 text-xl  font-bold text-center  text-green-400">
          Dive into the whimsical world of Moodeng, the hippo-themed meme coin
          that's making waves on the Dogecoin blockchain!
        </h3>

        <div className="flex justify-center items-center py-10">
          <Link btn="btn" href="https://doggy.market/$moo" text="Buy Moo" />
        </div>
      </div>
    </header>
  );
}

export default FirstSection;

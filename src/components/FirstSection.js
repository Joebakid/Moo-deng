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
    <section className="container-section h-screen">
      <div className="  items-center justify-center py-3 md:py-10">
        <h1 className="  text-white  lg:text-7xl text-6xl  font-bold  text-center py-6 ">
          Moodeng: The Hippo Meme Coin
        </h1>
        <h3 className="text-white text-2xl lg:5xl md:py-16  font-bold text-center">
          Dive into the whimsical world of Moodeng, the hippo-themed meme coin
          that's making waves on the Dogecoin blockchain!
        </h3>

        <div className="flex justify-center items-center py-10">
          <Link btn="btn" href="https://doggy.market/$moo" text="Buy Moo" />
        </div>
      </div>
    </section>
  );
}

export default FirstSection;

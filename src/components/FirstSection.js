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
      <div className="  items-center justify-center py-10">
        <h1 className="  text-white  text-7xl   font-bold  text-center ">
          Moodeng: The Hippo Meme Coin
        </h1>
        <h3 className="text-white md:text-2xl py-16  font-bold text-center">
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

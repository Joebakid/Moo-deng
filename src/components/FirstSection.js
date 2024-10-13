import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Power3 } from "gsap";

function FirstSection() {
  let title = useRef(null);
  let subHeading = useRef(null);
  let btn = useRef(null);

  function btnDOesNothing(e) {
    e.preventDefault();
  }

  useEffect(() => {
    const tl = gsap.timeline();
    console.log(title);
    tl.fromTo(
      title,
      { opacity: 0, y: "-30% " },
      { opacity: 1, duration: 2, ease: Power3.easeOut, y: "0% ", scrub: 4 }
    )
      .fromTo(
        subHeading,
        { opacity: 0, y: "30%" },
        {
          opacity: 1,
          duration: 2,
          ease: Power3.easeOut,
          y: "0% ",
          scrub: 4,
        },
        "<25%"
      )
      .fromTo(
        btn.current,
        { opacity: 0, y: "30%" },
        {
          opacity: 1,
          duration: 1,
          ease: Power3.easeOut,
          y: "0% ",
          scrub: 4,
        },
        "<25%"
      );
  }, []);

  function Link({ text, href, btn, buttonRef, onClick }) {
    return (
      <a
        ref={buttonRef}
        className={btn}
        href={href}
        onClick={onClick}
        target="target"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }
  //   flex flex-col items-center justify-center py-24   md:w-[65%] mx-auto w-[80%]
  return (
    <header id="home" className="  h-full ">
      <div className=" flex flex-col items-center justify-center py-24   md:w-[65%] mx-auto w-[80%]">
        <h1
          ref={(el) => {
            title = el;
          }}
          className="  text-white  py-8  md:text-6xl   text-4xl     font-bold  text-center  2xl:text-9xl opacity-0 "
        >
          MooDeng: The Hippo MemeCoin on Tap Protocol
        </h1>
        <h3
          ref={(el) => {
            subHeading = el;
          }}
          className="  md:text-2xl py-8 text-xl  font-bold text-center text-yellow-400  2xl:text-6xl opacity-0"
        >
          Enter the whimsical world of MooDeng, the hippo-themed meme coin, now
          powered by TapOnDoge most advanced programmable L1 protocol!
        </h3>

        <div className="flex justify-center items-center py-10">
          <Link
            buttonRef={btn}
            btn="btn"
            href="#"
            text="Trade Moo Soon"
            onClick={btnDOesNothing}
          />
        </div>
      </div>
    </header>
  );
}

export default FirstSection;

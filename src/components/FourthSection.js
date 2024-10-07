import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FourthSection() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphRef.current, // Trigger animation when the paragraph comes into view
        start: "top 80%",
        scrub:4,
      },
    });

    // Animate the heading first
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    // Animate the paragraph text, split by sentences or words
    const paragraphSentences =
      paragraphRef.current.querySelectorAll(".sentence");
    paragraphSentences.forEach((sentence, index) => {
      tl.fromTo(
        sentence,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 2,

          ease: "power3.out",
          delay: index * 0.2, // Stagger the animations for each sentence
        },
        "<"
      );
    });
  }, []);

  return (
    <section
      id="tokenomics"
      className="w-[80%] mx-auto flex flex-col items-center justify-center  "
    >
      <div className=" flex flex-col items-center justify-center  py-7">
        <h1
          ref={titleRef}
          className="  text-white  lg:text-7xl text-3xl  font-bold  text-center py-6 "
        >
          Tokenomics of Moo Deng: A 100% Community Token
        </h1>
        <h3
          ref={paragraphRef}
          className="text-white sm:text-2xl lg:5xl md:py-16  font-bold text-center"
        >
          <span className="sentence">
            Moo Deng is a fully community-driven token built on the Dogecoin
            blockchain, with no pre-minted allocations for developers, team
            members, or any centralized entities.
          </span>
          <span className="sentence">
            This ensures that the project stays true to its decentralized roots,
            prioritizing the community's interest and involvement over
            individual gains.{" "}
          </span>{" "}
          <span className="sentence">
            {" "}
            With a total circulation of just 21 million tokens, Moodeng aims to
            foster a fair and inclusive ecosystem for all holders.
          </span>
        </h3>

        <div className="flex justify-center items-center py-10"></div>
      </div>
    </section>
  );
}

export default FourthSection;

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SecondSection() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const secondPageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        scrub: true,

        duration: 5,
        stagger: 1,
      },
    });

    // Animate the heading first
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
      }
    );

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
          stagger: 1,
          ease: "power3.out",
          delay: index * 0.2,
        },
        "<"
      );
    });
  }, []);

  return (
    <section
      id="about"
      className="w-[80%] mx-auto flex flex-col items-center justify-center secondPage"
      ref={secondPageRef}
    >
      <div className="items-center justify-center py-3 md:py-10">
        <h1
          ref={titleRef}
          className="text-white lg:text-7xl text-6xl font-bold text-center py-6"
        >
          About Moodeng
        </h1>
        <h3
          ref={paragraphRef}
          className="text-white sm:text-2xl lg:5xl md:py-16 font-bold text-center"
        >
          <span className="sentence" key="sentence-1">
            MooDeng is a fun, hippo-themed cryptocurrency on the Dogecoin
            blockchain, aimed at fostering a creative and engaged community
            through memes, charitable initiatives, and eco-friendly projects.
          </span>
          <br />
          <span className="sentence" key="sentence-2">
            While playful in nature, MooDeng leverages the advanced features of
            the <strong>Tap Protocol</strong>, which offers robust security by
            being built directly on Dogecoin's Layer 1.
          </span>
          <br />
          <span className="sentence" key="sentence-3">
            Tap enables MooDeng to access Dogecoin's deep liquidity, use smart
            contracts, offer cost-efficient transactions, and benefit from
            cross-chain interoperability.
          </span>
          <br />
          <span className="sentence" key="sentence-4">
            This combination allows MooDeng to merge humor with cutting-edge
            blockchain technology for community building and innovation.
          </span>
        </h3>
      </div>
    </section>
  );
}

export default SecondSection;

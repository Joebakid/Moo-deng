import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ThirdSection() {
  const titleThirdSection = useRef(null);
  const cardOne = useRef(null);
  const cardTwo = useRef(null);

  useEffect(() => {
    // Timeline for the title animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: titleThirdSection.current,
          start: "top 30%",
          markers: true,
        },
      })
      .fromTo(
        titleThirdSection.current,
        { opacity: 0, y: "-30%", ease: Power3.easeOut },
        { opacity: 1, y: "0%", duration: 1 }
      );

    // Scroll trigger for the first card
    gsap.fromTo(
      cardOne.current,
      { opacity: 0, y: "30%" },
      {
        opacity: 1,
        y: "0%",
        duration: 2,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: cardOne.current,
          start: "top 75%", // Trigger starts when card enters 75% of viewport
        },
      }
    );

    // Scroll trigger for the second card
    gsap.fromTo(
      cardTwo.current,
      { opacity: 0, y: "30%" },
      {
        opacity: 1,
        y: "0%",
        duration: 2,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: cardTwo.current,
          start: "top 75%", // Trigger starts when card enters 75% of viewport
        },
      }
    );
  }, []);

  function Card({
    title,
    listItemOne,
    listItemTwo,
    listItemThree,
    cardClass,
    listClassName,
    phase,
    colorTitleOne,
    colorTitleTwo,
    colorTitleThree,
    BoldtitleClass,
    cardRef, // Passing ref as a prop
  }) {
    return (
      <div className={cardClass} ref={cardRef}>
        <h1>
          <span className={BoldtitleClass}>{phase}</span>
        </h1>
        <h2 className="uppercase text-center">{title}</h2>
        <ul>
          <li className={listClassName}>
            <span className={BoldtitleClass}>{colorTitleOne}</span> :{" "}
            {listItemOne}
          </li>
          <li className={listClassName}>
            <span className={BoldtitleClass}>{colorTitleTwo}</span> :{" "}
            {listItemTwo}
          </li>
          <li className={listClassName}>
            <span className={BoldtitleClass}>{colorTitleThree}</span> :{" "}
            {listItemThree}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <section
      id="roadmap"
      className="w-[80%] mx-auto flex flex-col items-center justify-center"
    >
      <h1
        ref={titleThirdSection}
        className="text-white lg:text-7xl text-6xl font-bold text-center py-6 mt-10"
      >
        ROADMAP
      </h1>
      <div className="flex flex-wrap justify-center items-center ">
        <Card
          cardRef={cardOne}
          title="Launch and Community Building"
          listItemOne="Deploy Moodeng on the Dogecoin blockchain."
          listItemTwo="Establish and grow our community on social media platforms like Twitter, Reddit, and Discord."
          listItemThree="Host meme creation contests to encourage user participation and creativity."
          listClassName="listClassName"
          cardClass="cardClass"
          phase="Phase 1"
          colorTitleOne="Token Launch"
          colorTitleTwo="Community Engagement"
          colorTitleThree="Meme Contests"
          BoldtitleClass="BoldtitleClass"
        />

        <Card
          cardRef={cardTwo}
          title="Listing and Expansion"
          listItemOne="Aim for listings on decentralized and centralized exchanges to enhance liquidity."
          listItemTwo="Launch an NFT Collection"
          listItemThree="Develop governance mechanisms allowing Moodeng holders to vote on key decisions impacting the project."
          listClassName="listClassName"
          cardClass="cardClass"
          phase="Phase 2"
          colorTitleOne="Exchange Listings"
          colorTitleTwo="NFT Collection"
          colorTitleThree="Community Governance"
          BoldtitleClass="BoldtitleClass"
        />
      </div>
    </section>
  );
}

export default ThirdSection;

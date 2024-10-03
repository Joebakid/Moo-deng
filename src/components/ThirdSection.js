import React from "react";

function ThirdSection() {
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
  }) {
    return (
      <div className={cardClass}>
        <h1>
          {" "}
          <span className={BoldtitleClass}> {phase}</span>
        </h1>
        <h2 className="uppercase text-center">{title}</h2>
        <ul>
          <li className={listClassName}>
            <span className={BoldtitleClass}>{colorTitleOne}</span> :
            {listItemOne}
          </li>
          <li className={listClassName}>
            <span className={BoldtitleClass}> {colorTitleTwo}</span> :{" "}
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
      className=" w-[80%] mx-auto flex flex-col items-center justify-center "
    >
      <h1 className="  text-white  lg:text-7xl text-6xl  font-bold  text-center py-6 mt-10">
        ROADMAP
      </h1>
      <div className="flex flex-wrap justify-center items-center ">
        <Card
          title="Launch and Community Building"
          listItemOne=" Deploy Moodeng on the Dogecoin blockchain."
          listItemTwo=" Establish and grow our community on social media platforms like Twitter, Reddit, and Discord."
          listItemThree=" Host meme creation contests to encourage user participation and creativity."
          listClassName=" listClassName"
          cardClass="cardClass"
          phase="Phase 1"
          colorTitleOne="Token Launch"
          colorTitleTwo="Community Engagement"
          colorTitleThree="Meme Contests"
          BoldtitleClass="BoldtitleClass"
        />

        <Card
          title="Listing and Expansion"
          listItemOne="Aim for listings on decentralized and centralized exchanges to enhance liquidity."
          listItemTwo=" Launch an NFT Collection"
          listItemThree=" Develop governance mechanisms allowing Moodeng holders to vote on key decisions impacting the project"
          listClassName=" listClassName"
          cardClass="cardClass"
          phase="Phase 2"
          colorTitleOne="Exchange Listings"
          colorTitleTwo="NFT collection"
          colorTitleThree="Community Governance"
          BoldtitleClass="BoldtitleClass"
        />
      </div>
    </section>
  );
}

export default ThirdSection;

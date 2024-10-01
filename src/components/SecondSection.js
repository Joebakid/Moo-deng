import React from "react";

function SecondSection() {
  return (
    <section className="w-[80%] mx-auto flex flex-col items-center justify-center ">
      <div className="  items-center justify-center py-3 md:py-10">
        <h1 className="  text-white  lg:text-7xl text-6xl  font-bold  text-center py-6 ">
          About Moodeng
        </h1>
        <h3 className="text-white sm:text-2xl lg:5xl md:py-16  font-bold text-center">
          Moodeng is a playful and vibrant cryptocurrency that captures the fun
          and charm of hippos while leveraging the robust ecosystem of the
          Dogecoin blockchain. Our mission is to create a thriving community
          that embraces humor, creativity, and innovation in the crypto space.
          Moodeng not only aims to be a meme token but also serves as a platform
          for community engagement, charitable initiatives, and eco-friendly
          projects. At its core, Moodeng is designed to foster creativity,
          allowing users to participate in meme creation, sharing, and
          competitions. By doing so, we hope to cultivate a strong, engaged
          community of hippo lovers and meme enthusiasts who are passionate
          about driving the project forward.
        </h3>

        <div className="flex justify-center items-center py-10"></div>
      </div>
    </section>
  );
}

export default SecondSection;

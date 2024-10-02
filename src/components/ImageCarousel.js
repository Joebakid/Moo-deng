import React from "react";
 

const ImageCarousel = () => {
  const images = [
    { src: "/img/jesus x hippo.jpg", alt: "Jesus holding a hippo" },
    { src: "/img/laser hippo.jpg", alt: "Hippo shooting laser beams" },
    { src: "/img/hippo on jersy.jpg", alt: "Hippo on jersey" },
    { src: "/img/hippo x doge.jpg", alt: "Hippo with Doge" },
    { src: "/img/hippo x zoomkeeper.jpg", alt: "Hippo with Zoomkeeper" },
  ];

  return (
    <div className="container mx-auto my-8 overflow-hidden">
      <h1 className="text-white lg:text-7xl text-6xl font-bold text-center py-6">
        MEME
      </h1>
      <div className="marquee">
        <div className="marquee-content">
          {images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                className="image"
              />
            </div>
          ))}
          {/* Duplicate the images for endless scrolling effect */}
          {images.map((image, index) => (
            <div key={`duplicate-${index}`} className="image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                className="image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

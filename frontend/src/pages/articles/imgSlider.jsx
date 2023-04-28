import React, { useState, useEffect } from "react";
import img from "../../assets/images/article.svg";
import aboutUs from "../../assets/images/aboutUs1.png";
import videoCard1 from "../../assets/images/videoCard1.png";
import { SliderWrapper } from "./elements";

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageUrls = [img, aboutUs, videoCard1];

  useEffect(() => {
    // Define a function to update the image index
    function updateImageIndex() {
      setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
    }

    // Call the updateImageIndex function every 3 seconds
    const intervalId = setInterval(updateImageIndex, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentImageIndex, imageUrls]);

  return (
    <SliderWrapper>
      <img
        key={currentImageIndex}
        src={imageUrls[currentImageIndex]}
        alt="Slider"
        className="img-fluid mainImg"
      />
    </SliderWrapper>
  );
}

export default ImageSlider;

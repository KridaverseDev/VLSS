import React, { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"; // For the previous button
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; // For the next button
import { useMediaQuery, useTheme } from "@mui/material";

type ImageSliderProps = {
  images: string[];
  interval?: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  interval = 3000,
}) => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentImageIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const play = () => {
      const newIndex =
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
    };

    const id = setInterval(play, interval);
    return () => clearInterval(id);
  }, [currentImageIndex, images.length, interval]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: matchMobileView ? "10px" : "30px",
      }}
    >
      <img
        src={images[currentImageIndex]}
        style={{
          maxWidth: "95%",
          height: matchMobileView ? "200px" : "350px",
          borderRadius: "30px",
        }}
        alt="Slideshow"
      />
      <ArrowBackIosNewIcon
        onClick={goToPrevious}
        style={{
          position: "absolute",
          left: 0,
          cursor: "pointer",
          color: "black",
          fontSize: "48px", // Adjust the size as needed
        }}
      />
      <ArrowForwardIosIcon
        onClick={goToNext}
        style={{
          position: "absolute",
          right: 0,
          cursor: "pointer",
          color: "black",
          fontSize: "48px", // Adjust the size as needed
        }}
      />
    </div>
  );
};

export default ImageSlider;

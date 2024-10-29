// Carousel.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Import the CSS file

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // 3 seconds
      fade: true, // Fade effect between slides
      pauseOnHover: true, // Pause autoplay on hover
    };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src="https://bcm-media.beautycircle.com/pfweb/assets/images/2B_top_banner_skincare-210521.jpg" alt="Slide 1" />
          <p className="carousel-content">An advanced model that detects acne, eczema, and psoriasis, providing tailored treatment recommendations</p>
        </div>
        <div className="carousel-slide">
          <img src="https://avant-skincare.com/img/leoblog/b/1/340/lg-b-kezia%20x%20avant%20campaign.png" alt="Slide 2" />
          <p className="carousel-content">Detects acne, eczema, and psoriasis, offering insights and suggested treatments for each condition.</p>
        </div>
        <div className="carousel-slide">
          <img src="https://static.tildacdn.net/tild3536-3332-4466-a334-313735316532/2_-_Main_Image.png" alt="Slide 3" />
          <p className="carousel-content">Users upload images for analysis, receiving accurate diagnoses and effective treatment recommendations for improved skin health.</p>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

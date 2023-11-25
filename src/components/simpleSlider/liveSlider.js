import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

import  '../../components/simpleSlider/imageData.js';
import './simpleSlider.css';
import { LiveImages } from './imageData.js';


const LiveSlider = ({ sliderHeight }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true,  // Enable autoplay
        autoplaySpeed: 4000,
        centrePadding: '100px',
        centreMode: false,
        slidesToScroll: 1,
        swipe: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                }
            }]
    };

    const sliderStyle = {
        height: sliderHeight || "500px", // Set a default height if not provided
      };

    return (


        <Slider className="LiveSlider" {...settings} style={sliderStyle}>
            {LiveImages.map((liveImage) => (

                <div className="sliderStyleDiv"key={liveImage.id}>
                    <img src={liveImage.imageUrl} alt={liveImage.alt}></img>
                </div>
            ))}

        </Slider>
    );
};

export default LiveSlider;
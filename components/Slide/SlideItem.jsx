"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SlideItem(props) {
  const { images } = props;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container ">
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
        {images.map((item, index) => (
          <div
            className="w-full bg-white h-[500px] cursor-pointer overflow-hidden"
            key={index}
          >
            <img
              className="w-full h-full object-cover object-center"
              src={item}
              alt=""
            />
          </div>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={3}
        arrows={false}
        centerMode={true}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {images.map((item, index) => (
          <div
            className="w-full bg-white cursor-pointer hover:border-black px-2 border h-[80px]"
            key={index}
          >
            <img
              className="w-full h-full object-cover object-center"
              src={item}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

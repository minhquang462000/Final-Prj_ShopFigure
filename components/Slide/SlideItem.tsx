
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css"
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
export interface ISlideItemProps {
}
const listImg = [
    {
        urlImg:
            "https://i.ytimg.com/vi/MsK1zErcskQ/maxresdefault.jpg",
    },
    {
        urlImg:
            "https://cdn.suwalls.com/wallpapers/anime/dragon-ball-z-15389-1920x1080.jpg",
    },
    {
        urlImg:
            "https://c.wallhere.com/photos/6f/55/anime_One_Piece-1199541.jpg!d",
    },

    {
        urlImg:
            "https://wallpapers.com/images/featured/g8t326jpw36da9ib.jpg",
    },
    {
        urlImg:
            "https://wallpapers.com/images/featured/g8t326jpw36da9ib.jpg",
    },
    {
        urlImg:
            "https://wallpapers.com/images/featured/g8t326jpw36da9ib.jpg",
    },
    {
        urlImg:
            "https://wallpapers.com/images/featured/g8t326jpw36da9ib.jpg",
    },

];

export default function SlideItem () {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
      }, []);
  return (
    <div className="slider-container">
    <Slider  asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
     {listImg.map((item, index) => (
        <div className='w-full bg-white h-[500px] cursor-pointer overflow-hidden' key={index}>
        <img className='w-max h-full object-cover' src={item.urlImg} alt="" />
        </div>
      ))}
    
    </Slider>
    <Slider
      asNavFor={nav1}
      ref={slider => (sliderRef2 = slider)}
      slidesToShow={3}
      arrows={false}
      centerMode={true}
      swipeToSlide={true}
      focusOnSelect={true}
    >
     {listImg.map((item, index) => (
        <div className='w-full bg-white cursor-pointer hover:border-black px-2 border h-[80px]' key={index}>
        <img className='w-full h-full object-cover' src={item.urlImg} alt="" />
        </div>
      ))}
    </Slider>
  </div>
  );
}

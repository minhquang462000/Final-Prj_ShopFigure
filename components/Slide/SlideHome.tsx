import * as React from 'react';
import { BiSlider } from 'react-icons/bi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css"
export interface IAppProps {
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

];

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            className={` bg-gradient-to-r hidden group-hover/item:block cursor-pointer from-yellow-500 to-red-600 shadow-md shadow-orange-500 w-max rounded-sm absolute z-20  top-[45%] bottom-[45%] right-2 lg:p-2 lg:py-3 lg:text- p-1 py-2 `}
            onClick={onClick}
        >
            <IoIosArrowForward color="white" size={15} />
        </button>
    );
};
const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            className={`  bg-gradient-to-r hidden group-hover/item:block cursor-pointer from-red-600 to-yellow-500  shadow-orange-500 shadow-md w-max rounded-sm absolute z-20 left-2  top-[45%] bottom-[45%] lg:p-2 lg:py-3 lg:text- p-1 py-2 `}
            onClick={onClick}
        >
            <IoIosArrowBack color="white" size={15} />
        </button>
    );
};
export default function SlideHome(props: IAppProps) {
    let settings = {
        speed: 500,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="col-span-3  group/item my-3 pl-3 relative  w-full">
            <Slider {...settings}>
                {listImg.map((item, index) => (
                  <div key={index} className='w-full  h-[350px]  cursor-pointer overflow-hidden'>  
                    <img className='w-full h-full object-cover' src={item.urlImg} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

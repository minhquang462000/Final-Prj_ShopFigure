'use client'
import * as React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css"
import slideImg_1 from '@/public/images/slide_1_img.jpg'
import slideImg_2 from '@/public/images/slide_2_img.jpg'
import slideImg_3 from '@/public/images/slide_3_img.jpg'
import slideImg_4 from '@/public/images/slide_4_img.jpg'
export interface IAppProps {
}

const listImg = [
    slideImg_1.src,
    slideImg_2.src,
    slideImg_3.src,
    slideImg_4.src

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
                    <img className='w-full h-full object-cover' src={item} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

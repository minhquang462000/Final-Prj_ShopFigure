import * as React from 'react';
import { BiSlider } from 'react-icons/bi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from 'react-icons/fa';
import { IoSearch, IoSearchOutline } from 'react-icons/io5';
export interface ISliderProductProps {
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
const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            className={` bg-gradient-to-r hidden group-hover/item:block cursor-pointer from-yellow-500 to-red-600 shadow-md shadow-orange-500 w-max rounded-sm absolute z-20  top-[45%] bottom-[45%] -right-1   p-1 py-2 `}
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
            className={`  bg-gradient-to-r hidden group-hover/item:block cursor-pointer from-red-600 to-yellow-500  shadow-orange-500 shadow-md w-max rounded-sm absolute z-20 -left-1  top-[45%] bottom-[45%]  p-1 py-2 `}
            onClick={onClick}
        >
            <IoIosArrowBack color="white" size={15} />
        </button>
    );
};
export default function SlideProductItem (props: ISliderProductProps) {
    let settings = {
        speed: 500,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dotsClass: 'dots-slick-product',
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
  return (
    <Slider {...settings}>
    {listImg.map((item, index) => (
     <nav key={index} className='relative group/search rounded-md overflow-hidden'>
        <div className='w-[95%] flex flex-col  gap-3 mx-auto p-1 h-max   overflow-hidden'>  
       <div className='w-full cursor-pointer  relative h-[240px]'>
       <img className='w-full h-full object-cover' src={item.urlImg} alt="" />
       <IoSearchOutline size={40} className='bg-white shadow-md group-hover/search:block hidden shadow-gray-400 rounded-full p-2 absolute top-[40%] bottom-[40%]  right-[40%] left-[40%]' />
       </div>
        <h3 className='leading-5 cursor-pointer line-clamp-2'>Tên sản phẩm abc abc bac bac bac bac ádfasđ f sfsdfsa ds jdhasjkzdhsdf</h3>
        <span className='flex my-3  justify-between text-[#e44c4c] font-medium items-center text-sm'>
            <p>462.000 <span className='un derline'>đ</span></p>
            <p className='text-gray-500  line-through '>462.000 <span className='underline'>đ</span></p>
            <FaRegHeart className='mr-4' size={15}/>
        </span>
        <span className='bg-[#36b056] text-white -rotate-45 absolute pb-1 -top-7 -left-9  text-center text-[11px] font-bold pt-12 w-max px-4 m-auto'>Pre-order</span>
        <span className='italic bg-[#ff2121] text-white px-2 py-1 absolute top-2 right-3 text-xs rounded font-medium '>-10%</span>
        </div>
        
     </nav>
    ))}
</Slider>
  );
}

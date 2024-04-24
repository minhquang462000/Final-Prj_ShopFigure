import Image from 'next/image';
import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgHot from "@/public/icon/flashSaleHot.png"
import imgFire from "@/public/icon/flagsale01.png"
import { space } from 'postcss/lib/list';
import { FaRegHeart } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';
export interface IAppProps {
}
function CustomSlide(props) {
  const { index, ...otherProps } = props;
  return (
    <div {...otherProps}>
      <h3>{index}</h3>
    </div>
  );
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
            "https://cdn.suwalls.com/wallpapers/anime/dragon-ball-z-15389-1920x1080.jpg",
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
            "https://i.ytimg.com/vi/MsK1zErcskQ/maxresdefault.jpg",
    },
];
export default function FlashSale (props: IAppProps) {
    const settings = {
        dots: true,
    infinite: true,
    dotsClass: 'dots-slick-flashsale',
    arrows: false,
    speed: 500,
    spaceBetween: 100,
    slidesToShow: 5,
    slidesToScroll: 5
      };
  return (
  
    <div className='w-full  my-8 rounded-md bg-gradient-to-t pb-1 px-8 from-red-700 to-orange-500'>
        <nav className='text-white flex justify-between py-4 items-center '>
            <span className='flex items-center  gap-2'>
                <Image src={imgHot.src} alt="" width={25} height={25}/>
            <h1 className='text-xl font-medium'>FLASH SALE</h1>
            </span>
           
            <ul className='flex text-black  gap-3'>
                <li className='w-[50px] text-center  bg-white rounded-md text-sm h-[50px] py-1 justify-evenly  flex flex-col'><span className='font-bold'>00</span>Ngày</li>
                <li className='w-[50px] text-center  bg-white rounded-md text-sm h-[50px] py-1 justify-evenly  flex flex-col'><span className='font-bold'>02</span>Giờ</li>
                <li className='w-[50px] text-center  bg-white rounded-md text-sm h-[50px] py-1 justify-evenly  flex flex-col'><span className='font-bold'>03</span>Phút</li>
                <li className='w-[50px] text-center  bg-white rounded-md text-sm h-[50px] py-1 justify-evenly  flex flex-col'><span className='font-bold'>04</span>Giây</li>
                
            </ul>
        </nav>
       <div className=''>
       <Slider className='flex gap-4' {...settings}>
       {listImg.map((item, index) => {
           return (
           <div key={index} >
             <nav  className='w-[95%] mx-auto flex flex-col group/search gap-3 cursor-pointer  relative  h-max bg-white rounded-md p-2'>
             <div className='w-full  relative h-[200px]'>
           <img className='w-full h-full object-cover' src={item.urlImg} alt="" />
           <IoSearchOutline size={40} className='bg-white shadow-md group-hover/search:block hidden shadow-gray-400 rounded-full p-2 absolute top-[40%] bottom-[40%]  right-[40%] left-[40%]' />
           </div>
            <h3 className='leading-5 mt line-clamp-2'>Tên sản phẩm abc abc bac bac bac bac ádfasđ f sfsdfsa ds jdhasjkzdhsdf</h3>
            <span className='flex my-1  justify-between text-[#e44c4c] font-medium items-center text-sm'>
                <p>462.000 <span className='underline'>đ</span></p>
                <p className='text-gray-500 wline-through '>462.000 <span className='underline'>đ</span></p>
                <FaRegHeart className='mr-4' size={18}/>
            </span>
            <span className='flex items-center gap-2'>
            <Image src={imgFire.src} alt="" width={18} height={18}/> 
            <p className='text-xs font-medium text-gray-600'>Đã bán <span className='font-extrabold'>6</span> sản phẩm</p>
            </span>
            <div className='p-1 mb-1 rounded-full relative w-full bg-[#eea2a2]'>
                <div className='p-1  absolute top-0 left-0 rounded-full w-[20%] bg-[#e44c4c]'></div>
            </div>
            <span className='italic bg-[#ff2121] text-white px-2 py-1 absolute top-2 right-3 text-xs rounded font-medium '>-10%</span>
           </nav>
           </div>
           )
       })}
      </Slider>
       </div>
     <button className='flex hover:bg-transparent hover:text-gray-100 border text-sm items-center text-gray-700 rounded-lg bg-gray-100 border-gray-100 text-center mx-auto my-4 px-14 py-3 '>Xem tất cả <MdKeyboardDoubleArrowRight /></button>
    </div>
  );
}
'use client'
import FlashSale from "@/components/Home/FlashSale";
import SectionHome from "@/components/Home/SectionHome";
import SlideHome from "@/components/Slide/SlideHome";
import MainLayout from "@/layouts/main";
import imgFeatured from "@/public/images/FeaturedProducts.png"
import imgBestMonth from "@/public/images/BestMonth.png"
import imgScale from "@/public/images/ScaleProduct.png"
import imgHotDeal from "@/public/images/HotDeal.png"
import Image from "next/image";
import CardProductMain from "@/components/Cards/CardProductMain";
import CardTitleMain from "@/components/Cards/CardTitleMain";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SlideProduct from "@/components/Slide/SlideProduct";
import CardFigure from "@/components/Cards/CardFigure";
import CardTitleSelect from "@/components/Cards/CardTitleSelect";
import CardPostNews from "@/components/Cards/CardPostNews";
import ListNewsPosts from "@/components/List/ListNewsPost";
import { IoCalendarNumberOutline } from "react-icons/io5";
import ListPromotion from "@/components/List/ListPromotion";


export default function Home() {
  return (
   <MainLayout>
     <main className="w-[1280px] text-black mx-auto">
    <nav className="w-full  relative grid grid-cols-4">
    <SectionHome/>
    <SlideHome/>
    </nav>
    <nav className="w-full grid grid-cols-3 mb-8 bg-white p-4 h-max gap-4 overflow-hidden rounded-md">
      <img className="w-full h-[180px] object-cover rounded-md cursor-pointer"  src="https://file.hstatic.net/200000462939/file/z5288052168827_28d741314505f817f8e30e38727c23a6_b2737aeff2544bd480a066003629742c.jpg" alt="" />
      <img className="w-full h-[180px] object-cover rounded-md cursor-pointer"  src="https://file.hstatic.net/200000462939/file/z5288052175524_9d5627f36d718045cbf9188c1edbfe82_14b89cdf4fe8458f974a11b136070a52.jpg" alt="" />
      <img  className="w-full h-[180px] object-cover rounded-md cursor-pointer" src="https://file.hstatic.net/200000462939/file/z5288071619524_610311c3b8aa63d43b75da1b5fd969b8_20021cb0957d4b0584159da533f9c85a.jpg" alt="" />
    </nav>
    {/* Figure */}
    <tr className="w-full  grid grid-cols-10 bg-white p-4 h-[170px]  overflow-hidden rounded-md">
      <CardFigure/>
      <CardFigure/>
      <CardFigure/>
      <CardFigure/>
      <CardFigure/>
      <CardFigure/>
      <CardFigure/>

    </tr>
    {/* FlashSale */}
    <FlashSale/>
     {/* SlideProduct */}
     <div className="  bg-white rounded-md my-3 p-4  w-full">
       <CardTitleMain/>
        <SlideProduct/>
    </div>
    {/* Option2 */}
    <tr className="w-full grid grid-cols-4  bg-white p-4 h-max my-8 gap-4 overflow-hidden rounded-md">
     <td className="w-full h-[220px] overflow-hidden object-cover rounded-md cursor-pointer"> <Image className="w-full h-full hover:scale-110 transition-all duration-300"  src={imgFeatured} alt="" /></td>
      <td className="w-full h-[220px] overflow-hidden object-cover rounded-md cursor-pointer"><Image className="w-full h-full hover:scale-110 transition-all duration-300"  src={imgBestMonth} alt="" /></td>
     <td className="w-full h-[220px] overflow-hidden object-cover rounded-md cursor-pointer"> <Image className="w-full h-full hover:scale-110 transition-all duration-300"  src={imgScale} alt="" /></td>
      <td className="w-full h-[220px] overflow-hidden object-cover rounded-md cursor-pointer"><Image className="w-full h-full hover:scale-110 transition-all duration-300"  src={imgHotDeal} alt="" /></td>
    </tr>
   
    <div className="  bg-white rounded-md my-3  p-4  w-full">
       <CardTitleSelect/>
        <div className='w-full  grid grid-cols-5 gap-4'>
        <CardProductMain/>
        <CardProductMain/>
        <CardProductMain/>
        <CardProductMain/>
        <CardProductMain/>
        <CardProductMain/>
        <CardProductMain/>
        <CardProductMain/>
        <CardProductMain/>
        <CardProductMain/>
        </div>
        <button className='flex hover:bg-transparent hover:text-[#9b9b9b] border text-sm items-center text-white rounded-lg bg-[#9b9b9b] border-[#9b9b9b] text-center mx-auto mt-4 px-14 py-3 '>Xem tất cả <MdKeyboardDoubleArrowRight /></button>
</div>
{/* PostNews */}
    <tr className="w-full grid grid-cols-3 gap-5 h-max my-4">
      <td className="  bg-white rounded-md my-3 p-2 px-4 col-span-2  w-full">
        <CardTitleMain/>
      <ListNewsPosts/>
      </td>
      <td className="  bg-white rounded-md my-3 p-2 px-4  w-full">
        <CardTitleMain/>
       <ListPromotion/>
      </td>
    </tr>

    </main>
   </MainLayout>
  );
}


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
import ListNewsPosts from "@/components/List/ListNewsPost";
import ListPromotion from "@/components/List/ListPromotion";
import { getAllProductClient } from "@/api/product";
import { ICharacter, IFilter } from "@/interfaces";
import { getAllCharacter } from "@/api/character";
import banner1 from "@/public/images/banner_1.jpg"
import banner2 from "@/public/images/banner_2.jpg"
import banner3 from "@/public/images/banner_3.jpg"
import Link from "next/link";

export default async function Home() {
  const query = { page: 1, limit: 10 };
  const { docs: characterHome } = await getAllCharacter({ limit: 10 } as IFilter);
  const { docs: productHome } = await getAllProductClient(query as IFilter, "");
  return (
    <MainLayout>
      <main className="w-[1280px] mt-[100px] text-black mx-auto">
        <nav className="w-full  relative grid grid-cols-4">
          <SectionHome />
          <SlideHome />
        </nav>
        <nav className="w-full grid grid-cols-3 mb-8 bg-white p-4 h-max gap-4 overflow-hidden rounded-md">
          <img className="w-full h-[180px] object-cover rounded-md cursor-pointer" src={banner1.src} alt="" />
          <img className="w-full h-[180px] object-cover rounded-md cursor-pointer" src={banner2.src} alt="" />
          <img className="w-full h-[180px] object-cover rounded-md cursor-pointer" src={banner3.src} alt="" />
        </nav>
        {/* Figure */}
        <div className="w-full  grid grid-cols-10 bg-white p-4 h-[170px]  overflow-hidden rounded-md">
          {characterHome?.map((item: ICharacter, index: number) => (
            <Link href={`collections/characters?id=${item.character_id}`} key={index}>
              <CardFigure data={item} />
            </Link>
          ))}

        </div>
        {/* FlashSale */}
        <FlashSale data={productHome} />
        {/* SlideProduct */}
        <div className="  bg-white group/item rounded-md my-3 p-4  w-full">
          <CardTitleMain title="HOT PRODUCT " urlLink="" />
          <SlideProduct data={productHome} />
        </div>
        {/* Option2 */}
        <ul className="w-full grid grid-cols-4  bg-white p-4 h-max my-8 gap-4 overflow-hidden rounded-md">
          <li className="w-full h-[220px] overflow-hidden object-cover rounded-md cursor-pointer">
            <Image className="w-full h-full hover:scale-110 transition-all duration-500" src={imgFeatured} alt="" /></li>
          <li className="w-full h-[220px] overflow-hidden object-cover rounded-md cursor-pointer">
            <Image className="w-full h-full hover:scale-110 transition-all duration-500" src={imgBestMonth} alt="" /></li>
          <li className="w-full h-[220px] overflow-hidden object-cover rounded-md cursor-pointer">
            <Image className="w-full h-full hover:scale-110 transition-all duration-500" src={imgScale} alt="" /></li>
          <li className="w-full h-[220px] overflow-hidden object-cover rounded-md cursor-pointer">
            <Image className="w-full h-full hover:scale-110 transition-all duration-500" src={imgHotDeal} alt="" /></li>
        </ul>

        <div className="  bg-white rounded-md my-3  p-4  w-full">
          <CardTitleSelect title="SẢN PHẨM NỔI BẬT" urlLink="" />
          <div className='w-full  grid grid-cols-5 gap-4'>
            {productHome?.map((item: any, index: number) => (
              <CardProductMain key={index} data={item} />
            ))}

          </div>
          <button className='flex hover:bg-transparent hover:text-[#9b9b9b] border text-sm items-center text-white rounded-lg bg-[#9b9b9b] border-[#9b9b9b] text-center mx-auto mt-4 px-14 py-3 '>Xem tất cả <MdKeyboardDoubleArrowRight /></button>
        </div>
        {/* PostNews */}
        <ul className="w-full grid grid-cols-3 gap-5 h-max my-4">
          <li className="  bg-white rounded-md my-3 p-2 px-4 col-span-2  w-full">
            <CardTitleMain title="TIN TỨC MỚI" urlLink="" />
            <ListNewsPosts />
          </li>
          <li className="  bg-white rounded-md my-3 p-2 px-4  w-full">
            <CardTitleMain title=" tin khuyến Mãi" urlLink="" />
            <ListPromotion />
          </li>
        </ul>

      </main>
    </MainLayout>
  );
}

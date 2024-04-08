"use client";
import CardInfoItem from "@/components/Cards/CardInfoItem";
import CardProductItem from "@/components/Cards/CardProductItem";
import DescriptionItem from "@/components/Cards/DescriptionItem";
import InfoItem from "@/components/Cards/InFoItem";
import SlideProductItem from "@/components/Slide/SlideProductItem";
import MainLayout from "@/layouts/main";
import * as React from "react";


export default function page() {
  return (
    <MainLayout>
      <main className="text-black mb-8 w-[1280px] mx-auto">
        <section className="text-sm py-2 w-full">
          <button className="font-semibold">Trang chủ /</button>
        </section>
        <div className="grid gap-3 grid-cols-4">
          <nav className="col-span-3 rounded-md bg-white py-4 px-3">
            <CardProductItem />
          </nav>
          <CardInfoItem />
        </div>
        <div className="grid gap-3 mt-4 grid-cols-4">
          <DescriptionItem />
          <InfoItem />
        </div>
        <section className="bg-white text-center rounded-md group/item  mt-6 p-4">
          <h1 className="text-xl font-medium">SẢN PHẨM LIÊN QUAN</h1>
          <div className="flex items-center leading-3 mb-4 justify-center gap-2 before:bg-black before:h-[1px]  before:w-[50px] after:w-[50px] after:bg-black after:h-[1px]">
          ///
          </div>
          <SlideProductItem/>
        </section>
        <section className="bg-white text-center rounded-md group/item mt-6 p-4">
          <h1 className="text-xl font-medium">SẢN PHẨM ĐÃ XEM</h1>
          <div className="flex items-center leading-3 mb-4 justify-center gap-2 before:bg-black before:h-[1px]  before:w-[50px] after:w-[50px] after:bg-black after:h-[1px]">
          ///
          </div>
          <SlideProductItem/>
        </section>
      </main>
    </MainLayout>
  );
}

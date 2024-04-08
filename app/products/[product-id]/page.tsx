"use client";
import CardInfoItem from "@/components/Cards/CardInfoItem";
import CardProductItem from "@/components/Cards/CardProductItem";
import DescriptionItem from "@/components/Cards/DescriptionItem";
import InfoItem from "@/components/Cards/InFoItem";
import MainLayout from "@/layouts/main";
import * as React from "react";


export default function page() {
  return (
    <MainLayout>
      <main className="text-black  w-[1280px] mx-auto">
        <section className="text-sm py-2 w-full">
          <button className="font-semibold">Trang chủ /</button>
        </section>
        <div className="grid gap-3 grid-cols-4">
          <nav className="col-span-3 bg-white py-4 px-3">
            <CardProductItem />
          </nav>
         <CardInfoItem/>
        </div>
        <div className="grid gap-3 grid-cols-4">
          <DescriptionItem/>
          <InfoItem/>
        </div>
      </main>
    </MainLayout>
  );
}

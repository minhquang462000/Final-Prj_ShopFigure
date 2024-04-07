
import MainFooter from "@/components/Footers/MainFooter";
import HeaderSelect from "@/components/Headers/HeaderSelect";
import MainHeader from "@/components/Headers/MainHeader";
import { ILayout } from "@/interfaces";
import * as React from "react";

export default function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section className="w-screen">
      <MainHeader />
      <HeaderSelect/>
      {children}
      <MainFooter/>
    </section>
  );
}

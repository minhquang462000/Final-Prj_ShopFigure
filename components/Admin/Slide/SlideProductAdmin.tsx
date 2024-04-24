import * as React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import './styles.css';

// import required modules
import { EffectCards } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
export interface ISlide {
    data: string[]
}

export default function SlideProductAdmin(props: ISlide) {
    const {data} = props
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      loop={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <img className="w-full h-full object-cover" src={item} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

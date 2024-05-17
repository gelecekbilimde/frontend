/* eslint-disable simple-import-sort/imports */
"use client";
import "swiper/css";

import { ArrowRight, Crown, Dot, FlaskConical } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import * as ReactDOMServer from "react-dom/server";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";

import { Badge } from "@/components/ui/badge";

import SwiperActionButton from "./swiper-action-button";
import { swiperData } from "./swiper.constants";

const SwiperComp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onActiveIndexChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return ReactDOMServer.renderToStaticMarkup(
        <SwiperActionButton
          activeIndex={activeIndex}
          index={index}
          class={className}
        />,
      );
    },
  };
  return (
    <Swiper
      onActiveIndexChange={onActiveIndexChange}
      pagination={pagination}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      className="mb-2 h-96 w-full rounded-md"
    >
      {swiperData.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 25%, rgba(255, 255, 255, 0.1)), url("${slide.imageUrl}")`,
            backgroundSize: "cover",
          }}
        >
          <div className="pl-11 pt-14">
            <div className="flex gap-2">
              {/* {slide.categories.map((category, index) => ( */}
              <Badge
                key={index}
                className="flex gap-x-1 border !border-[#FFFFFF]/10 !bg-[#FFFFFF]/20 !p-1 !px-1.5 !font-normal"
              >
                <div className="flex items-center justify-center rounded-full bg-white p-1">
                  <Crown className="text-black" size={10} />
                </div>
                Editör Seçimi
              </Badge>
              <Badge
                key={index}
                className="flex gap-x-1 border !border-[#00B73B]/10 !bg-[#00B73B]/20 !p-1 !px-1.5 !font-normal"
              >
                <div className="flex items-center justify-center rounded-full bg-white p-1">
                  <FlaskConical className="text-black" size={10} />
                </div>
                Bilim
              </Badge>
              {/* ))} */}
            </div>
            <div className=" w-1/2">
              <h1 className="line-clamp-2 py-7 text-3xl font-semibold leading-normal text-white">
                {slide.title}
              </h1>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="inline-block rounded-full border-2 border-white/10 bg-white/10">
                <ArrowRight
                  size={12}
                  strokeWidth={4}
                  color="white"
                  className="m-2 "
                />
              </div>
              <div className="flex items-center gap-1 text-[10px] text-white">
                <Link href="">Yazıyı Oku</Link>
                <Dot size={12} />
                <p>
                  Ortalama{" "}
                  <span className="font-bold">{slide.readTime} DK</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SwiperComp;

"use client";
import * as ReactDOMServer from "react-dom/server";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";

import { swiperData } from "./swiper.constants";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Dot } from "lucide-react";
import SwiperActionButton from "./swiper-action-button";
import Link from "next/link";
import { useState } from "react";

const SwiperComp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onActiveIndexChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return ReactDOMServer.renderToStaticMarkup(
        <SwiperActionButton activeIndex={activeIndex} index={index} class={className} />
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
      className="h-80 mb-2">
      {swiperData.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 25%, rgba(255, 255, 255, 0.3)), url("${slide.imageUrl}")`,
          }}>
          <div className="pl-11 pt-10">
            <div className="flex gap-1">
              {slide.categories.map((category, index) => (
                <Badge key={index} className="bg-green-600/60">
                  {category}
                </Badge>
              ))}
            </div>
            <h1 className="text-xl font-semibold text-white py-7">
              {slide.title}
            </h1>
            <div className="flex items-center gap-1.5">
              <div className="border-2 border-white/10 rounded-full inline-block bg-black/20">
                <ArrowRight
                  size={12}
                  strokeWidth={4}
                  color="white"
                  className="m-2 "
                />
              </div>
              <div className="flex items-center gap-1 text-white">
                <Link href="" className="text-[8px]">
                  Yazıyı Oku
                </Link>
                <Dot size={12} />
                <p className="text-[8px]">
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

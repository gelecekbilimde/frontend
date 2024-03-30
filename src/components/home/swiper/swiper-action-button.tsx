import "react-circular-progressbar/dist/styles.css";

import { swiperData } from "./swiper.constants";

const SwiperActionButton = (properties: {
  index: number;
  activeIndex: number;
  class: string;
}) => {
  return (
    <div
      className={`grid h-11 w-40 cursor-pointer grid-cols-8 items-center justify-center gap-x-2 rounded-md border border-white/10 bg-[#42494D]/40 px-3 text-[8px] text-white backdrop-blur-sm ${properties.class}`}>
      <span className="col-span-8 line-clamp-2 text-white">
        {swiperData[properties.index].title}
      </span>
    </div>
  );
};

export default SwiperActionButton;

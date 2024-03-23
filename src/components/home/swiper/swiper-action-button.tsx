
import { swiperData } from "./swiper.constants";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SwiperActionButton = (props: { index: number; activeIndex:number; class: string }) => {
  return (
    <div
      className={`grid grid-cols-8 gap-x-2 items-center justify-center border-2 border-white/10 rounded-xl text-white text-[8px] w-36 h-10 cursor-pointer bg-[#42494D]/20 backdrop-blur-sm px-2 ${props.class}`}>
        <div className="col-span-2 flex items-center justify-center h-3"><CircularProgressbar value={props.activeIndex + 1 === props.index ? 100 : 0} text={(props.index + 1).toString()} counterClockwise/></div>

      <span className="col-span-6 line-clamp-2">{swiperData[props.index].title}</span>
    </div>
  );
};

export default SwiperActionButton;

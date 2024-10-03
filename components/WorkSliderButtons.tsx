"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function WorkSliderButtons({ containerStyle, buttonStyle }: { containerStyle: string, buttonStyle: string }) {
  const swiper = useSwiper();
  
  return (
    <div className={containerStyle}>
      <button className={buttonStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={buttonStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  )
}

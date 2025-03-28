import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; 
import "swiper/css/navigation";
import Navbar from "./Navbar";
export default function Carousel({currentidx,setcurrentidx}) {
  const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

  const [swiperinstance, setswiperinstance] = useState(null);

  const ref = useRef([]);

 

  useEffect(() => {
    ref.current.forEach((video, index) => {
      if (index == currentidx) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentidx]);

  const handleVideoEnded = () => {
    if (swiperinstance) {
      if (currentidx === videos.length-1) {
        swiperinstance.slideToLoop(0);
      } else {
        swiperinstance.slideNext();
      }
    }
  };

  return (
    <div className="absolute inset-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        freeMode={true}
        loop={true}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        onSwiper={(swiper) => setswiperinstance(swiper)}
        onSlideChange={(swiper) => setcurrentidx(swiper.realIndex)}
        className="w-full h-full"
      >
        {videos.map((videosrc, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full bg-black flex justify-center items-center"
          >
            <video
              src={videosrc}
              ref={(el) => (ref.current[index] = el)}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
              onEnded={handleVideoEnded}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

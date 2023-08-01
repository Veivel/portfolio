// Swiper deps
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";

import TippedIcon from "../elements/icons/TippedIcon";
import { useRef, useCallback } from 'react';


export default function Technologies():JSX.Element {
    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return(
        <>
            <div className="flex flex-col md:flex-row justify-center gap-x-8 items-center">
                <button 
                    onClick={handlePrev} 
                    className='text-3xl hover:scale-125 transition-all rounded-full active:bg-fuchsia-900 
                invisible md:visible md:w-[50px] md:h-[50px]'
                >
                    ⬅️
                </button>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={7}
                    modules={[Navigation, Pagination]}
                    ref={sliderRef}
                    breakpoints={{
                        0: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 5,
                        },
                        1000: {
                            slidesPerView: 6,
                        },
                        1280: {
                            slidesPerView: 7,
                        },
                        1536: {
                            slidesPerView: 11,
                        },
                    }}
                    // pagination={{
                    //     type: "fraction",
                    //     // renderFraction: (index, className) => {
                    //     //     return '<span class="' + className + '">' + (index + 1) + '</span>';
                    //     // }
                    // }}
                    // navigation={true}
                    className="w-full"
                    data-aos="fade-up"
                >
                    <SwiperSlide><TippedIcon size={75} iconId="react" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="nextjs" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="postgresql" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="docker" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="flutter" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="typescript" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="go" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="django" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="tailwind" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="nestjs" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="mongodb" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="redis" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="midtrans" /></SwiperSlide>
                </Swiper>
                <button 
                    onClick={handleNext} 
                    className='text-3xl hover:scale-125 transition-all rounded-full active:bg-fuchsia-900
                    invisible md:visible md:w-[50px] md:h-[50px]'>
                    ➡️
                </button>
            </div>
            <div className="flex flex-row justify-center gap-x-10 font-bold md:invisible md:h-0">
                <button onClick={handlePrev} className='text-3xl hover:scale-125 transition-all rounded-full active:bg-fuchsia-900 w-[50px] h-[50px]'>
                    ⬅️
                </button>
                <button onClick={handleNext} className='text-3xl hover:scale-125 transition-all rounded-full active:bg-fuchsia-900 w-[50px] h-[50px]'>
                    ➡️
                </button>
            </div>
        </>
    );
}
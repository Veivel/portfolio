// Swiper deps
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";

import TippedIcon from "../elements/icons/TippedIcon";


export default function Technologies():JSX.Element {
    return(
        <>
            <Swiper
                spaceBetween={15}
                slidesPerView={7}
                modules={[Navigation, Pagination]}
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 5,
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
                navigation={true}
                className="w-[85%] xl:w-[80%] 2xl:w-[70%] h-[110px]"
                data-aos="fade-up"
            >
                <SwiperSlide><TippedIcon size={75} iconId="go" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="nextjs" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="postgresql" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="docker" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="flutter" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="tailwind" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="typescript" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="react" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="django" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="strapi" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="java" /></SwiperSlide>
                <SwiperSlide><TippedIcon size={75} iconId="python" /></SwiperSlide>
            </Swiper>
        </>
    );
}
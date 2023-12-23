// Swiper deps
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from "swiper";

import TippedIcon from "../elements/icons/TippedIcon";

export default function Technologies():JSX.Element {
    return(
        <>
            <div className="flex flex-col md:flex-row justify-center gap-x-8 items-center">
                <div className='grid grid-cols-6 gap-8 place-content-center'>
                    <TippedIcon size={75} iconId="react" />
                    <TippedIcon size={75} iconId="nextjs" />
                    <TippedIcon size={75} iconId="postgresql" />
                    <TippedIcon size={75} iconId="docker" />
                    <TippedIcon size={75} iconId="flutter" />
                    <TippedIcon size={75} iconId="typescript" />
                    <TippedIcon size={75} iconId="go" />
                    <TippedIcon size={75} iconId="django" />
                    <TippedIcon size={75} iconId="tailwind" />
                    <TippedIcon size={75} iconId="nestjs" />
                    <TippedIcon size={75} iconId="mongodb" />
                    <TippedIcon size={75} iconId="redis" />
                </div>
            </div>
        </>
    );
}
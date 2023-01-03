/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import Link from "next/link";
import { AppContext, AppProvider } from "../components/layout/context/AppProvider";
import { useContext, useEffect, useRef } from "react";
import { useIsInViewport } from "../components/utils/useIsInViewport";
import TippedIcon from "../components/elements/icons/TippedIcon";
// import styles from '../styles/Home.module.css'

// Swiper deps
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";
import Balancer from "react-wrap-balancer";
import Card from "../components/elements/cards/Card";
import Title from "../components/elements/Title";
import WorkCard from "../components/elements/cards/WorkCard";
import LinksDiv from "../components/layout/LinksDiv";
import ProjectCard from "../components/elements/cards/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Ext from "../components/elements/Ext";
import Introduction from "../components/sections/Introduction";
import Experiences from "../components/sections/Experiences";
import Projects from "../components/sections/Projects";
import Miscellaneous from "../components/sections/Miscellaneous";
import Social from "../components/elements/icons/SocialIcon";
import Clipboard from "../components/elements/Clipboard";
import LetsConnect from "../components/sections/LetsConnect";
import Education from "../components/sections/Education";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {

    useEffect(() => {
        // -25 to -200
        // relearn: https://greensock.com/docs/v3/Plugins/ScrollTrigger
        // don't forget to import from gsap/dist/x
        gsap.fromTo("#bulb", 
            {y: 0}, 
            {
                scrollTrigger: {
                    trigger: "#experiences",
                    start: "top bottom",
                    end: "top top",
                    toggleActions: "restart pause reverse pause",
                    scrub: true,
                }, 
                y: 250, 
                ease: "out"
            }
        )
    }, []);

    return(
        <main>
            <div className="absolute -top-[10rem] right-[32rem]" id="bulb">
                <Image 
                    src="/lightbulb.svg"
                    width={100}
                    height={550}
                    alt="hanging light bulb"
                    className=" opacity-50"
                />
            </div>

            <div className="flex flex-col justify-center h-screen" id="introduction">
                <Introduction />
            </div>

            <div id="experiences">
                <Title>// My Experiences</Title>
                <Experiences />
            </div>

            <div>
                <Title>// Projects</Title>
                <Projects />
            </div>

            <div>
                <Title>// Education & Certifications</Title>
                <Education />
            </div>

            {/* this should be a tiny carousel, nothing else */}
            <div>
                <Title>// Technologies I&apos;ve used</Title>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    modules={[Navigation, Pagination]}
                    pagination={true}
                    className="w-[45%] h-[150px]"
                    data-aos="fade-up"
                >
                    <SwiperSlide><TippedIcon size={75} iconId="nextjs" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="go" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="django" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="flutter" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="tailwind" /></SwiperSlide>
                    <SwiperSlide><TippedIcon size={75} iconId="typescript" /></SwiperSlide>
                </Swiper>
            </div>

            <div>
                <Title>// Miscellaneous (...)</Title>
                <Miscellaneous />
            </div>

            <div className="mb-36">
                <Title>// Let&apos;s connect.</Title>
                <LetsConnect />
            </div>
        </main>
    );
}

export default Landing
/* eslint-disable react/jsx-no-comment-textnodes */

import Image from "next/image";
import Link from "next/link";
import { AppContext, AppProvider } from "../components/layout/context/AppProvider";
import { useState } from "react";
import TippedIcon from "../components/elements/icons/TippedIcon";
// import styles from '../styles/Home.module.css'

import Title from "../components/elements/Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Ext from "../components/elements/Ext";
import Introduction from "../components/sections/Introduction";
import Experiences from "../components/sections/Experiences";
import Projects from "../components/sections/Projects";
import Miscellaneous from "../components/sections/Miscellaneous";
import LetsConnect from "../components/sections/LetsConnect";
import Education from "../components/sections/Education";
import Technologies from "../components/sections/Technologies";

// gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
    const [bulb, setBulb] = useState<string>("/betterbulb.png");

    function toggleBulb() {
        if (bulb === "/betterbulb.png") {
            setBulb("/betterbulb-off.png")
        } else {
            setBulb("/betterbulb.png")
        }
    }

    // useEffect(() => {
    //     // -25 to -200
    //     // relearn: https://greensock.com/docs/v3/Plugins/ScrollTrigger
    //     // don't forget to import from gsap/dist/x
    //     gsap.fromTo("#bulb", 
    //         {y: 0}, 
    //         {
    //             scrollTrigger: {
    //                 trigger: "#experiences",
    //                 start: "top bottom",
    //                 end: "top top",
    //                 toggleActions: "restart pause reverse pause",
    //                 scrub: true,
    //             }, 
    //             y: 250, 
    //             ease: "out"
    //         }
    //     )
    // }, []);

    return(
        <main>
            <div className="hidden md:visible absolute lg:right-4 lg:-top-[12rem] xl:-top-[6rem] xl:right-16 2xl:right-48" id="bulb">
                <Image 
                    src={bulb}
                    width={200}
                    height={600}
                    alt="veivel 's hanging bulb"
                    className="opacity-100"
                    onClick={e => toggleBulb()}
                />
            </div>

            <div className="flex flex-col justify-center h-[90vh] md:h-screen" id="introduction">
                <Introduction />
            </div>

            <div id="experiences">
                <Title>{"// My Experiences"}</Title>
                <Experiences />
            </div>

            <div className="space-y-8" id="projects">
                <Title>// Projects</Title>
                <Projects />
            </div>

            <div id="technologies">
                <Title>{"// Technologies I've Used"}</Title>
                <Technologies />
            </div>

            <div id="education">
                <Title>// Education & Certifications</Title>
                <Education />
            </div>

            {/* <div id="misc">
                <Title>// Miscellaneous...</Title>
                <Miscellaneous />
            </div> */}

            <div className="mb-36" id="letsconnect">
                <Title>
                    {"// Let's "}<span className="text-fuchsia-300 inline">connect.</span>
                </Title>
                <LetsConnect />
            </div>
        </main>
    );
}

export default Landing

/* eslint-disable react/jsx-no-comment-textnodes */

import Image from "next/image";
import TippedIcon from "../components/elements/icons/TippedIcon";
import Title from "../components/elements/Title";
import Ext from "../components/elements/Ext";
import Introduction from "../components/sections/Introduction";
import Experiences from "../components/sections/Experiences";
import Projects from "../components/sections/Projects";
import Miscellaneous from "../components/sections/Miscellaneous";
import LetsConnect from "../components/sections/LetsConnect";
import Education from "../components/sections/Education";
import Technologies from "../components/sections/Technologies";

const Landing = () => {
    return(
        <>
            <main>
                <div className="collapse absolute md:visible md:right-4 md:-top-[16rem] lg:-top-[8rem] xl:-top-[6rem] xl:right-16 2xl:right-48">
                    <Image 
                        src={"/betterbulb.png"}
                        width={200}
                        height={600}
                        alt="veivel's toggleable bulb"
                        className="opacity-100"
                    />
                </div>

                <div className="flex flex-col justify-center h-[90vh] md:h-screen" id="introduction">
                    <Introduction />
                </div>

                <div id="experiences">
                    <Title>{"My Experiences"}</Title>
                    <Experiences />
                </div>

                <div className="space-y-8" id="projects">
                    <Title>Projects</Title>
                    <Projects />
                </div>

                <div id="technologies">
                    <Title>{"Technologies I've Used"}</Title>
                    <Technologies />
                </div>

                <div id="education">
                    <Title>Education & Certifications</Title>
                    <Education />
                </div>

                {/* <div id="misc">
                    <Title>Miscellaneous...</Title>
                    <Miscellaneous />
                </div> */}

                <div className="mb-36" id="letsconnect">
                    <Title>
                        {"Let's "}<span className="text-fuchsia-300 inline">connect.</span>
                    </Title>
                    <LetsConnect />
                </div>
            </main>
        </>
    );
}

export default Landing

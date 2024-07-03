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
import Achievements from "../components/sections/Achievements";

const Landing = () => {
    return(
        <>
            <main>
                {/* <div className="collapse absolute md:visible md:right-4 md:-top-[16rem] lg:-top-[8rem] xl:-top-[6rem] xl:right-16 2xl:right-48">
                    <Image 
                        src={"/betterbulb.png"}
                        width={200}
                        height={600}
                        alt="veivel's toggleable bulb"
                        className="opacity-100"
                    />
                </div> */}

                <section className="" id="introduction">
                    <Introduction />
                </section>

                <section id="experiences">
                    <Title>{"Things I Did"}</Title>
                    <Experiences />
                </section>

                <section className="space-y-8" id="projects">
                    <Title>{"Selected Works"}</Title>
                    <Projects />
                </section>

                <section id="achievements">
                    <Title>My Recent Achievements</Title>
                    <Achievements />
                </section>

                <section id="technologies">
                    <Title>{"Things I've Used"}</Title>
                    <Technologies />
                </section>

                <section id="education">
                    <Title>The Journey So Far</Title>
                    <Education />
                </section>

                {/* <section id="misc">
                    <Title>Miscellaneous...</Title>
                    <Miscellaneous />
                </section> */}

                <section className="mb-36" id="letsconnect">
                    <Title>
                        Let{"'"}s connect!
                    </Title>
                    <LetsConnect />
                </section>
            </main>
        </>
    );
}

export default Landing

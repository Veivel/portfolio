/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import Link from "next/link";
import { AppContext, AppProvider } from "../components/layout/context/AppProvider";
import { useContext, useEffect, useRef } from "react";
import { useIsInViewport } from "../components/utils/useIsInViewport";
import Icon from "../components/elements/Icon";
// import styles from '../styles/Home.module.css'

// Swiper deps
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";
import Balancer from "react-wrap-balancer";
import Card from "../components/elements/cards/Card";
import Title from "../components/elements/title";
import ProjectCard, { LinksDiv } from "../components/elements/cards/ProjectCard";

const Landing = () => {
    
    useEffect(() => {
        ;
    }, []);

    return(
        <main>
            {/* Introduction */}
            <div className="flex flex-row justify-between">
                <div className="w-[75%]">
                    <h1 className="mb-0 text-blue-100"> Hi, I&apos;m Givarrel <span className=" text-fuchsia-400">Veivel P</span>attiwael! </h1>
                    <p className="text-base font-bold"> But you can call me <b>Veivel</b>. </p>
                    <h2 className="mt-8">
                        {/* <Balancer> */}
                        I&apos;m a tech enthusiast, a life-long learner, and a guy on the endless journey of growth and discovery.
                        {/* </Balancer> */}
                    </h2>
                </div>
                <div className="w-[200px] h-[200px] relative">
                    <Image 
                        src="/thebirdthing.jpeg"
                        fill
                        alt="picture of me"
                        className="rounded-full"
                    />
                </div>
            </div>

            <div>
                <Title>// My Experiences</Title>

                <div className="grid grid-cols-2 gap-4">
                    {/* <Card imgSrc="/thebirdthing.jpeg">
                        <div className="flex flex-row justify-between">
                            <h2 className="w-[70%]"><Balancer>Frontend Engineer Intern @ AdainAcara</Balancer></h2>
                            <p className="mt-2">Nov 2022 - Present</p>
                        </div>
                        <div className="flex flex-row space-x-2 mb-6">
                            <Icon size={45} iconId="nextjs" />
                            <Icon size={45} iconId="tailwind" />
                        </div>

                        <ul>
                            <li>Initiated the migration of the Bootstrap-powered prototype to a Figma-directed Tailwind design</li>
                            <li>Took charge of onboarding peer interns onto the project.</li>
                            <li>Responsible for the landing page, vendor registration, and more.</li>
                        </ul>

                        <div className="flex flex-row justify-start space-x-8 mt-6">
                            <Link href="https://example.com">
                                Website 🔗
                            </Link>
                            <Link href="https://example.com">
                                Repository 🔗
                            </Link>
                        </div>
                    </Card> */}
                    <ProjectCard
                        title="Frontend Engineer Intern @ AdainAcara"
                        period="Dec 2022 - Present"
                        technologies={["nextjs", "tailwind"]}
                        imgSrc="/thebirdthing.jpeg"
                    >
                        <ul>
                            <li>Initiated the migration of the Bootstrap-powered prototype to a Figma-directed Tailwind design</li>
                            <li>Took charge of onboarding peer interns onto the project.</li>
                            <li>Responsible for the landing page, vendor registration, and more.</li>
                        </ul>

                        <LinksDiv>
                            <Link href="https://example.com">
                                Website 🔗
                            </Link>
                            <Link href="https://example.com">
                                Repository 🔗
                            </Link>
                        </LinksDiv>
                    </ProjectCard>
                    <ProjectCard
                        title="Web Developer @ BETIS Fasilkom UI"
                        period="Nov 2022 - Present"
                        technologies={["nextjs", "tailwind"]}
                        imgSrc="/thebirdthing.jpeg"
                    >
                        <p>Did some important stuff, continue here.</p>
                        <ul>
                            <li>Did something here, something there.</li>
                            <li>Did something here, something there.</li>
                        </ul>

                        <LinksDiv>
                            <Link href="https://betis.cs.ui.ac.id/">
                                Website 🔗
                            </Link>
                            <Link href="https://github.com/BETIS-2023/">
                                Repositories 🔗
                            </Link>
                        </LinksDiv>
                    </ProjectCard>
                </div>
            </div>

            <div>
                <Title>// Projects</Title>

                <h2>Monsieur Rezan&apos;s Website</h2>
                <p>Completed - 
                    <Link href="/">Deployment</Link>
                    <Link href="/">Frontend repo</Link>
                    <Link href="/">Backend repo</Link>
                </p>
                <p>[NextJS] [Strapi] [Docker] [Tailwind]</p>
                <div>
                    <p>Created a professional website for language tutor and content creator Monsieur Rezan using NextJS and Strapi.</p>
                    <ul>
                        <li>Deployed Strapi for the client&apos;s CMS using Docker and Postgres.</li>
                        <li>Designed and built a responsive landing page and registration form with client requirements.</li>
                        <li>Utilized...</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1 data-aos="fade-right">// Education & Certifications</h1>

                <h2>Computer Science Undergraduate @ Universitas Indonesia</h2>
                <p>2021 - 2025 (expected)</p>
                <p>Relevant coursework: Data Structures and Algorithms</p>

                <h2>Google Data Analytics Professional Certificate</h2>
                <p>2022</p>
                <Link href="/">credentials</Link>

            </div>

            {/* this should be a tiny carousel, nothing else */}
            <div className="">
                <h1>// Technologies I&apos;ve used</h1>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    modules={[Navigation, Pagination]}
                    pagination={true}
                    className="w-[45%] h-[150px]"
                >
                    <SwiperSlide><Icon size={75} iconId="nextjs" /></SwiperSlide>
                    <SwiperSlide><Icon size={75} iconId="go" /></SwiperSlide>
                    <SwiperSlide><Icon size={75} iconId="django" /></SwiperSlide>
                    <SwiperSlide><Icon size={75} iconId="flutter" /></SwiperSlide>
                    <SwiperSlide><Icon size={75} iconId="tailwind" /></SwiperSlide>
                    <SwiperSlide><Icon size={75} iconId="typescript" /></SwiperSlide>
                </Swiper>
            </div>

            <div>
                <h1>// Miscellaneous (...)</h1>

                <h2>Head of Job and Scholarship Fair</h2>
                <p>EDUCARE</p>
                <p>Sep 2022 - Present</p>
                <div>
                    <ul>
                        <li>Lead a team of 7 selected staff to prepare the first offline fair in EDUCARE since 2019.</li>
                        <li>Approached X companies and received Y number of deals.</li>
                        <li>Some more bullet points...</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1>// Let&apos;s connect.</h1>
                <Link href="https://www.instagram.com/veivelp/" target={"_blank"}> Instagram </Link>
                <Link href="https://www.linkedin.com/in/veivel/" target={"_blank"}> LinkedIn </Link>
                <Link href="https://github.com/veivel/" target={"_blank"}> GitHub </Link>
                <p>Alternative, contact me here!</p>
                <code>givarrel.veivel@ui.ac.id (allow copy)</code>
            </div>
        </main>
    );
}

export default Landing
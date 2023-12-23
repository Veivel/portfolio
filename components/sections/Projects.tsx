import Link from "next/link";
import Ext from "../elements/Ext";
import ProjectCard from "../elements/cards/ProjectCard";
import LinksDiv from "../layout/LinksDiv";

export default function Projects() {
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8 md:gap-y-2">
                <ProjectCard
                    title="SQL Autograder @ Data Analytics Dash"
                    status="Completed"
                    technologies={["go", "postgresql", "redis"]}
                    imgSrc="/content/dad.png"
                    orientation="normal"
                >
                    <p>
                        Led and supervised the development of a grading system for a 
                        brand new SQL querying competition. 
                    </p>
                    <br/>
                    <p>
                        Data Analytics Dash is a new competition by COMPFEST 15 with 
                        a preliminary stage focused on testing your querying 
                        skills with SQL. For this, we provided a platform a 
                        HackerRank-esque platform.
                    </p>

                    <LinksDiv>
                        <Link href="https://dad.compfest.id">Website <Ext /></Link>
                        {/* <Link href="https://github.com/DAD-Compfest/">Repository <Ext /></Link> */}
                    </LinksDiv>
                </ProjectCard>

                {/* <ProjectCard
                    title="Monsieur Rezan's Website"
                    status="Work In Progress"
                    technologies={["nextjs", "tailwind", "docker", "strapi"]}
                    imgSrc="/content/msrrez.png"
                    orientation="normal"
                >
                    <p>Created a full-stack website for my first ever client: language tutor and content creator Monsieur Rezan using NextJS and Strapi.</p>

                    <LinksDiv>
                        <Link href="https://github.com/veivel/monsieurrezan.com">Frontend <Ext /></Link>
                        <Link href="https://github.com/veivel/monsieurrezan-backend">Backend <Ext /></Link>
                    </LinksDiv>
                </ProjectCard> */}

                <ProjectCard
                    title="Apotech"
                    status="Completed"
                    technologies={["nextjs", "django", "midtrans"]}
                    imgSrc="/content/apotech.png"
                    orientation="normal"
                >
                    <p>Our team{"'"}s entry to the web development competition of IO Fest 2023, which won us 3rd place!</p>
                    <br/>
                    <p>
                        Aligned with the theme of Healthcare, Apotech is a 
                        direct-to-consumer independent pharmacy management system integrated with Midtrans (an Indonesian payment gateway).
                        Our team of 3 developed this within two weeks.
                    </p>
                    <LinksDiv>
                        <Link href="https://apotech.vercel.app/">Deployment <Ext /></Link>
                        <Link href="https://github.com/ApotechIOFest">Repository <Ext /></Link>
                    </LinksDiv>
                </ProjectCard>

                <ProjectCard
                    title="Flashcards"
                    status="Completed"
                    technologies={["react"]}
                    imgSrc="/content/flashcards.png"
                    orientation="normal"
                >
                    <p>A fully functional flashcard/quiz web app utilizing Redux; my first ever React project.</p>
                    <LinksDiv>
                        <Link href="https://youraverageflashcards.netlify.app/">Deployment <Ext /></Link>
                        <Link href="https://github.com/veivel/flashcards">Repository <Ext /></Link>
                    </LinksDiv>
                </ProjectCard>

                <ProjectCard
                    title="Scrap.py"
                    status="Completed"
                    technologies={["django", "python", "flutter"]}
                    imgSrc="/content/scrappy.png"
                    orientation="normal"
                >
                    <p>In a team of 5, we made a working system for a digital waste bank, completed as part of my university&apos;s <i>Pengembangan Berbasis Platform</i> course.</p>
                    <br/>
                    <p>The project was implemented in two parts: on the web (as a website using Django), and via a mobile app using Flutter.</p>
                    <LinksDiv>
                        <Link href="https://scrappy.up.railway.app/">Deploy (Web)<Ext /></Link>
                        <Link href="https://github.com/veivel/scrap.py">Repo (Web)<Ext /></Link>
                        <Link href="https://github.com/arkanalexei/scrap.py-mobile">Repo(Mobile)<Ext /></Link>
                    </LinksDiv>
                </ProjectCard>
            </div>
        </>
    );
}
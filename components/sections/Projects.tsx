import Link from "next/link";
import Ext from "../elements/Ext";
import ProjectCard from "../elements/cards/ProjectCard";
import LinksDiv from "../layout/LinksDiv";

export default function Projects() {
    return(
        <>
            <ProjectCard
                title="Monsieur Rezan's Website"
                status="Work In Progress"
                technologies={["nextjs", "tailwind", "docker", "strapi"]}
                imgSrc="/placeholder.jpeg"
            >
                <p>Created a full-stack website for language tutor and content creator Monsieur Rezan using NextJS and Strapi.</p>

                <LinksDiv>
                    {/* <Link href="/">Deployment <Ext /></Link> */}
                    <Link href="https://github.com/veivel/monsieurrezan.com">Frontend <Ext /></Link>
                    <Link href="https://github.com/veivel/monsieurrezan-backend">Backend <Ext /></Link>
                </LinksDiv>
            </ProjectCard>
            <div className="flex flex-col space-y-6 md:flex-row md:space-x-8 md:space-y-2">
                <ProjectCard
                    title="Flashcards"
                    status="Completed"
                    technologies={["react"]}
                    imgSrc="/content/flashcards.png"
                    orientation="normal"
                >
                    <p>A fully functional flashcard/quiz web app; my first ever React project using Redux.</p>
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
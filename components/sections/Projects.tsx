import Link from "next/link";
import Ext from "../elements/Ext";
import ProjectCard from "../elements/cards/ProjectCard";
import LinksDiv from "../layout/LinksDiv";

export default function Projects() {
    return(
        <>
            <ProjectCard
                title="Monsieur Rezan's Website"
                status="Completed"
                technologies={["nextjs", "tailwind"]}
                imgSrc="/placeholder.jpeg"
            >
                <p>Created a professional website for language tutor and content creator Monsieur Rezan using NextJS and Strapi.</p>
                <ul>
                    <li>Deployed Strapi for the client&apos;s CMS using Docker and Postgres.</li>
                    <li>Designed and built a responsive landing page and registration form with client requirements.</li>
                    <li>Utilized...</li>
                </ul>

                <LinksDiv>
                    <Link href="/">Deployment <Ext /></Link>
                    <Link href="https://github.com/veivel/monsieurrezan.com">Frontend Repo <Ext /></Link>
                    <Link href="https://github.com/veivel/monsieurrezan-backend">Backend Repo <Ext /></Link>
                </LinksDiv>
            </ProjectCard>
        </>
    );
}
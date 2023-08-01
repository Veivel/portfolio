import Link from "next/link";
import Ext from "../elements/Ext";
import WorkCard from "../elements/cards/WorkCard";
import LinksDiv from "../layout/LinksDiv";

export default function Experiences() {
    return(
        <div className="grid md:grid-cols-2 gap-4">
            <WorkCard
                title="Software Engineer Intern @ UniLah"
                period="June 2023 - Present"
                technologies={["nestjs", "mongodb"]}
                imgSrc="/placeholder.jpeg"
            >
                <p>Collaborated with another engineer to design a MongoDB database required to build the company{"'"}s API.</p>
                <br/>
                <p>UniLah is a Malaysia-based startup focusing on a student app.</p>

                {/* <LinksDiv>
                    <Link href="https://example.com">
                                Website <Ext />
                    </Link>
                    <Link href="https://example.com">
                                Repository <Ext />
                    </Link>
                </LinksDiv> */}
            </WorkCard>
            <WorkCard
                title="Frontend Engineer Intern @ Stealth"
                period="Dec 2022 - Mar 2023"
                technologies={["nextjs", "tailwind"]}
                imgSrc="/placeholder.jpeg"
            >
                <p>Worked in a small of team 5 with Figma designs and a constantly-evolving backend.</p>
                <br/>
                <p>The startup in question is a future marketplace platform, where I was tasked to work on registration, landing, and an admin CMS.</p>

                {/* <LinksDiv>
                    <Link href="https://example.com">
                                Website <Ext />
                    </Link>
                    <Link href="https://example.com">
                                Repository <Ext />
                    </Link>
                </LinksDiv> */}
            </WorkCard>
            <WorkCard
                title="Web Developer @ BETIS"
                period="Nov 2022 - Jan 2023"
                technologies={["nextjs", "tailwind"]}
                imgSrc="/content/betis.png"
            >
                <p>Worked in a team of 7 to translate Figma designs including registration and a functional course module into the BETIS website.</p>
                <br/>
                <p>BETIS is a program made by students from the Faculty of Computer Science in Universitas Indonesia to assist high-school students in preparation for their upcoming state college entrance exam.</p>

                <LinksDiv>
                    <Link href="https://betis.cs.ui.ac.id/">
                        Website <Ext />
                    </Link>
                    <Link href="https://github.com/BETIS-2023/">
                        Repository <Ext />
                    </Link>
                </LinksDiv>
            </WorkCard>
        </div>
    )
}
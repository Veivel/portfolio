import Link from "next/link";
import Ext from "../elements/Ext";
import WorkCard from "../elements/cards/WorkCard";
import LinksDiv from "../layout/LinksDiv";

export default function Experiences() {
    return(
        <div className="grid grid-cols-2 gap-4" id="experiences">
            <WorkCard
                title="Frontend Engineer Intern @ AdainAcara"
                period="Dec 2022 - Present"
                technologies={["nextjs", "tailwind"]}
                imgSrc="/content/adainacara-1.jpeg"
            >
                <ul>
                    <li>Initiated the migration of the Bootstrap-powered prototype to a Figma-directed Tailwind design</li>
                    <li>Took charge of onboarding peer interns onto the project.</li>
                    <li>Responsible for the landing page, vendor registration, and more.</li>
                </ul>

                <LinksDiv>
                    <Link href="https://example.com">
                                Website <Ext />
                    </Link>
                    <Link href="https://example.com">
                                Repository <Ext />
                    </Link>
                </LinksDiv>
            </WorkCard>
            <WorkCard
                title="Web Developer @ BETIS Fasilkom UI"
                period="Nov 2022 - Present"
                technologies={["nextjs", "tailwind"]}
                imgSrc="/placeholder.jpeg"
            >
                <p>Did some important stuff, continue here.</p>
                <ul>
                    <li>Did something here, something there.</li>
                    <li>Did something here, something there.</li>
                </ul>

                <LinksDiv>
                    <Link href="https://betis.cs.ui.ac.id/">
                                Website <Ext />
                    </Link>
                    <Link href="https://github.com/BETIS-2023/">
                                Repositories <Ext />
                    </Link>
                </LinksDiv>
            </WorkCard>
        </div>
    )
}
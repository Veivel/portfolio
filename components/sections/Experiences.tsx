import Link from "next/link";
import Ext from "../elements/Ext";
import WorkCard from "../elements/cards/WorkCard";
import LinksDiv from "../layout/LinksDiv";

export default function Experiences() {
    return(
        <div className="grid md:grid-cols-2 gap-4">
            <WorkCard
                title="Frontend Engineer Intern @ AdainAcara"
                period="Dec 2022 - Present"
                technologies={["nextjs", "tailwind"]}
                imgSrc="/placeholder.jpeg"
            >
                <p>Worked in a small of team 5 with Figma designs and a constantly-evolving backend.</p>
                <br/>
                <p>AdainAcara is a startup...</p>

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
                title="Web Developer @ BETIS Fasilkom UI"
                period="Nov 2022 - Present"
                technologies={["nextjs", "tailwind"]}
                imgSrc="/content/betis.png"
            >
                <p>Worked in a team of 7 to translate Figma designs into the BETIS website.</p>
                <br/>
                <p>BETIS is a program made by students from the Faculty of Computer Science in Universitas Indonesia to assist high-school students in preparation for their upcoming state college entrance exam.</p>

                <LinksDiv>
                    <Link href="https://betis2023.vercel.app">
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
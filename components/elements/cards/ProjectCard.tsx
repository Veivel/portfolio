import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import TippedIcon from "../icons/TippedIcon";
import Card from "./Card";
import { PROJECT_PROPS_TYPE } from "./types";

export default function ProjectCard({ title, status, technologies, children, imgSrc, orientation }: PROJECT_PROPS_TYPE): JSX.Element {
    return(
        <Card orientation={orientation || "left"}>
            <div className="flex flex-col justify-between">
                <h2><Balancer>{title}</Balancer></h2>
                <p className="text-sm">{status}</p>
            </div>
            <div className="flex flex-row space-x-2 mb-6">
                {technologies.map((item, idx) => (
                    <TippedIcon size={45} iconId={item} key={idx}/>
                ))}
            </div>
            {children}
        </Card>
    );
}
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Icon from "../Icon";
import Card from "./Card";

type PROJECT_PROPS_TYPE = {
    title: string
    status: string
    technologies: string[]
    children: any
    imgSrc: string
}

export default function ProjectCard({ title, status, technologies, children, imgSrc }: PROJECT_PROPS_TYPE): JSX.Element {
    return(
        <Card imgSrc={imgSrc} orientation="left">
            <div className="flex flex-col justify-between">
                <h2><Balancer>{title}</Balancer></h2>
                <p className="text-sm">{status}</p>
            </div>
            <div className="flex flex-row space-x-2 mb-6">
                {technologies.map((item, idx) => (
                    <Icon size={45} iconId={item} key={idx}/>
                ))}
            </div>
            {children}
        </Card>
    );
}
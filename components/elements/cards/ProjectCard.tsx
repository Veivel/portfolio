import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Icon from "../Icon";
import Card from "./Card";

type PROJECT_PROPS_TYPE = {
    title: string
    period: string
    technologies: string[]
    children: any
    imgSrc: string
}

export function LinksDiv({ children }: {children:any}): JSX.Element {
    return(
        <>
            <div className="flex flex-row justify-start space-x-8 mt-6">
                {children}
            </div>
        </>
    );
}

export default function ProjectCard({ title, period, technologies, children, imgSrc }: PROJECT_PROPS_TYPE): JSX.Element {
    return(
        <Card imgSrc={imgSrc}>
            <div className="flex flex-row justify-between">
                <h2 className="w-[70%]"><Balancer>{title}</Balancer></h2>
                <p className="mt-2">{period}</p>
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
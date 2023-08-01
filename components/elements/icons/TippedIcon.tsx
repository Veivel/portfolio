import Image from "next/image";
import { ICONS_DATA_TYPE, ICON_PROPS_TYPE } from "./types";

const ICONS:ICONS_DATA_TYPE = {
    "nextjs": {
        'src': '/icons/technologies/nextjs.png',
        'tooltip': 'Next JS'
    },
    "django": {
        'src': '/icons/technologies/django.png',
        'tooltip': 'Django'
    },
    "go": {
        'src': '/icons/technologies/go.png',
        'tooltip': 'Go'
    },
    "flutter": {
        'src': '/icons/technologies/flutter.png',
        'tooltip': 'Flutter'
    },
    "tailwind": {
        'src': '/icons/technologies/tailwind.png',
        'tooltip': 'TailwindCSS'
    },
    "typescript": {
        'src': '/icons/technologies/typescript.png',
        'tooltip': 'Typescript'
    },
    "react": {
        'src': '/icons/technologies/reactjs.png',
        'tooltip': 'React'
    },
    "nodejs": {
        'src': '/icons/technologies/nodejs.png',
        'tooltip': 'NodeJS'
    },
    "python": {
        'src': '/icons/technologies/python.png',
        'tooltip': 'Python'
    },
    "java": {
        'src': '/icons/technologies/java.png',
        'tooltip': 'Java'
    },
    "strapi": {
        'src': '/icons/technologies/strapi.png',
        'tooltip': 'Strapi'
    },
    "postgresql": {
        'src': '/icons/technologies/postgresql.png',
        'tooltip': 'PostgreSQL'
    },
    "docker": {
        'src': '/icons/technologies/docker.png',
        'tooltip': 'Docker'
    },
    "nestjs": {
        'src': '/icons/technologies/nestjs.png',
        'tooltip': 'NestJS'
    },
    "mongodb": {
        'src': '/icons/technologies/mongodb.png',
        'tooltip': 'MongoDB'
    },
    "redis": {
        'src': '/icons/technologies/redis.png',
        'tooltip': 'Redis'
    },
    "midtrans": {
        'src': '/icons/technologies/midtrans.png',
        'tooltip': 'Midtrans API'
    },
}

export default function TippedIcon({ size, iconId }: ICON_PROPS_TYPE) {    
    return(
        <>
            <div className="hover:scale-[90%] transition-all shadow-md rounded-md">
                <Image 
                    src={ICONS[iconId]["src"]}
                    width={size}
                    height={size}
                    alt={`${iconId}`}
                    className="z-10"
                />
                {/* <span className="tooltiptext">{ICONS[iconId]["tooltip"]}</span> */}
            </div>
        </>
    );
}
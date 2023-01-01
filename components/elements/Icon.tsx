import { createPopper } from "@popperjs/core/lib/popper-lite";
import Image from "next/image";
import { type } from "os";
import { useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";

type ICON_PROPS_TYPE = {
    size: number
    iconId: string
}

type ICONS_DATA_TYPE = {
    [id: string]: {
        src: string,
        tooltip: string
    }
}   

const ICONS:ICONS_DATA_TYPE = {
    "nextjs": {
        'src': '/icons/nextjs.png',
        'tooltip': 'Next JS'
    },
    "django": {
        'src': '/icons/django.png',
        'tooltip': 'Django'
    },
    "go": {
        'src': '/icons/go.png',
        'tooltip': 'Go'
    },
    "flutter": {
        'src': '/icons/flutter.png',
        'tooltip': 'Flutter'
    },
    "tailwind": {
        'src': '/icons/tailwind.png',
        'tooltip': 'TailwindCSS'
    },
    "typescript": {
        'src': '/icons/typescript.png',
        'tooltip': 'Typescript'
    },
}

export default function Icon({ size, iconId }: ICON_PROPS_TYPE) {    
    return(
        <>
            <div className="tooltip hover:scale-[95%] shadow-sm">
                <Image 
                    src={ICONS[iconId]["src"]}
                    alt="nextjs"
                    width={size}
                    height={size}
                />
                <span className="tooltiptext">{ICONS[iconId]["tooltip"]}</span>
            </div>
        </>
    );
}
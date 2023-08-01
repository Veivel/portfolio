import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Icon.module.css"; 
import { ICON_PROPS_TYPE, SOCIALS_DATA_TYPE } from "./types";

const SOCIALS:SOCIALS_DATA_TYPE = {
    "github": {
        src: "/icons/socials/github-white.png",
        href: "https://github.com/veivel/",
    },
    "linkedin": {
        src:"/icons/socials/linkedin-white.png",
        href: "https://www.linkedin.com/in/veivel/"
    },
    "email": {
        src:"/icons/socials/mail.svg",
        href: "mailto:givarrel.veivel@ui.ac.id"
    }
}

export default function Social({ size, iconId }: ICON_PROPS_TYPE) {    
    return(
        <>
            <Link href={SOCIALS[iconId]['href']} target={"_blank"}>
                <Image 
                    src={SOCIALS[iconId]['src']}
                    alt={`${iconId}`}
                    width={size}
                    height={size}
                    className={styles.GlowOnHover}
                    // className="hover:scale-[105%] hover:shadow-lg hover:shadow-blue-400"
                />
            </Link>
        </>
    );
}
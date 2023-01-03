import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Icon.module.css";

type ICON_PROPS_TYPE = {
    size: number
    iconId: string
}

type SOCIALS_DATA_TYPE = {
    [id: string]: {
        src: string,
        href: string
    },

}   

const SOCIALS:SOCIALS_DATA_TYPE = {
    "github": {
        src: "/icons/socials/github-white.png",
        href: "https://github.com/veivel/",
    },
    "linkedin": {
        src:"/icons/socials/linkedin-white.png",
        href: "https://www.linkedin.com/in/veivel/"
    }
}

export default function Social({ size, iconId }: ICON_PROPS_TYPE) {    
    return(
        <>
            <div>
                <Link href={SOCIALS[iconId]['href']} target={"_blank"}>
                    <Image 
                        src={SOCIALS[iconId]['src']}
                        alt={iconId}
                        width={size}
                        height={size}
                        className={styles.GlowOnHover}
                        // className="hover:scale-[105%] hover:shadow-lg hover:shadow-blue-400"
                    />
                </Link>
            </div>
        </>
    );
}
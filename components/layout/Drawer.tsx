import { useContext } from "react";
import { AppContext } from "./context/AppProvider";
import styles from "../../styles/Drawer.module.css"

const SECTIONS: any = {
    "About Me": "introduction",
    "My Experiences": "experiences",
    "Projects": "projects",
    // "Education & Certifications": "education",
    "Technologies & Skills": "technologies",
    // "Miscellaneous": "misc",
    "Contact Me": "letsconnect",
}

export default function Drawer(): JSX.Element {
    const {isDrawerOpen, setDrawerOpen} = useContext(AppContext);

    function handleScroll(section: string) {
        document.getElementById(section)?.scrollIntoView({
            behavior: "smooth"
        });
        setDrawerOpen(false);
    }

    return(
        <>
            { isDrawerOpen ? 
                <div className={
                    `fixed left-0 top-0 [z-index: 100] flex flex-col z-50 w-[65%] md:w-[55%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-screen
                    shadow-md 
                    ${styles.MenuWrapper}`
                }>
                    <div className="
                        bg-neutral-100 text-black w-full h-full space-y-10 pb-1/4 pt-1/4 shadow-2xl 
                        flex flex-col justify-center text-center"
                    >
                        {Object.keys(SECTIONS).map((section, idx) => (
                            <a key={idx} onClick={e => handleScroll(SECTIONS[section])} className="hover:cursor-pointer font-bold">
                                <h3>{section}</h3>
                            </a>
                        ))}
                    </div> 
                </div> 
                : <></> }
        </>
    );
} 
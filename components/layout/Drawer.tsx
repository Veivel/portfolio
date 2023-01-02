import { useContext } from "react";
import { AppContext } from "./context/AppProvider";
import styles from "../../styles/Drawer.module.css"

export default function Drawer(): JSX.Element {
    const {isDrawerOpen, setDrawerOpen} = useContext(AppContext);

    return(
        <>
            { isDrawerOpen ? 
                <div className={`fixed left-0 top-0 [z-index: 100] flex flex-col z-50 w-[40%] h-screen ${styles.MenuWrapper}`}>
                    <div className="bg-yellow-100 text-black w-full h-full space-y-10 pb-64 shadow-2xl flex flex-col justify-center text-center">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </div> 
                </div> 
                : <></> }
        </>
    );
} 
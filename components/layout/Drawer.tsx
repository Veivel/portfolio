import { useContext } from "react";
import { AppContext } from "./context/AppProvider";
import styles from "../../styles/Drawer.module.css"

export default function Drawer(): JSX.Element {
    const {isDrawerOpen, setDrawerOpen} = useContext(AppContext);

    return(
        <>
            { isDrawerOpen ? 
                <div className="menu-wrapper fixed left-0 top-0 [z-index: 100] flex flex-col z-50 w-[60%] h-screen">
                    <div className="bg-white w-full h-screen gap-24 px-5 py-24 shadow-2xl text-black">
                        <p>whaat</p>
                        <p>whaat</p>
                        <p>whaat</p>
                    </div> 
                </div> 
                : <></> }
        </>
    );
} 
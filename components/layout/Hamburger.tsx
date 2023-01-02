import Image from "next/image";
import { Squash } from 'hamburger-react';
import { useContext, useState } from "react";
import { AppContext } from "./context/AppProvider";

export default function Hamburger(): JSX.Element {
    const {isDrawerOpen, setDrawerOpen} = useContext(AppContext);

    return(
        <div className="fixed top-10 right-10 hover:cursor-pointer">
            {/* <Image 
                src="/hamburger-white.png"
                width={64}
                height={64}
                alt="hamburger"
            /> */}
            <Squash toggled={isDrawerOpen} toggle={setDrawerOpen} />
        </div>
    );
}
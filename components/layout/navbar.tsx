import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar(): JSX.Element {
    const [visible, setVisible] = useState(true)

    return(
        <div className={`Navbar fixed ${visible ? 'top-0' : ''} bg-neutral-100 text-black w-full py-4 px-8 grid grid-cols-2`}>
            <div className="flex flex-row bg-yellow-200">
                <span>Branding</span>
            </div>
            <div className="flex flex-row-reverse bg-yellow-300 space-x-8 justify-around">
                <p>something</p>
                <p>something</p>
                <p>something</p>
                <p>something</p>
            </div>
        </div>
    );
}
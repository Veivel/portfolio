import { useState } from "react";
import Clipboard from "../elements/Clipboard";
import Social from "../elements/icons/SocialIcon";

export default function LetsConnect() {
    const [note, setNote] = useState<string>(" ");

    function handleCopy() {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "-");
        setNote("Email address copied!")
    }

    return(
        <>
            <div className="mx-auto w-[60%] text-center">
                <h3>{"I'm always open to chat, so don't hesitate to contact me!"}</h3>
                <br/>
                <div className="flex flex-row justify-center">
                    <code className="bg-gray-700 p-3 rounded-l-lg"> 
                        givarrel.veivel [at] ui.ac.id 
                    </code>
                    <button 
                        onClick={e => handleCopy()}
                        className="bg-gray-600 p-3 hover:bg-gray-800 active:bg-black rounded-r-lg"
                    >
                        <Clipboard />
                    </button>
                </div>
                {/* <sub>{note}</sub> */}
                <div className="flex flex-row my-8 space-x-16 justify-center">
                    <Social size={100} iconId="github" />
                    <Social size={100} iconId="linkedin" />
                </div>
            </div>
        </>
    );
}
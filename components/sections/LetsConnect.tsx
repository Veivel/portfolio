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
            <div className="mx-auto w-[100%] md:w-[60%] text-center" data-aos="fade-up">
                <h3>{"It all begins with a conversation – so let's spark something. My inbox and DMs are always open!"}</h3>
                <br/>
                <div className="flex flex-row justify-center border border-gray-300 rounded-lg w-fit mx-auto">
                    <code className="bg-gray-50 p-3 rounded-l-lg"> 
                        givarrel.veivel [at] ui.ac.id
                    </code>
                    <button 
                        onClick={e => handleCopy()}
                        className="bg-gray-100 p-3 hover:bg-gray-200 active:bg-gray-400 rounded-r-lg"
                    >
                        <Clipboard/>
                    </button>
                </div>
                <p className=" font-medium text-xs mt-4" >{note}</p>
                <div className="flex flex-row my-6 space-x-4 justify-center">
                    <Social size={85} iconId="github" />
                    <Social size={85} iconId="linkedin" />
                    <Social size={85} iconId="email" />
                </div>
            </div>
        </>
    );
}
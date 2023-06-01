import Image from "next/image";

export default function Introduction(): JSX.Element {
    
    function handleDownButton() {
        document.getElementById("experiences")?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return(
        <>
            <div className="flex flex-col w-full h-[75vh]">
                <div className="flex flex-col my-auto md:pb-[10vh]">
                    <h1 className="text-white" data-aos="fade-right">
                        {"Hi, I'm "}
                        <span className="text-transparent bg-clip-text shiny-1">Veivel</span>
                        {"!"}
                    </h1>
                    <h2 className="text-fuchsia-400" data-aos="fade-up">
                        {"A tech guy who's all about learning and impact."}
                    </h2>
                </div>
                <button 
                    className="text-3xl font-bold hover:text-fuchsia-300 justify-self-end"
                    onClick={e => handleDownButton()}
                >
                    ▼
                </button>
            </div>
        </>
    );
}
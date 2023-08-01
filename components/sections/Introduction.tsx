import Image from "next/image";

export default function Introduction(): JSX.Element {
    
    function handleDownButton() {
        document.getElementById("experiences")?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return(
        <>
            <div className="flex flex-col justify-center w-full h-screen">
                <div className="flex flex-col my-auto">
                    <h1 className="text-white" data-aos="fade-right">
                        {"Hi, I'm "}
                        <span className="text-transparent bg-clip-text shiny-1">Veivel</span>
                        {"!"}
                    </h1>
                    <h2 className="text-fuchsia-400 w-[75%]" data-aos="fade-up">
                        {"A tech guy who's always up for a new challenge and constantly looking for new ways to create impact in the world."} ✌️
                    </h2>
                </div>
                <button 
                    className="text-3xl font-bold hover:text-fuchsia-300 hover:scale-125 transition-all justify-self-end my-2 md:my-4"
                    onClick={e => handleDownButton()}
                >
                    ⬇️
                </button>
            </div>
        </>
    );
}
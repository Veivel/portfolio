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
                <div className="flex flex-col my-auto text-center">
                    <h1 className="" data-aos="fade-right">
                        {"Hi, I'm "}
                        <span className="text-primary special-underline">Veivel</span>
                        {"! ✌️"}
                        
                    </h1>
                    <hr className="my-2 md:my-6 mx-[25%]" />
                    <h3 className="md:w-[85%] lg:w-[75%] mx-auto inline" data-aos="fade-up">
                        <span> A software engineer who is always exploring and 
                            learning how to better build </span>
                        <p className="text-primary inline special-underline">impactful products</p>
                        <span> and bring </span>
                        <p className="text-primary inline special-underline">potent ideas</p>
                        <span> to life. </span>
                    </h3>
                </div>
                <button 
                    className="text-3xl font-bold text-fuchsia-700 hover:scale-125 transition-all justify-self-end my-2 md:my-4"
                    onClick={e => handleDownButton()}
                >
                    ⬇️
                </button>
            </div>
        </>
    );
}
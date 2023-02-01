import Image from "next/image";

export default function Introduction(): JSX.Element {
    
    function handleDownButton() {
        document.getElementById("experiences")?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return(
        <>
            <div className="flex flex-row">
                <div className="w-[100%] md:w-[55vw] xl:w-[50vw]">
                    <h1 className="mb-0 text-white" data-aos="fade-right">
                        {"Hi, I'm Givarrel "}
                        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Veivel P</span>
                        {"attiwael!"}
                    </h1>
                    <h4 className="text-base" data-aos="fade-right"> 
                        But you can call me <b>Veivel</b>. 
                    </h4>
                    <h2 className="mt-8 xl:mt-12 text-fuchsia-400" data-aos="fade-up">
                        {"I'm a tech enthusiast, a life-long learner, and a guy on the journey of growth and discovery."}
                    </h2>
                </div>
                <div className="md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] relative" data-aos="flip-up">
                    <Image 
                        src="/me-1x1.jpg"
                        fill
                        alt="avatar or profile picture of Givarrel Veivel Pattiwael"
                        className="rounded-full"
                    />
                </div>
            </div>
            <div className="mt-8 xl:mt-12 md:w-[70%] xl:w-[80%]" data-aos="fade-up">
                <h4>
                    {`Currently, I'm a Computer Science sophomore in Universitas Indonesia. 
                    I've recently found interest in the realm of data science and web development, 
                    so I have been spending my free time learning new things on those two topics.`}
                </h4>
            </div>
            <button 
                className="absolute bottom-24 md:bottom-10 left-1/2 text-3xl font-bold hover:text-fuchsia-300"
                onClick={e => handleDownButton()}
            >
                ▼
            </button>
        </>
    );
}
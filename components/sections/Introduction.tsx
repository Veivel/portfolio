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
                <div className="w-[100%] md:w-[75%]">
                    <h1 className="mb-0 text-white" data-aos="fade-right">
                        Hi, I&apos;m Givarrel <span className=" text-fuchsia-400">Veivel P</span>attiwael! 
                    </h1>
                    <h3 className="text-base" data-aos="fade-right"> 
                        But you can call me <b>Veivel</b>. 
                    </h3>
                    <h2 className="mt-8 xl:mt-12 text-fuchsia-300" data-aos="fade-up">
                        {"I'm a tech enthusiast, a life-long learner, and a guy on the endless journey of growth and discovery."}
                    </h2>
                </div>
                <div className="md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] relative" data-aos="flip-up">
                    <Image 
                        src="/thebirdthing.jpeg"
                        fill
                        alt="picture of me"
                        className="rounded-full"
                    />
                </div>
            </div>
            <div className="mt-8 xl:mt-12 md:w-[70%] xl:w-[50%]" data-aos="fade-up">
                <h4>
                    {`Currently, I am in my second year of pursuing a Computer Science undergraduate degree. 
                    I've recently found interest in the realm of data science and web development, 
                    so I have been spending my free time learning new things about the two topics.`}
                </h4>
            </div>
            <button 
                className="absolute bottom-36 md:bottom-10 left-1/2 text-5xl font-bold hover:text-fuchsia-300"
                onClick={e => handleDownButton()}
            >
                ⌄
            </button>
        </>
    );
}
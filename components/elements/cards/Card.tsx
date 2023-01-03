import Image from "next/image";

type CARD_PROPS_TYPE = {
    children: any
    imgSrc: string
    orientation? : "left" | "right" | "normal"
}

const CardImage = (props: any) => (
    <div className={props.left || props.right ? "w-[50%] relative" : "w-full h-[250px] relative"}>
        <Image 
            src={props.src}
            fill
            alt="illustration of work"
            className={props.left ? "rounded-l-xl" : props.right ? "rounded-r-xl" : "rounded-t-xl"}
            style={{'objectFit': 'cover'}}
        />
    </div>
);

export default function Card({ children, imgSrc, orientation }: CARD_PROPS_TYPE): JSX.Element {

    if (orientation === "left" || orientation === "right") {
        return(
            <div className={`w-full rounded-xl bg-white text-black shadow-lg shadow-blue-700 flex flex-row md:h-[350px] xl:h-[380px]`} data-aos="fade-up">
                { orientation === "left" ? <CardImage left src={imgSrc} /> : <></> }
                <div className="px-6 py-4 w-[50%]">
                    {children}
                </div>
                { orientation === "right" ? <CardImage right src={imgSrc} /> : <></> }
            </div>
        );
    } else {
        return(
            <div className={`w-full rounded-xl bg-white text-black shadow-lg shadow-blue-700`} data-aos="fade-up">
                <CardImage src={imgSrc} />
                <div className="px-6 py-4">
                    {children}
                </div>
            </div>
        );
    }
}
import Image from "next/image";

type CARD_PROPS_TYPE = {
    children: any
    imgSrc: string
    orientation? : "left" | "right"
}

const CardImage = (props: any) => (
    <div className={props.left || props.right ? "w-[75%] relative" : "w-full h-[250px] relative"}>
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
    

    if (orientation) {
        return(
            <div className={`rounded-xl bg-white text-black shadow-lg shadow-red-500 flex flex-row`} data-aos="fade-up">
                { orientation === "left" ? <CardImage left src={imgSrc} /> : <></> }
                <div className="px-6 py-4">
                    {children}
                </div>
                { orientation === "right" ? <CardImage right src={imgSrc} /> : <></> }
            </div>
        );
    } else {
        return(
            <div className={`rounded-xl bg-white text-black shadow-lg shadow-red-500`} data-aos="fade-up">
                <CardImage src={imgSrc} />
                <div className="px-6 py-4">
                    {children}
                </div>
            </div>
        );
    }
}
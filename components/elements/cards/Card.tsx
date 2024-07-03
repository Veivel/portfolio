import Image from "next/image";
import useMediaQuery from "../../utils/useMediaQuery";
import { CARD_PROPS_TYPE } from "./types";

const CardImage = (props: any) => (
    <div className={props.left || props.right ? "w-[50%] relative" : "w-full h-max max-h-[250px] relative"}>
        <Image 
            src={props.src}
            className={props.left ? "rounded-l-xl" : props.right ? "rounded-r-xl" : "rounded-t-xl"}
            style={{'objectFit': 'cover'}}
            alt={`illustration of ${props.src} by Veivel`}
            fill
            sizes="50%"
        />
    </div>
);

export default function Card({ children, orientation, className }: CARD_PROPS_TYPE): JSX.Element {
    const minimumLg = useMediaQuery('(min-width: 1024px)');

    return(
        <div className={`
        ${className} block w-full h-full relative rounded-xl bg-[rgb(255,252,249)] text-black border
        transform transition-transform duration-300 hover:scale-105 hover:border-black
        `} data-aos="fade-up">
            <div className="px-6 py-4">
                {children}
            </div>
        </div>
    );
}
import Image from "next/image";

type CARD_PROPS_TYPE = {
    children: any
    imgSrc: string
}

export default function Card({ children, imgSrc }: CARD_PROPS_TYPE): JSX.Element {
    return(
        <div className="rounded-xl bg-white text-black shadow-lg shadow-red-500">
            <div className="w-full h-[250px] relative">
                <Image 
                    src={imgSrc}
                    fill
                    alt="picture of me"
                    className="rounded-t-xl"
                    style={{'objectFit': 'cover'}}
                />
            </div>
            <div className="px-6 py-4">
                {children}
            </div>
        </div>
    );
}
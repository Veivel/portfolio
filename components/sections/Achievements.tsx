import Link from "next/link";
import Ext from "../elements/Ext";
import Card from "../elements/cards/Card";
import SquareCard from "../elements/cards/SquareCard";
import Image from "next/image";

export default function Achievements():JSX.Element {
    return(
        <>
            <div data-aos="fade-up" className="flex flex-col md:flex-row items-center justify-center gap-4">
                <SquareCard>
                    <Image 
                        src="/content/iofest.png"
                        width={75}
                        height={75}
                        alt="hello"
                        className="mx-auto w-[75px] h-[75px] rounded-md"
                    />
                    <h2><u>3rd place</u> in I/O Fest Web Development Category</h2>
                    <p>National university-level web development competition by Universitas Tarumanegara (2023)</p>
                </SquareCard>
                <SquareCard>
                    <Image 
                        src="/content/technoscape.jpeg"
                        width={75}
                        height={75}
                        alt="hello"
                        className="mx-auto w-[75px] h-[75px] rounded-md"
                    />
                    <h2><u>1st place</u> in Technoscape Hackathon 6.0</h2>
                    <p>National university-level hackathon lasting 36 hours by Universitas Bina Nusantara (2023)</p>
                </SquareCard>
            </div>
        </>
    );
}
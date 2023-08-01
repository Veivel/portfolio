import Link from "next/link";
import Ext from "../elements/Ext";
import Card from "../elements/cards/Card";
import SquareCard from "../elements/cards/SquareCard";

export default function Achievements():JSX.Element {
    return(
        <>
            <div data-aos="fade-up" className="flex justify-center">
                <SquareCard>
                    <h2>3rd place in IO Fest</h2>
                    <p>National university-level web development competition</p>
                </SquareCard>
            </div>
        </>
    );
}
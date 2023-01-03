import Link from "next/link";
import Ext from "../elements/Ext";

export default function Education():JSX.Element {
    return(
        <>
            <div data-aos="fade-up">
                <h2>Computer Science Undergraduate @ Universitas Indonesia</h2>
                <p>2021 - 2025 (expected)</p>
                <p>Relevant coursework: Data Structures and Algorithms, Linear Algebra</p>
                <br />
                <h2>Google Data Analytics Professional Certificate</h2>
                <p>2022 - <Link href="/">Credentials <Ext/> </Link></p>
            </div>
        </>
    );
}
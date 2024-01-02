import Link from "next/link";
import Ext from "../elements/Ext";

export default function Education():JSX.Element {
    return(
        <>
            <div data-aos="fade-up">
                <h2>Computer Science Undergraduate @ Universitas Indonesia</h2>
                <p>Aug 2021 - Aug 2025 (expected)</p>
                <br/>
                <h2>AUN-ACTs Exchange Student @ National University of Singapore </h2>
                <p>Jan 2024 - May 2024</p>
                <br />
                {/* <h2>Google Data Analytics Professional Certificate</h2>
                <p>2022 - <Link href="/">Credentials <Ext/> </Link></p> */}
            </div>
        </>
    );
}
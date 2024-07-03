import Link from "next/link";
import Ext from "../elements/Ext";
import Social from "../elements/icons/SocialIcon";
import Image from "next/image";

export default function Education():JSX.Element {
    return(
        <>
            <div data-aos="fade-up">
                <div className="flex gap-4">
                    <Image
                        src={"/icons/socials/makara.svg"}
                        width={40}
                        height={40}
                        alt={`makara universitas indonesia`}
                        className="z-10"
                    />
                    <div className="flex flex-col">
                        <h2>Computer Science Undergraduate @ Universitas Indonesia</h2>
                        <p>Aug 2021 - Jul 2025 (currently pursuing)</p>
                    </div>
                </div>
                <br/>
                <div className="flex gap-4">
                    <Image
                        src={"/icons/socials/coat-of-arms.svg"}
                        width={40}
                        height={40}
                        alt={`nus coat of arms logo`}
                        className="z-10"
                    />
                    <div className="flex flex-col">
                        <h2>AUN-ACTs Exchange Student @ National University of Singapore </h2>
                        <p>Jan 2024 - May 2024</p>
                    </div>
                </div>
                {/* <h2>Google Data Analytics Professional Certificate</h2>
                <p>2022 - <Link href="/">Credentials <Ext/> </Link></p> */}
            </div>
        </>
    );
}
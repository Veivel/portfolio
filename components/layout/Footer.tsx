import Link from "next/link";

export default function Footer(): JSX.Element {
    return(
        <div className="bg-neutral-900 w-full p-12">
            <div className="w-full h-full flex flex-col md:flex-row justify-center text-neutral-100 md:space-x-16">
                <div>
                    <sub>{"Looks like you've reached the end."}</sub>
                </div>
                <div>
                    <sub>© Veivel Pattiwael 2023.</sub>
                </div>
            </div>
        </div>
    );
}
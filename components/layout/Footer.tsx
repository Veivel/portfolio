import Link from "next/link";

export default function Footer(): JSX.Element {
    return(
        <div 
            className="w-full px-12 py-8 rounded-t-xl border border-gray-300 bg-neutral-50 h-fit"
            itemScope itemType="https://schema.org/WPFooter"
        >
            <div className="w-full h-full flex flex-col justify-center text-center gap-2">
                <p>built with nextJS 🙂 – <Link href={"https://github.com/veivel/portfolio"}>github</Link></p>
                <p>© 2024 Veivel Pattiwael.</p>
            </div>
        </div>
    );
}
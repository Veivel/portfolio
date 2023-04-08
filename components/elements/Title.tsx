import { TITLE_PROPS_TYPE } from "./types";

export default function Title({ children }: TITLE_PROPS_TYPE): JSX.Element {
    // return(
    //     <div className="
    //     mt-16 xl:mt-32 mb-12 py-2 
    //     bg-black border-solid border border-purple-900 w-[200%] 
    //     relative -left-52 pl-52 2xl:-left-[36rem] 2xl:pl-[36rem]
    //     ">
    //         <h1 data-aos="fade-right" className="break-words w-screen">
    //             {children}
    //         </h1>
    //     </div>
    // );
    return (
        <div className="mt-24 mb-10">
            <h1 className="text-center title-effect w-fit px-2 mx-auto">
                {children}
            </h1>
        </div>
    )
}
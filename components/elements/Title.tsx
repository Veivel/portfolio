import { TITLE_PROPS_TYPE } from "./types";

export default function Title({ children }: TITLE_PROPS_TYPE): JSX.Element {
    return (
        <div className="title-effect w-fit px-2 mx-auto mt-24 mb-10">
            <h1 className="text-center shiny-2 bg-clip-text text-transparent">
                {children}
            </h1>
        </div>
    )
}
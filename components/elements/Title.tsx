import { TITLE_PROPS_TYPE } from "./types";

export default function Title({ children }: TITLE_PROPS_TYPE): JSX.Element {
    return (
        <div className="w-fit px-2 mx-auto mb-6 mt-20">
            <h1 className="text-center bg-clip-text text-primary special-underline">
                {children}
            </h1>
        </div>
    )
}
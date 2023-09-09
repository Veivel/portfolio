import { SQUARE_CARD_PROPS_TYPE } from "./types";

export default function SquareCard({ children }: SQUARE_CARD_PROPS_TYPE): JSX.Element {

    return(
        <div className="w-[290px] h-[290px] rounded-xl bg-white text-black shadow-md shadow-blue-700 flex flex-col p-4 justify-center text-center">
            {children}
        </div>
    )
}
import { SQUARE_CARD_PROPS_TYPE } from "./types";

export default function SquareCard({ children }: SQUARE_CARD_PROPS_TYPE): JSX.Element {

    return(
        <div className="w-[280px] h-[280px] rounded-xl bg-white text-black shadow-md shadow-blue-700 flex flex-col p-6 justify-center text-center">
            {children}
        </div>
    )
}
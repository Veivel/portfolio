import { SQUARE_CARD_PROPS_TYPE } from "./types";

export default function SquareCard({ children }: SQUARE_CARD_PROPS_TYPE): JSX.Element {

    return(
        <div className="w-[330px] h-[330px] rounded-xl bg-white text-black border border-gray-300 flex flex-col p-4 justify-center text-center">
            {children}
        </div>
    )
}
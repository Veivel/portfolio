import Image from "next/image";
import { CLIPBOARD_PROPS_TYPE } from "./types";

export default function Clipboard({ size, white, black }: CLIPBOARD_PROPS_TYPE): JSX.Element {
    function getSrc() {
        if (black) {
            return "/icons/clipboard-black.png"
        } else {
            return "/icons/clipboard.png"
        }
    }
    return(
        <Image
            src={getSrc()}
            width={size || 16}
            height={size || 16}
            alt="clipboard"
            className="inline"
        />
    );
}
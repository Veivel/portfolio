import Image from "next/image";
import { EXT_PROPS_TYPE } from "./types";

export default function Ext({ size, white, black }: EXT_PROPS_TYPE) {
    function getSrc() {
        if (white) {
            return "/external-white.svg"
        } else if (black) {
            return "/external-black.svg"
        } else {
            return "/external.svg"
        }
    }
    return(
        <Image
            src={getSrc()}
            width={size || 16}
            height={size || 16}
            alt="external link"
            className=" inline"
        />
    );
}
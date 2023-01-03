import Image from "next/image";

type CB_PROPS_TYPE = {
    size?: number
    white?: boolean
    black?: boolean
}

export default function Clipboard({ size, white, black }: CB_PROPS_TYPE): JSX.Element {
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
            alt="external link"
            className=" inline"
        />
    );
}
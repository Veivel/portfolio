export type ICON_PROPS_TYPE = {
    size: number
    iconId: string
    className?: string
}

export type SOCIALS_DATA_TYPE = {
    [id: string]: {
        src: string,
        href: string
    },
}  

export type ICONS_DATA_TYPE = {
    [id: string]: {
        src: string,
        tooltip: string
    }
}   
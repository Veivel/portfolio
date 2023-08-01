export type CARD_PROPS_TYPE = {
    children: any
    imgSrc: string
    orientation? : "left" | "right" | "normal"
}

export type SQUARE_CARD_PROPS_TYPE = {
    children: any
}
export type CARD_PROPS_TYPE = {
    children: any
    imgSrc: string
    orientation? : "left" | "right" | "normal"
}

export type PROJECT_PROPS_TYPE = {
    title: string
    status: string
    technologies: string[]
    children: any
    imgSrc: string
    orientation?: "left" | "right" | "normal"
}

type WORK_PROPS_TYPE = {
    title: string
    period: string
    technologies: string[]
    children: any
    imgSrc: string
}
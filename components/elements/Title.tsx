type TITLE_PROPS_TYPE = {
    children: any
}

export default function Title({ children }: TITLE_PROPS_TYPE): JSX.Element {
    return(
        <h1 className="text-center mt-24 mb-12">
            {children}
        </h1>
    );
}
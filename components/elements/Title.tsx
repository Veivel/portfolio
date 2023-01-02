type TITLE_PROPS_TYPE = {
    children: any
}

export default function Title({ children }: TITLE_PROPS_TYPE): JSX.Element {
    return(
        <div className="mt-24 mb-12 bg-red-900 w-screen relative -left-52 pl-52">
            <h1 data-aos="fade-right">{children}</h1>
        </div>
    );
}
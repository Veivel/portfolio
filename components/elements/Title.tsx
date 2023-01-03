type TITLE_PROPS_TYPE = {
    children: any
}

export default function Title({ children }: TITLE_PROPS_TYPE): JSX.Element {
    return(
        <div className="mt-16 xl:mt-32 mb-12 py-2 bg-black border-solid border border-purple-900 w-[200%] relative -left-52 pl-52">
            <h1 data-aos="fade-right">
                {children}
            </h1>
        </div>
    );
}
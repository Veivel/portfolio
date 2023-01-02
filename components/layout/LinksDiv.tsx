export default function LinksDiv({ children }: {children:any}): JSX.Element {
    return(
        <>
            <div className="flex flex-row justify-start space-x-8 mt-6">
                {children}
            </div>
        </>
    );
}
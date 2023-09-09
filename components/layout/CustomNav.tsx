export default function CustomNav(): JSX.Element {
    return(
        <div 
            className="w-full px-[5%] md:px-[12%] py-8 rounded-t-lg flex flex-row-reverse z-30 gap-x-16"
            itemScope itemType="https://schema.org/SiteNavigationElement"
        >
            <h4>Contact</h4>
            <h4>Blog</h4>
        </div>
    );
}
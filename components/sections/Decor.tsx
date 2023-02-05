const Decor = ():JSX.Element => (
    <>
        <div id="target1" className="absolute bottom-0 flex justify-between md:w-[85vw] max-w-full inset-x-32">
            <div className="relative flex -bottom-24 justify-between w-[45%]">
                <p>0</p>
                <p className="relative -bottom-8">1</p>
                <p className="relative -bottom-8">1</p>
                <p>0</p>
            </div>
            <div className="relative flex -bottom-20 justify-between w-[45%]">
                <p>1</p>
                <p>0</p>
                <p>1</p>
            </div>
        </div>
        <div id="target2" className="absolute bottom-0 flex justify-between inset-x-24 text-xs">
            <div className="relative flex -bottom-32 justify-between w-[45%] inset-x-20">
                <p>0</p>
                <p className="relative -bottom-8">0</p>
                <p>1</p>
                <p>1</p>
            </div>
            <div className="relative flex -bottom-36 justify-between w-[45%] inset-x-12">
                <p className="relative -bottom-8">1</p>
                <p>0</p>
                <p className="relative -bottom-8">0</p>
                <p>1</p>
                <p className="relative -bottom-4">1</p>
            </div>
        </div>
        <div className="absolute flex -bottom-40 justify-between w-[45%] inset-x-20 ">
            <p>0</p>
            <p>0</p>
            <p>1</p>
        </div>
        <div id="target3" className="absolute font-black -bottom-12 flex justify-between text-4xl inset-x-4">
            <p className="relative -bottom-2">0</p>
            <p>0</p>
            <p className="relative -bottom-8">1</p>
            <p>1</p>
            <p>0</p>
        </div>
        <div id="target3b" className="absolute font-bold -bottom-20 flex justify-between text-3xl inset-x-36">
            <p>1</p>
            <p>1</p>
            <p>0</p>
            <p className="relative -bottom-5">1</p>
        </div>
    </>
)

export default Decor;
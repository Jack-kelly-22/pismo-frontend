// import { createLimitOrderFacade } from "../hooks/useInch";

const WriteCC = () => {
    return (
        <div>
            <h2 className="font-bold text-2xl p-2">Write Call Option</h2>
            <div className="text-center rounded-2xl p-2 bg-midBlue w-80 h-1/2 h-autorounded-2xl outline outline-2 outline-white">
                {/* <p className="font-bold text-2xl"> 100 eth</p>
                <p className="font-light text-lg"> 100 eth</p> */}
                <button className="bg-white px-4 py-2 text-lg text-black rounded-lg hover:bg-opacity-30">
                    Write
                </button>
            </div>
        </div>
    )
}

export default WriteCC;
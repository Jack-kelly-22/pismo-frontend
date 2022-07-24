import { useEffect, useState } from "react";
// import { getEthPrice } from "../hooks/useInch";
import Parameters from "./Parameters";
import UserAssets from "./UserAssets";
import WriteCC from "./WriteCC";

const UserOverview = () => {
    
    return (
        <div className="flex flex-row gap-4 mx-4 justify-center outline mt-24 w-full p-4 m-4 outline-2 text-white text-center outline-white rounded-3xl bg-gradient-to-b from-darkBlue to-black">
            <UserAssets />
            <Parameters />
            <WriteCC/>
            
        </div>
    );
    }

export default UserOverview;

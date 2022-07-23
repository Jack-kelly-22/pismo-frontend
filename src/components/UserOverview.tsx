import Parameters from "./Parameters";
import UserAssets from "./UserAssets";
import WriteCC from "./WriteCC";

const UserOverview = () => {
    return (
        <div className="flex flex-row gap-4 outline mt-24 w-full h-80 p-4 m-4 h-40 outline-2 text-white text-center outline-white rounded-3xl bg-gradient-to-b from-darkBlue to-black">
            <UserAssets />
            <Parameters />
            <WriteCC/>
        </div>
    );
    }

export default UserOverview;

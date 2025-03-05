import { NavLink } from "react-router-dom";

function RecentLibraries(){
    return(
        <div className="w-full py-1 mt-6 bg-surface-a10 text-white rounded-lg shadow-[0_0_1px_1px] shadow-primary-a0">
            <div className="px-8">
                <div className="flex my-4">
                    <i className="fa-solid fa-landmark my-auto"></i>
                    <p className="font-medium mx-2">Recent Libraries</p> 
                </div>
            </div>
            <hr className="border-surface-a20"/>
            <div className="px-8">
                <ul className="">
                    {["Library", "Library", "Library"].map(s => s.slice(0, 60) + (s.length > 60 ? "..." : "")).map((item, index) => (
                    <li key={item}>
                        <div className="flex justify-between">
                            <NavLink to="#" className="flex my-4">
                                <div className="flex text-surface-a50 hover:text-white transition overflow-ellipsis">
                                    <i className="fa-solid fa-inbox my-auto text-lg"></i>
                                    <p className="mx-3">{item} {index}</p>
                                </div>
                            </NavLink> 
                            <i className="fa-solid fa-ellipsis text-surface-a50 hover:text-white transition overflow-ellipsis my-auto"></i>
                        </div>
                        {index < 2 && <hr className="border-gray-700"/>}
                    </li>
                    ))}
                </ul>
                <button type="submit" className="shadow-[0_0_1px_1px] shadow-primary-a0 hover:bg-primary-a0 transition text-white font-medium py-1 px-4 rounded-full cursor-pointer my-4">New <i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    );
}

export default RecentLibraries

import { NavLink } from "react-router-dom";

function RecentLibraries(){
    return(
        <div className="w-full bg-surface-a10 text-white rounded-lg shadow-[0_0_1px_1px] shadow-primary-a0 fixed width-inherit mt-122">
            <div className="px-8">
                <p className="my-5 font-medium">Recent Libraries</p> 
                <hr className="border-gray-700"/>
                <div>
                    <ul className="">
                      {["Library", "Library", "Library"].map(s => s.slice(0, 60) + (s.length > 60 ? "..." : "")).map((item, index) => (
                        <li key={item}>
                            <div className="flex justify-between">

                            </div>
                            <NavLink to="#" className="flex my-4">
                                <div className="flex text-surface-a50 hover:text-white transition overflow-ellipsis">
                                    <i className="fa-solid fa-inbox my-auto text-lg"></i>
                                    <p className="mx-3">{item} {index}</p>
                                </div>
                            </NavLink> 
                            <i className="fa-solid fa-ellipsis text-surface-a50 hover:text-white transition overflow-ellipsis"></i>
                            {index < 2 && <hr className="border-gray-700"/>}
                        </li>
                      ))}
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default RecentLibraries

import { NavLink } from "react-router-dom";

function News(){
    return(
        <div className="w-full bg-surface-a10 text-white rounded-lg shadow-[0_0_1px_1px] shadow-primary-a0 fixed width-inherit mt-100">
            <div className="px-8">
                <p className="my-3 font-medium">News</p> 
                <hr className="border-gray-700"/>
                <div>
                    <ul className="">
                      {["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"].map(s => s.slice(0, 60) + (s.length > 60 ? "..." : "")).map((item, index) => (
                        <li key={item} className="text-sm text-center">
                            <NavLink to="#" className="flex my-4">
                                <p className="mx-2 text-surface-a50 hover:text-white transition overflow-ellipsis">{item}</p>
                            </NavLink> 
                            {index < 2 && <hr className="border-gray-700"/>}
                        </li>
                      ))}
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default News

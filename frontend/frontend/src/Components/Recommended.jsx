import { NavLink } from "react-router-dom";
import image from "../assets/cats/cat_pfp_4.jpg"

function Recommended(){
    return(
        <div className="w-full bg-surface-a10 text-white rounded-lg shadow-[0_0_1px_1px] shadow-primary-a0 fixed width-inherit">
            <div className="px-8">
                <p className="my-3 font-medium">Recommended</p> 
                <hr className="border-gray-700"/>
                <div>
                    <ul className="">
                      {["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"].map(s => s.slice(0, 50) + "...").map((item, index) => (
                        <li key={item} className="text-sm">
                            <NavLink to="#" className="flex my-6">
                                <img src={image} alt="profile picture" className="w-10 h-10 rounded-full shadow-[0_0_1px_1px] shadow-primary-a0"/>
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

export default Recommended

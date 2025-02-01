import { NavLink } from "react-router-dom";
import pfp from "../assets/cats/cat_pfp_6.jpg"
import image from "../assets/backgrounds/mars.jpg" 

function Post(){
    return(
        <div className="w-full bg-surface-a10 rounded-lg shadow-[0_0_1px_1px] shadow-primary-a0 mt-6">
            <div className="mx-8 pt-6">
                <div className="flex justify-between">
                    <NavLink to="#" className="flex">
                        <img src={pfp} alt="profile picture" className="w-12 h-12 rounded-full shadow-[0_0_1px_1px] shadow-primary-a0"/>
                        <p className="my-auto ml-4 hover:text-primary-a0 transition">Vasya Pupkin</p>
                    </NavLink>
                    <div className="text-right">
                        <i className="fa-solid fa-ellipsis text-white"></i>
                        <p className="text-surface-a40 text-sm">1 day ago</p>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-surface-a20"/>
            <div className="mx-8 pb-6">
                <div>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante et mauris consequat placerat at ac elit. Etiam convallis.</p>
                    <img src={image} alt="post image" className="mt-6 rounded-md"/>
                </div>
                <div className="mt-6 flex justify-between">
                    <div className="flex">
                        <i className="fa-regular fa-heart text-white text-xl"></i>
                        <p className="text-white text-sm font-medium ml-2">1.2k</p>
                        <i className="fa-regular fa-comment text-white text-xl ml-4"></i>
                        <i className="fa-regular fa-paper-plane text-white text-xl ml-4"></i>
                    </div>
                    <i className="fa-regular fa-bookmark text-white text-xl"></i>
                </div>
            </div>
        </div>
    );
}

export default Post;

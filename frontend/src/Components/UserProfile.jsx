import image from "../assets/cats/cat_pfp_1.jpg"
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const access_decoded = jwtDecode(Cookies.get("access_token"));
const refresh_decoded = jwtDecode(Cookies.get("refresh_token"));

console.log("access: ", access_decoded)
console.log("refresh: ", refresh_decoded)

function UserProfile(){
    return(
        <div className="tile">
            <div className="mx-8 mt-6">
                <div className="flex">
                    <img
                    src={image}
                    alt="profile picture"
                    className="w-24 h-24 rounded-full  shadow-primary-a0"
                    />
                    <div className="ml-4 my-auto">
                        <div className="flex">
                            <p className="font-bold">Pupa Lupa</p>
                            <p className="mx-2 text-gray-700">/</p>
                            <p className="text-primary-a10">@cyber_pelmen</p>
                            <i className="fa-solid fa-pen-to-square mx-2 my-auto text-sm text-surface-a40 hover:text-white transition"></i>
                        </div>
                        <p className="mt-1  text-surface-a40 hover:text-white transition">Data Scientist</p>
                    </div>
                </div>
            </div>
            <hr className="text-gray-700 mt-8"></hr>
            <div className="mx-8 my-4">
                <div className="flex">
                    <p className="text-sm">My Posts</p> 
                    <p className="text-sm mx-8 text-surface-a40 hover:text-white transition">Saved Posts</p> 
                    <p className="text-sm text-surface-a40 hover:text-white transition">Settings</p> 
                </div>
            </div>
        </div>
    )
}

export default UserProfile

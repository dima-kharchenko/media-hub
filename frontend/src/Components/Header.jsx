import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Header(){
    const navigate = useNavigate()
    const logout = () => {
        Cookies.remove("access_token") 
        Cookies.remove("refresh_token") 
        navigate("/login")
    }

    const dropdownItems = ['Profile', 'Friends', 'Settings', 'Logout']
    const dropdownIcons = ['fa-regular fa-user', 'fa-solid fa-user-group', 'fa-solid fa-gear', 'fa-solid fa-right-from-bracket']

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const buttonRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <>
        <nav className="bg-surface-a10 border-b-1 border-primary-a0 fixed top-0 w-full z-50">
            <div className="px-5 flex flex-wrap items-center justify-between mx-auto h-12"> 
                <Link to="https://github.com/dima-kharchenko/media-hub"> {/* logo link */}
                    <i className="fa-brands fa-github text-3xl text-white"></i>
                </Link>
                <form className="flex items-center max-w-sm w-80">   
                    <div className="relative w-full">
                        <input type="text" id="simple-search" style={{fontFamily:"Arial, FontAwesome"}} className="bg-surface-a20 h-8 text-white placeholder-neutral-400 rounded-full block w-full p-3  shadow-[0_0_1px_1px] shadow-primary-a0 hover:shadow-[0_0_5px_1px] focus:shadow-[0_0_5px_1px] duration-150 focus:outline-none selection:bg-surface-a50" placeholder=" &#xF002; Search" />
                    </div>
                </form>
                <i ref={buttonRef} className="fa-regular fa-user text-2xl text-white" onClick={() => setDropdownOpen((p) => !p)}></i>
                <div ref={dropdownRef}
                    className={`absolute right-2 top-14 shadow-[0_0_1px_1px] shadow-primary-a0 rounded-lg bg-surface-a10 transition ${dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                    <ul className="text-surface-a50 py-2">
                    {dropdownItems.map((item, index) =>
                        <li key={index} className={`px-6 py-2 text-sm  hover:text-white transition`} onClick={item === "Logout" ? logout : null}>
                        <Link to={item === "Logout" ? "" : `/${item.toLowerCase()}`}>
                        <i className={`${dropdownIcons[index]} pr-2`}></i>
                        {item} 
                        </Link>
                        </li>
                    )}
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Header

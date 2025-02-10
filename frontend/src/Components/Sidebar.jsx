import React from "react";
import { NavLink } from 'react-router-dom';
import image from "../assets/cats/cat_pfp_1.jpg"

const Sidebar = () => {
  return (
    <nav className="bg-surface-a10 text-white rounded-lg shadow-[0_0_1px_1px] shadow-primary-a0" >
      {/* Profile */}
      <div className="px-8">
        <div className="relative flex flex-col items-start pt-11">
          <img
            src={image}
            alt="profile picture"
            className="w-16 h-16 rounded-full shadow-[0_0_1px_1px] shadow-primary-a0"
          />
          <h2 className="font-medium text-lg mt-6">Pupa Lupa</h2>
          <p className="text-sm text-surface-a40">Data Scientist</p>
        </div>
      {/* Menu */}
      <ul className="flex flex-col text-sm mt-10 pb-4">
        {["", "Profile", "Messages", "Notifications", "Saved"].map((item, index) => (
          <li key={item}>
            <NavLink to={`/${item.toLowerCase()}`} className="block py-3 text-surface-a50 hover:text-white transition">
            <i className={`${["fa-solid fa-house", "fa-regular fa-user", "fa-regular fa-paper-plane", "fa-regular fa-bell", "fa-regular fa-bookmark"][index]} pr-2`}></i>
            {item !== "" ? item : "Home"}
            </NavLink>
            {index < 4 && <hr className="border-gray-700" />}
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Sidebar;

import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="w-[18.125rem] h-[30.3125rem] bg-surface-a10 text-white p-4 rounded-2xl shadow-[0_0_1px_1px] shadow-primary-a0 mt-1 ">
      {/* Profile */}
      <div className="relative mb-6 px-4">
        <div className="relative flex flex-col items-start pl-4 pt-12">
          <img
            src=""
            alt="ProfileImage"
            className="w-16 h-16 rounded-full border-2 border-gray-600 mb-2"
          />
          <h2 className="font-semibold text-lg">Pupa Lupa</h2>
          <p className="text-sm text-surface-a40">Data Scientist</p>
        </div>
      </div>

      {/* Menu */}
      <ul className="flex flex-col text-sm">
        {["Home", "Profile", "Messages", "Notifications", "Saved"].map((item, index) => (
          <li key={item} className="px-4">
            <a className="block py-3 text-[#8B8B8B] hover:text-[#FFFFFF] transition">
            <Link to={`/${item.toLowerCase()}`}> {item} </Link>
            </a>
            {index < 4 && <hr className="border-gray-700" />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
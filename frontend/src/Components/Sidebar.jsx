import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-surface-a10 text-white p-4  flex flex-col">
      {/* Profile */}
      <div className="text-center mb-6 items-ce">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-16 h-16 rounded-full mx-auto"
        />
        <h2 className="mt-2 font-semibold">Pupa Lupa</h2>
        <p className="text-sm text-gray-400">Data Scientist</p>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-2">
        <a href="#" className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
          Home
        </a>
        <a href="#" className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
          Profile
        </a>
        <a href="#" className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
          Messages
        </a>
        <a href="#" className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
          Notifications
        </a>
        <a href="#" className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
          Saved
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

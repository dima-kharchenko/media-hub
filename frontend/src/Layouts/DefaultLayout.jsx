import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

function DefaultLayout({ children }) {
  return (
    <div>
       <Navbar/> 
       <Sidebar />                {/* элементы для постоянного отображения */}
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;

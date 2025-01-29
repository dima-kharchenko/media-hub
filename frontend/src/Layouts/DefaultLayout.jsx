import React from 'react';
import Navbar from '../Components/Navbar';

function DefaultLayout({ children }) {
  return (
    <div>
       <Navbar/>                 {/*элементы для постоянного отображения */}
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;

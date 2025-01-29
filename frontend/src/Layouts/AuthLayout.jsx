
import React from 'react';
import Login from '../Pages/Login';
function AuthLayout({ children }) {
  return (
    <div className='bg-surface-a0'>
      <Login></Login>
      <div>{children}</div>         {/*дефолтный код страницы, без 
                                        разрешения использовать defaultlayout*/}
    </div>
  );
}

export default AuthLayout;

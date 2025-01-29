
import React from 'react';

function AuthLayout({ children }) {
  return (
    <div>
      <div>{children}</div>         {/*дефолтный код страницы, без 
                                        разрешения использовать defaultlayout*/}
    </div>
  );
}

export default AuthLayout;

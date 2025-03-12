import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import page_routes from './Layouts/page_routes';
import DefaultLayout from './Layouts/DefaultLayout';
import AuthLayout from './Layouts/AuthLayout';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <>
     <Router>
      <Routes>
      {page_routes.map(({ path, component: Component, layout, protected: isProtected }, index) => {
          const Layout = (() => {
            switch (layout) {
              case 'default':
                return DefaultLayout;
              case 'auth':
                return AuthLayout;
              default:
                return layout || React.Fragment;
            }
          })();  // choose your layout
          const Element = (
            <Layout>
              <Component />
            </Layout>
          );
          return (
            <Route
              key={index}
              path={path}
              element={isProtected ? <ProtectedRoute>{Element}</ProtectedRoute> : Element}
            />
          );
        })}
      </Routes>
    </Router>
    </>
  )
}


export default App

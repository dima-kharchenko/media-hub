import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import page_routes from './Layouts/page_routes';
import DefaultLayout from './Layouts/DefaultLayout';
import AuthLayout from './Layouts/AuthLayout';



function App() {
  return (
    <>
     <Router>
      <Routes>
      {page_routes.map(({ path, component: Component, layout }, index) => {
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
          return (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
    </>
  )
}

export default App

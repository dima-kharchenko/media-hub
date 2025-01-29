import './App.css'
<<<<<<< HEAD
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Abouts';
import DefaultLayout from './Layouts/DefaultLayout';
import AuthLayout from './Layouts/AuthLayout';
import NotFound from './Pages/NotFound';


>>>>>>> 5ba1146ae296a52544076d6cdae8e846dd0cda20

function App() {
  return (
    <>
<<<<<<< HEAD
      <div className="bg-surface-a0">
      <Login />
      </div>
=======
    <Router>
      <Routes>
        {/* HOME PAGE WITH DEFAULT LAYOUT PERMS */}
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        
        {/* ABOUT PAGE WITH DEFAULT LAYOUT PERMS */}
        <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />

        {/* 404 PAGE WITHOUT LAYOUT PERMS */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
>>>>>>> 5ba1146ae296a52544076d6cdae8e846dd0cda20
    </>
  )
}

export default App

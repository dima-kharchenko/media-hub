import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Abouts';
import DefaultLayout from './Layouts/DefaultLayout';
import AuthLayout from './Layouts/AuthLayout';
import NotFound from './Pages/NotFound';



function App() {
  return (
    <>
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
    </>
  )
}

export default App

import './App.css'
import Login from './Pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Abouts';
import DefaultLayout from './Layouts/DefaultLayout';
import NotFound from './Pages/NotFound';



function App() {
  return (
    <>
      <div className="bg-surface-a0">
      <Login />
      </div>
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

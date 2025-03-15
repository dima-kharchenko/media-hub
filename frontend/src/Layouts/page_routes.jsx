import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile"

const page_routes = [
  { path: '/login', page: Login, layout: 'auth' },
  { path: '/signup', page: SignUp, layout: 'auth' },
  { path: '/', page: Home, layout: 'default', protected: true },
  { path: '/profile', page: Profile, layout: 'profile', protected: true },
  { path: '/about', page: About, layout: 'default', protected: true },
  { path: '*', page: NotFound, layout: '' },  
  
];

export default page_routes;

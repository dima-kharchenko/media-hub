import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const page_routes = [
  { path: '/login', component: Login, layout: 'auth' },
  { path: '/signup', component: SignUp, layout: 'auth' },
  { path: '/', component: Home, layout: 'default', protected: true },
  { path: '/about', component: About, layout: 'default', protected: true },
  { path: '*', component: NotFound, layout: '' },  
  
];

export default page_routes;

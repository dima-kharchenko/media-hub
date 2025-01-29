
import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";
import Sidebar from "../Components/Sidebar";
import Login from "../Pages/Login";

//to add new routes
const page_routes = [
  { path: '/', component: Home, layout: 'default' },
  { path: '/login', component: Login, layout: 'auth' },
  { path: '/', component: Sidebar, layout: 'default' },
  { path: '/about', component: About, layout: 'default' },
  { path: '*', component: NotFound, layout: '' },  
  
];

export default page_routes;
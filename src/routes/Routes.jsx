import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Coffees from '../pages/Coffees';


const routes = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    children: [
        {
          path:'/',
          element: <Home/>,
          children:[],
        },
        {
          path:'/coffee',
          element: <Coffees />
        },
        {
          path:'/dashboard',
          element: <Dashboard/>
        }
    ],
  },

])

export default routes ; 
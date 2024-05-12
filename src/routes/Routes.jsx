import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/job/:id',
            element: <JobDetails></JobDetails>,
            loader: ({params}) =>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
      ]
    },
  ]);


  export default router;
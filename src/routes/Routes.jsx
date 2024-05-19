import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoutes from "./PrivateRoutes";
import AppliedJobs from "../pages/AppliedJobs";
import Blogs from "../pages/Blogs";
import BlogOne from "../pages/BlogOne";
import BlogTwo from "../pages/BlogTwo";
import AllJobs from "../pages/AllJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
            loader: ({params}) =>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
            path: '/update/:id',
            element: <PrivateRoutes><UpdateJob></UpdateJob></PrivateRoutes>,
            loader: ({params}) =>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
            path: '/add-job',
            element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>,
            
        },
        {
            path: '/my-jobs',
            element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>,
            
        },
        {
            path: '/applied-jobs',
            element: <PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>,
            
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/blog-one',
            element:<BlogOne></BlogOne>
        },
        {
            path:'/blog-two',
            element:<BlogTwo></BlogTwo>
        },
        {
            path:'/all-jobs',
            element:<AllJobs></AllJobs>
        }
      ]
    },
  ]);


  export default router;
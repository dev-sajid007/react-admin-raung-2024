import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/layouts/GuestLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import CategoryList from "./views/Category/CategoryList.jsx";
import CategoryCreate from "./views/Category/CategoryCreate.jsx";
import CategoryEdit from "./views/Category/CategoryEdit.jsx";


const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/category/list',
                element: <CategoryList/>
            },
            {
                path:'/category/create',
                element: <CategoryCreate/>
            },
            {
                path:'/category/:id',
                element: <CategoryEdit/>
            },

        ]

    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
        ]

    }
]);


export default router;

import Main from "../../Layout/Main";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import Home from "../../Page/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/',
                    element:<Home></Home>
                },
            ]
        }
])

export default router
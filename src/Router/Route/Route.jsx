import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Component/Home/Home";
import Register from "../../Component/Auth/Register/Register";
import Login from "../../Component/Auth/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<></>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
        ,
        {
          path:'/register',
          element:<Register></Register>
        }
        ,
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);
export default router;
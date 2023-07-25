import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Component/Home/Home";
import Register from "../../Component/Auth/Register/Register";
import Login from "../../Component/Auth/Login/Login";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import AdminHome from "../../Layout/Dashboard/Component/Admin/AdminHome";
import ManageUser from "../../Layout/Dashboard/Component/Admin/ManageUser";
import MyPhotography from "../../Layout/Dashboard/Component/User/MyPhotography";
import UserHome from "../../Layout/Dashboard/Component/User/UserHome";
import SelectedPhoto from "../../Layout/Dashboard/Component/User/SelectedPhoto";
import BuyingPhoto from "../../Layout/Dashboard/Component/User/BuyingPhoto";
import PaymentHistory from "../../Layout/Dashboard/Component/User/PaymentHistory";
import AddPhotography from "../../Layout/Dashboard/Component/User/AddPhotography";
import Photography from "../../Component/Photography/Photography";
import ManagePhotography from "../../Layout/Dashboard/Component/Admin/ManagePhotography";

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
          path:'/photography',
          element:<Photography></Photography>
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
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        // this is admin dashboard route
        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'manageUsers',
          element:<ManageUser></ManageUser>
        },
        {
          path:'managePhotography',
          element:<ManagePhotography></ManagePhotography>
        },
        //this is user dashboard route
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'selectedPhoto',
          element:<SelectedPhoto></SelectedPhoto>
        },
        {
          path:'selectedPhoto',
          element:<BuyingPhoto></BuyingPhoto>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'addPhotography',
          element:<AddPhotography></AddPhotography>
        },
        {
          path:'myPhoto',
          element:<MyPhotography></MyPhotography>
        },
      ]
    }
  ]);
export default router;
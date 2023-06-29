import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Component/Home/Home";

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
      ]
    },
  ]);
export default router;
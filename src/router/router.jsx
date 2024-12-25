import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/Home";
import Addfood from "../pages/Addfood";
import Allfood from "../pages/Allfood";
import Singlefood from "../pages/Singlefood";
import Gallery from "../pages/Gallery";
import Myfoodpage from "../pages/Myfoodpage";
import Update from "../components/Update";
import Foodpurchase from "../pages/Foodpurchase";
import Myorders from "../pages/Myorders";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../layouts/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"addfood",
                element:<PrivateRoute><Addfood/></PrivateRoute>
            },
            {
                path:"allfood",
                element:<Allfood/>
            },
            {
                path:"singlefood/:id",
                element:<Singlefood/>,
                loader:({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
            },
            {
                path:"gallery",
                element:<Gallery/>,
            },
            {
                path:"login",
                element:<Login/>,
            },
            {
                path:"register",
                element:<Register/>,
            },
            {
                path:"myfoods",
                element:<PrivateRoute><Myfoodpage/></PrivateRoute>,
            },
            {
                path:"ordersfood",
                element:<PrivateRoute><Myorders/></PrivateRoute>,
            },
            {
                path:"update/:id",
                element:<PrivateRoute><Update/></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
            },
            {
                path:"foodpurchase/:id",
                element:<PrivateRoute><Foodpurchase/></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
            }
        ]
    },
]);
export default router;
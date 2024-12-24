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
                element:<Addfood/>
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
                element:<Myfoodpage/>,
            },
            {
                path:"ordersfood",
                element:<Myorders/>,
            },
            {
                path:"update/:id",
                element:<Update/>,
                loader:({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
            },
            {
                path:"foodpurchase/:id",
                element:<Foodpurchase/>,
                loader:({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
            }
        ]
    },
]);
export default router;
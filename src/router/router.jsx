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
                path:"myfoods",
                element:<Myfoodpage/>,
            }
        ]
    },
]);
export default router;
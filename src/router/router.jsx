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
import { Helmet } from "react-helmet";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>Home | TastyTales</title>
                        </Helmet>
                        <Home />
                    </>
                ),
                loader: () => fetch('https://assignment-11-server-eta-six.vercel.app/top6mostpurchased')
            },
            {
                path: "addfood",
                element: (
                    <>
                        <Helmet>
                            <title>Add Food | TastyTales</title></Helmet>
                        <PrivateRoute><Addfood /></PrivateRoute></>)
            },
            {
                path: "allfood",
                element: (<>
                    <Helmet>
                        <title>All Foods | TastyTales</title></Helmet>
                    <Allfood /></>)
            },
            {
                path: "singlefood/:id",
                element: (<>
                    <Helmet><title>Food Details | TastyTales</title></Helmet>
                    <Singlefood /></>),
                loader: ({ params }) => fetch(`https://assignment-11-server-eta-six.vercel.app/foods/${params.id}`)
            },
            {
                path: "gallery",
                element: (<>
                    <Helmet><title>Gallery | TastyTales</title></Helmet>
                    <Gallery /></>),
            },
            {
                path: "login",
                element: (<>
                    <Helmet><title>Login | TastyTales</title></Helmet>
                    <Login /></>),
            },
            {
                path: "register",
                element: (<>
                    <Helmet>
                        <title>Register | Your Website</title>
                        <meta name="description" content="Sign up for a new account and start enjoying our food services." />
                    </Helmet>
                    <Register />
                </>),
            },
            {
                path: "myfoods",
                element: (<>
                    <Helmet>
                        <title>My Foods | Your Website</title>
                        <meta name="description" content="Manage your own food items and edit or remove them from your personal menu." />
                    </Helmet>
                    <PrivateRoute><Myfoodpage /></PrivateRoute>
                </>),
            },
            {
                path: "ordersfood",
                element: (
                    <>
                        <Helmet>
                            <title>My Orders | Your Website</title>
                            <meta name="description" content="View your food orders and track their status on our platform." />
                        </Helmet>
                        <PrivateRoute><Myorders /></PrivateRoute>
                    </>
                ),
            },
            {
                path: "update/:id",
                element:(
                    <>
                        <Helmet>
                            <title>Update Food | Your Website</title>
                            <meta name="description" content="Update your food details and make sure your menu stays current and exciting!" />
                        </Helmet>
                        <PrivateRoute><Update /></PrivateRoute>
                    </>
                ),
                loader: ({ params }) => fetch(`https://assignment-11-server-eta-six.vercel.app/foods/${params.id}`)
            },
            {
                path: "foodpurchase/:id",
                element:  (
                    <>
                        <Helmet>
                            <title>Food Purchase | Your Website</title>
                            <meta name="description" content="Purchase this food item and enjoy a delicious meal delivered to your doorstep." />
                        </Helmet>
                        <PrivateRoute><Foodpurchase /></PrivateRoute>
                    </>
                )
                // loader:({params})=> fetch(`https://assignment-11-server-eta-six.vercel.app/foods/${params.id}`)
            }
        ]
    },
]);
export default router;
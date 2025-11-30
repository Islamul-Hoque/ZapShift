import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import axios from "axios";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        // HydrateFallback: <p>Loading</p>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'rider',
                element: <PrivateRoute> <Rider/> </PrivateRoute>
            },
            {
                path: 'send-parcel',
                loader: ()=> axios('/servicesCenters.json').then(res => res.data),
                element: <PrivateRoute> <SendParcel/> </PrivateRoute>
            },
            {
                path: '/coverage',
                Component: Coverage,
                loader: ()=> axios('/servicesCenters.json').then(res => res.data)
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children: [
        {
            path: 'my-parcels', 
            Component: MyParcels
        },
        {
            path: 'payment/:parcelId',
            Component: Payment
        },
    ]
    }
])
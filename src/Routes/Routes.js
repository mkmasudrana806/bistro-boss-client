import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shared pages/menu/menu/menuCategory/Menu";
import Ordered from "../pages/shared pages/order/ordered/Ordered";
import Login from "../pages/login/Login";
import Register from "../register/Register";
import Secret from "./Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/dashboad/my cart/MyCart";
import AllUsers from "../pages/dashboad/all users/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Ordered></Ordered>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      { path: "mycart", element: <MyCart></MyCart> },
      { path: "alluser", element: <AllUsers></AllUsers> },
    ],
  },
]);

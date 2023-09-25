import React, { lazy, Suspense } from "react";
import AppLayout from "./App/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About/About";
import Body from "./components/Body/Body.js";
import Error from "./Pages/Error/Error";
import ResMenu from "./components/Restaurant/ResMenu";
import Cart from "./components/Cart/Cart";
import Auth from './components/Auth/Auth'

// const ResMenu = lazy(() => import("./components/Restaurant/ResMenu"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/restaurant/:resId",
          element: <ResMenu />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
      errorElement: <Error />,
      

    },{
      path:"/login",
      element:<Auth />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

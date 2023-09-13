import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Provider } from "react-redux";
import appStore from "../Redux/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </Provider>
  );
};

export default AppLayout;

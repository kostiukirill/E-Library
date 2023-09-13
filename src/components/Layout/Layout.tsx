import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./App-Router/AppRouter";

const Layout = (): React.ReactElement => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default Layout;

import React from "react";
import Header from "./header/header";
import { Footer } from "./footer/footer";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
export const MainLayout = () => {
  if (!Cookies.get("server-token")) return <Navigate to="/" replace />;
  return (
    <div className="flex flex-col justify-between">
      <div>
        <header>
          <Header />
        </header>
        <main className="container">
          {" "}
          <Outlet />{" "}
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

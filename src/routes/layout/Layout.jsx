import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./layout.scss";

import AuthContext from "../../Context/AuthContext";

import { listData } from "../../Lib/dummydata";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Layout() {
  const data = listData; // Assuming you might use this data somewhere

  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  // Redirect to login if there is no current user
  useEffect(() => {
    if (!currentUser) {
      <Navigate to="/login" replace />;
    }
  }, [currentUser]);

  // Render the layout only if the user is authenticated
  return currentUser ? (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}

export { Layout, RequireAuth };

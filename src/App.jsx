import React, { useEffect, useState } from "react";
import { onAuthStateChange } from "./Components/Supabase/Auth"; // Adjust the path as needed
import SignOut from "./Components/Supabase/SignOut";
import HomePage from "./routes/HomePage";
import { Layout, RequireAuth } from "./routes/layout/Layout";
import ListPage from "./routes/ListPage/ListPage";
import SinglePage from "./routes/Single/SinglePage";
import Profile from "../src/Components/Profile/Profile";
import Login from "./routes/Login/Login";
import "./index.css";
import Register from "../src/routes/Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import AuthContext from "./Context/AuthContext";
import NewPostPage from "./routes/NewPost/NewPostPage";
import {
  profilePageLoader,
  singlePageLoader,
  listPageLoader,
  fullMapLoader,
} from "./Lib/loaders";
import { SocketContextProvider } from "./Context/SocketContext";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact";
import Sidebar from "./Components/ADMIN/Sidebar";
import Overview from "./Components/ADMIN/Overview";
import Resorts from "./Components/ADMIN/Resorts";
import Users from "./Components/ADMIN/Users";
import { Outlet } from "react-router-dom";
import AnalyticsPage from "./Components/AnalyticsPage";
import SalesPage from "./Components/ADMIN/SalesPage";
import SettingsPage from "./Components/SettingsPage";
import FullMap from "./Components/FullMap";
import ExpolrePalghar from "./Components/Palghar/ExpolrePalghar";
import TemplesList from "./Components/Details/Temple";
import TempleDetail from "./Components/Details/TempleDetail";
import BeachesList from "./Components/Details/Beach";

import CampsiteMainPage from "./Components/Details/Campsite";
import BeachDetails from "./Components/Details/BeachDetails";
import WaterParksComponent from "./Components/Details/Waterpark";
import Night from "./Components/Details/Night";
import Prewedding from "./Components/Details/Prewedding";
import Wines from "./Components/Details/Wines";

import Paragliding from "./Components/Details/Paragliding";
const AdminLayout = () => {
  return (
    <div className="flex bg-gray-900 text-gray-100 overflow-hidden">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      {/* Main Content */}
      <Sidebar />
      <div className="relative z-10 w-full ">
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
};

const App = () => {
  const [session, setSession] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const updateUser = (data) => {
    console.log("!!!!!", data);
    setCurrentUser(data);
  };

  useEffect(() => {
    const user = !!localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;

    if (user) {
      console.log("?????", user);
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      console.log("Setting user in localStorage:", currentUser); // Debugging line
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  useEffect(() => {
    const { data: subscription } = onAuthStateChange((event, session) => {
      console.log("Auth event:", event);
      setSession(session);
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const router = createBrowserRouter([
    // Public Routes
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage />, loader: listPageLoader },
        { path: "/list", element: <ListPage />, loader: listPageLoader },
        {
          path: "/list/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        { path: "/temple", element: <TemplesList /> },
        { path: "/waterpark", element: <WaterParksComponent /> },
        { path: "/wine", element: <Wines /> },
        { path: "/paragliding", element: <Paragliding /> },
        { path: "/beach", element: <BeachesList /> },
        { path: "/camp", element: <CampsiteMainPage /> },
        { path: "/night", element: <Night /> },
        { path: "/prewedding", element: <Prewedding /> },
        { path: "/beach/:id", element: <BeachDetails /> },
        { path: "/temple/:id", element: <TempleDetail /> },
        { path: "/login", element: <Login /> },

        { path: "/map", element: <FullMap />, loader: fullMapLoader },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/register", element: <Register /> },
        { path: "/explore", element: <ExpolrePalghar /> },
      ],
    },

    // Admin Routes
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        // { index: true, element: <Overview /> }, // Default child route for `/admin`
        { index: true, element: <Resorts /> },

        { path: "users", element: <Users /> },
        { path: "sales", element: <SalesPage /> },
        { path: "analytics", element: <AnalyticsPage /> },
        { path: "settings", element: <SettingsPage /> },
      ],
    },

    // Authenticated Routes
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        { path: "/profile", element: <Profile />, loader: profilePageLoader },
        { path: "/profile/update", element: <ProfileUpdatePage /> },
        { path: "/profile/add", element: <NewPostPage /> },
      ],
    },
  ]);

  console.log("App component rendering");

  return (
    <AuthContext.Provider
      value={{ updateUser, currentUser, session, setCurrentUser, setSession }}
    >
      <SocketContextProvider>
        <div>
          {session ? (
            <>
              <h2>Welcome, {session.user.email}</h2>
              <SignOut />
            </>
          ) : null}
          <RouterProvider router={router} />
        </div>
      </SocketContextProvider>
    </AuthContext.Provider>
  );
};

export default App;

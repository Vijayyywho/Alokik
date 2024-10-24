import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { message } from "antd"; // Import the message component from Ant Design
import HomePage from "./routes/HomePage";
import "./index.css"; // or wherever your Tailwind styles are
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/Single/SinglePage";
import Profile from "./Components/Profile/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  // Show a success message when the user successfully logs in
  useEffect(() => {
    if (isAuthenticated && user) {
      message.success(`Welcome back, ${user.name}!`, 5); // Display success message for 5 seconds
    }
  }, [isAuthenticated, user]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

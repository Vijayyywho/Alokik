import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { message } from "antd";
import HomePage from "./routes/HomePage";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/Single/SinglePage";
import Profile from "./Components/Profile/Profile";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabase = createClient(
  "https://xeavgjmnzautfzxwxprx.supabase.co", // Replace with your Supabase project URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYXZnam1uemF1dGZ6eHd4cHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MzYwNTAsImV4cCI6MjA0NTQxMjA1MH0.Bc-dAAMPIs6adirJDu3nGlG22IwIM-5rUFJ-qA_GuD8" // Replace with your Supabase public key
);

function App() {
  const { loginWithRedirect, isAuthenticated, user, getIdTokenClaims } =
    useAuth0();

  // Show a success message when the user successfully logs in
  useEffect(() => {
    if (isAuthenticated && user) {
      message.success(`Welcome back, ${user.name}!`, 5);
    }
  }, [isAuthenticated, user]);

  // Sync Auth0 user with Supabase database
  useEffect(() => {
    const syncUserToSupabase = async () => {
      if (isAuthenticated && user) {
        try {
          // Get the Auth0 ID token for user authentication
          const token = await getIdTokenClaims();
          const { data, error } = await supabase.from("users").upsert({
            auth0_id: user.sub,
            email: user.email,
            name: user.name,
          });

          if (error) console.error("Error syncing with Supabase:", error);
        } catch (error) {
          console.error("Error fetching Auth0 token:", error);
        }
      }
    };

    syncUserToSupabase();
  }, [isAuthenticated, user, getIdTokenClaims]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

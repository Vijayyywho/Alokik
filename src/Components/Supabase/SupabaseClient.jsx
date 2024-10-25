import { createClient } from "@supabase/supabase-js";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const supabase = createClient(
  "https://xeavgjmnzautfzxwxprx.supabase.co", // Replace with your Supabase project URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYXZnam1uemF1dGZ6eHd4cHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MzYwNTAsImV4cCI6MjA0NTQxMjA1MH0.Bc-dAAMPIs6adirJDu3nGlG22IwIM-5rUFJ-qA_GuD8" // Replace with your Supabase public key
);

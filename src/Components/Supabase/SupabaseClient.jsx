// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase project URL and public API key
const supabaseUrl = "https://xeavgjmnzautfzxwxprx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYXZnam1uemF1dGZ6eHd4cHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4MzYwNTAsImV4cCI6MjA0NTQxMjA1MH0.Bc-dAAMPIs6adirJDu3nGlG22IwIM-5rUFJ-qA_GuD8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

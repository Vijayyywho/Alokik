// src/auth.js
import { supabase } from "./supabaseClient";

//  Sign Up
export const signUp = async (email, pass, username) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    pass,
  });

  if (error) {
    return { user: null, error };
  }

  // If sign up is successful, you can also add the username to your users table
  const { data, error: insertError } = await supabase
    .from("users") // Ensure this is the correct table name
    .insert([{ id: user.id, email, username }]); // Adjust the fields accordingly

  if (insertError) {
    return { user: null, error: insertError };
  }

  return { user, error: null };
};

// Sign In
export const signIn = async (email, pass) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    pass,
  });

  return { user: data.user, error }; // Make sure to return the user correctly
};
// Sign Out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return error;
};

// Get User
export const getUser = () => {
  return supabase.auth.user();
};

// Subscribe to Auth State Changes
export const onAuthStateChange = (callback) => {
  const { data: subscription } = supabase.auth.onAuthStateChange(
    (event, session) => {
      callback(event, session);
    }
  );
  return subscription; // Return the subscription object
};

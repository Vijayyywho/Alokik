import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  updateUser: () => null,
  currentUser: null,
  setCurrentUser: () => console.log("State not initiated."),
  session: null,
  seSession: () => console.log("State not initiated."),
});

export default AuthContext;

export const useAuth = () => useContext(AuthContext);

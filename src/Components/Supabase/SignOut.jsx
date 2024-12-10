// src/Components/SignOut.js
import { signOut } from "./Auth";

const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
    console.log("User signed out");
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;

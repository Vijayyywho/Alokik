import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../..Context/AuthContext"; // Adjust according to your project structure
import "./Homee.scss";

const NewHomee = () => {
  const { currentUser } = useContext(AuthContext); // Get the current user from context
  const [showLoginMessage, setShowLoginMessage] = useState(false); // State for showing the login message
  const navigate = useNavigate(); // Hook to redirect

  const handleListPropertyClick = () => {
    if (currentUser) {
      // Redirect to /profile/add if logged in
      navigate("/profile/add");
    } else {
      // Show login message if not logged in
      setShowLoginMessage(true);
      setTimeout(() => {
        setShowLoginMessage(false); // Hide the message after 3 seconds
      }, 3000);
    }
  };

  return (
    <div className="homee">
      <div className="main">
        <h1>Wanna List Your Own Resort?</h1>
        <p>List a Property and boost your sales.</p>
        <div className="search">
          <button className="btn" onClick={handleListPropertyClick}>
            Add Property
          </button>
        </div>
      </div>

      {/* Login Message */}
      {showLoginMessage && !currentUser && (
        <div
          className="fixed top-0 left-0 right-0 p-4 bg-red-500 text-white text-center"
          style={{ zIndex: 9999 }}
        >
          Please log in to list a property!
        </div>
      )}
    </div>
  );
};

export default NewHomee;

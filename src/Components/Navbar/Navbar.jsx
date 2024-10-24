import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Avatar, Modal } from "antd";
import {
  LoginOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Navbar() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [open, setOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control the modal

  // Function to show the logout confirmation modal
  const showLogoutModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle logout when confirmed
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    setIsModalVisible(false);
  };

  // Function to cancel the logout action
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Alokik</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>

      <div className="right">
        {isAuthenticated ? (
          <div
            className="user-profile"
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* Display user's profile picture or a default icon */}
            <Avatar
              src={user.picture}
              size={44}
              icon={!user.picture && <UserOutlined />}
              style={{ marginRight: "10px" }}
            />
            <span>Hello, {user.name}</span>
            <Button
              type="primary"
              size="large"
              style={{ marginLeft: "10px" }}
              onClick={showLogoutModal} // Show the confirmation modal on click
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="btns">
            <Button
              type="primary"
              size="large"
              icon={<LoginOutlined />}
              onClick={() => loginWithRedirect()}
              style={{ marginRight: "10px" }}
            >
              Sign In
            </Button>
            <Button
              type="default"
              size="large"
              icon={<UserAddOutlined />}
              onClick={() => alert("Sign Up Clicked")}
            >
              Sign Up
            </Button>
          </div>
        )}

        {/* Menu Icon for Mobile with onClick */}
        <div className="menuIcon" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="Menu Icon" />
        </div>

        {/* Mobile Menu Links */}
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          {!isAuthenticated && (
            <>
              <a href="/signin">Sign In</a>
              <a href="/signup">Sign Up</a>
            </>
          )}
        </div>

        {/* Logout Confirmation Modal */}
        <Modal
          title="Confirm Logout"
          visible={isModalVisible}
          onOk={handleLogout} // Confirm logout
          onCancel={handleCancel} // Cancel the logout
          okText="Logout"
          cancelText="Cancel"
        >
          <p>Are you sure you want to log out?</p>
        </Modal>
      </div>
    </nav>
  );
}

export default Navbar;

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Avatar, Badge } from "antd";
import {
  LoginOutlined,
  UserAddOutlined,
  UserOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import AuthContext from "../../Context/AuthContext";
import { useNotificationStore } from "../../Lib/notificationStore";
import "./Navbar.scss";

function Navbar() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) fetch();

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    setOpen(false); // Close the menu when an item is clicked
  };

  return (
    <nav className="bg-white shadow-lg w-full top-0 left-0 z-50 border">
      <div className="max-w-7xl mx-auto px-4 py-4 overflow-hidden flex justify-between items-center">
        <div className="left flex items-center space-x-6">
          <Link
            to="/"
            className="logo text-xl font-semibold flex items-center space-x-2"
          >
            <img src="/logo.png" alt="Logo" className="h-8" />
            <span>Alokik</span>
          </Link>
          <Link to="/list" className="text-lg hover:text-blue-500">
            Hotels & Resorts
          </Link>
          <Link to="/about" className="text-lg hover:text-blue-500">
            About Us
          </Link>
          <Link to="/explore" className="text-lg hover:text-blue-500">
            Explore Palghar
          </Link>
          <Link to="/contact" className="text-lg hover:text-blue-500">
            Contact
          </Link>
        </div>

        <div className="right flex items-center space-x-4">
          {currentUser && (
            <div className="user-profile hidden sm:flex items-center space-x-3">
              {number > 0 && (
                <Badge
                  count={number}
                  style={{
                    backgroundColor: "red",
                    marginRight: "8px",
                    marginTop: "5px",
                  }}
                >
                  <Avatar
                    src={currentUser.avatar || "/noavatar.jpg"}
                    size={44}
                    icon={!currentUser.avatar && <UserOutlined />}
                  />
                </Badge>
              )}
              {!number && (
                <Avatar
                  src={currentUser.avatar || "/noavatar.jpg"}
                  size={44}
                  icon={!currentUser.avatar && <UserOutlined />}
                />
              )}
              <span className="font-semibold">{currentUser.username}</span>
              <Link to="/profile">
                <Button type="default" size="middle">
                  Profile
                </Button>
              </Link>
            </div>
          )}
          {!currentUser && (
            <div className="btns flex space-x-3">
              <Link to="/login">
                <Button
                  style={{ backgroundColor: "black", color: "white" }}
                  size="large"
                  icon={<LoginOutlined />}
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button type="default" size="large" icon={<UserAddOutlined />}>
                  Sign Up
                </Button>
              </Link>
            </div>
          )}

          <div
            className="menuIcon cursor-pointer sm:hidden"
            onClick={() => setOpen(!open)}
          >
            <img src="/menu.png" alt="Menu Icon" />
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      {/* Mobile Side Menu */}
      <div
        className={`side-menu ${
          open ? "open" : ""
        } fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-50 flex justify-center items-center`}
        onClick={() => setOpen(false)}
      >
        <div
          className="menu-content absolute right-0 bg-white w-3/4 h-full py-4 px-6"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            to="/"
            className="block text-lg text-black hover:text-blue-500 py-3"
            onClick={() => handleClick("/")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-lg text-black hover:text-blue-500 py-3"
            onClick={() => handleClick("/about")}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-lg text-black hover:text-blue-500 py-3"
            onClick={() => handleClick("/contact")}
          >
            Contact
          </Link>
          <Link
            to="/agents"
            className="block text-lg text-black hover:text-blue-500 py-3"
            onClick={() => handleClick("/list")}
          >
            Hotels & Resorts
          </Link>

          {/* Show profile button if the user is authenticated */}
          {currentUser && (
            <Link to="/profile">
              <Button
                type="default"
                size="large"
                icon={<UserOutlined />}
                onClick={() => handleClick("/profile")}
              >
                Profile
              </Button>
            </Link>
          )}

          {!currentUser && (
            <div className="btns flex flex-col gap-2 mt-6">
              <Link to="/login">
                <Button
                  type="primary"
                  size="large"
                  icon={<LoginOutlined />}
                  onClick={() => handleClick("/login")}
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  type="default"
                  size="large"
                  icon={<UserAddOutlined />}
                  onClick={() => handleClick("/register")}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import "./Card.scss";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Card({ item }) {
  const post = useLoaderData();
  const { currentUser } = useContext(AuthContext);
  const handleSendMessage = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    try {
      console.log("Sending receiverId:", post.user.id);
      const res = await apiRequest.post(
        "/chats",
        { receiverId: post.user.id },
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );
      console.log("Chat created successfully:", res.data);

      navigate("/profile");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };
  return (
    <div className="card">
      <Link to={`/list/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/list/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">₹ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} Bedroom</span>
            </div>
          </div>
          <div className="features">
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} Bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" onClick={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

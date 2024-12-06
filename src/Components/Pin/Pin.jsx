import React from "react";
import "./Pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[parseFloat(item.latitude), parseFloat(item.longitude)]}>
      <Popup maxWidth={200}>
        <div className="popupContainer" style={{ padding: "0px" }}>
          <img src={item.images[0]} alt={item.title} className="popupImage" />
          <div className="textContainer">
            <Link
              to={`/list/${item.id}`}
              className="popupTitle"
              style={{ fontSize: "13px" }}
            >
              {item.title}
            </Link>
            <span className="popupBedrooms">{item.bedroom} Bedrooms</span>
            <b className="popupPrice">₹{item.price.toLocaleString()}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;

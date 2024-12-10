import "./Map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../Pin/Pin";
import { MapContainer, TileLayer } from "react-leaflet";

function MyMap({ items }) {
  // Handle case where items might be empty
  if (!items || items.length === 0) {
    return (
      <div>
        <h1 className="text-4xl h-20 flex items-center justify-center">
          Sorry There Are No Resorts Listed In Your City :(
        </h1>
      </div>
    );
  }

  return (
    <MapContainer
      center={[
        items.length === 1 ? parseFloat(items[0].latitude) : 19.6964,
        items.length === 1 ? parseFloat(items[0].longitude) : 72.7652,
      ]}
      zoom={11}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => {
        const latitude = parseFloat(item.latitude);
        const longitude = parseFloat(item.longitude);

        // Validate coordinates
        if (
          isNaN(latitude) ||
          isNaN(longitude) ||
          latitude < -90 ||
          latitude > 90 ||
          longitude < -180 ||
          longitude > 180
        ) {
          console.error("Invalid coordinates", { latitude, longitude });
          return null; // Skip invalid items
        }

        return <Pin key={item.id} item={item} />;
      })}
    </MapContainer>
  );
}

export default MyMap;

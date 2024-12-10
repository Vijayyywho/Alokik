import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import AuthContext from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Dynamically choose the socket server URL based on environment
    const socketURL =
      process.env.NODE_ENV === "production"
        ? "https://alokik-bwwg.vercel.app/" // Replace with your production URL
        : "http://localhost:4000"; // Development URL

    const newSocket = io(socketURL, {
      transports: ["websocket"], // Optional, depending on your setup
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (currentUser && socket) {
      // Emit the user ID when the user is logged in
      socket.emit("newUser", currentUser.id);
    }
  }, [currentUser, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import AuthContext from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketURL =
      process.env.NODE_ENV === "production"
        ? "https://alokik-bwwg.vercel.app" // Production URL (Vercel)
        : "https://socket-4yr6.onrender.com"; // Development URL (Render)

    const newSocket = io(socketURL, {
      transports: ["websocket"], // Ensure WebSocket is used
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (currentUser && socket) {
      socket.emit("newUser", currentUser.id);
    }
  }, [currentUser, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

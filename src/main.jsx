import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.scss";
import { SocketContextProvider } from "./Context/SocketContext.jsx";
import SmoothScroll from "./Components/SmoothScroll.jsx";

import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";

console.log("main");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="alokik.us.auth0.com"
      clientId="omxHbC8pVUj5SHgJ5O6ZMyopkg45vmhy"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    > */}
    <SmoothScroll>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </SmoothScroll>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

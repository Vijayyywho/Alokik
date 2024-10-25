import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-bv30erk0r2ludz7f.us.auth0.com"
      clientId="YGRa8fGfOIR8s1qdbu8qLc4DMr7tMofM"
      authorizationParams={{
        redirect_uri: "https://alokik.netlify.app/",
      }}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
);

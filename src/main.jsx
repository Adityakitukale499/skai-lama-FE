import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";

const googleClientId =
  "760290180236-51i4rau99l2cb42qt4kcvgq91u9v4cs6.apps.googleusercontent.com";
console.log(googleClientId);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <App />
    </GoogleOAuthProvider>
    <Toaster />
  </StrictMode>
);

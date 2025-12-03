import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.jsx";
import { UserProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

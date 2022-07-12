import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PopupWidgetProvider from "./context/PopupContext";
import "./styles/global.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PopupWidgetProvider>
      <App />
    </PopupWidgetProvider>
  </React.StrictMode>
);

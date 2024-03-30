import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

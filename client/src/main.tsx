import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AnalyzePage from "./pages/AnalyzePage/AnalyzePage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./utils/routes.ts";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme.ts";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
  },
  {
    path: Routes.ANALYZE,
    element: <AnalyzePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  </ThemeProvider>
);

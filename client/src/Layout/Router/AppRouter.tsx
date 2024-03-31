import { createBrowserRouter } from "react-router-dom";
import { Routes } from "../../utils/routes";
import AnalyzePage from "../../pages/AnalyzePage/AnalyzePage";
import { Box, Typography } from "@mui/material";
import Home from "../../pages/home/Home";
import Register from "../../authPages/Register";
import Login from "../../authPages/Login";
import AuthLayout from "../AuthLayout";
import Footer from "../../pages/footer/Footer";
import ResultsPage from "../../pages/AnalyzePage/ResultsPage";

export default createBrowserRouter([
  {
    path: Routes.HOME,
    element: <AuthLayout />,
    children: [
      {
        path: Routes.HOME,
        element: <Home />,
      },
      {
        path: Routes.ANALYZE,
        element: <AnalyzePage />,
      },
      {
        path: Routes.SIGN_UP,
        element: <Register />,
      },
      {
        path: Routes.SIGN_IN,
        element: <Login />,
      },
      {
        path: '/footer',
        element: <Footer/>
      },
      {
        path: Routes.RESULTS,
        element: <ResultsPage />
      },
      {
        path: "/*",
        element: (
          <Box style={{ padding: 20 }}>
            <Typography variant="h1">404: Page Not Found</Typography>
          </Box>
        ),
      },

    ],
  },
]);

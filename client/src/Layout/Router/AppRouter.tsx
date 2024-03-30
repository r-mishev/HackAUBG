import { createBrowserRouter } from "react-router-dom";
import { Routes } from "../../utils/routes";
import AnalyzePage from "../../pages/AnalyzePage/AnalyzePage";
import { Box, Typography } from "@mui/material";

export default createBrowserRouter([
  {
    path: Routes.HOME,
    element: <AuthLayout />,
    children: [
      {
        path: Routes.HOME,
        element: <HomePage />,
      },
      {
        path: Routes.ANALYZE,
        element: <AnalyzePage />,
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

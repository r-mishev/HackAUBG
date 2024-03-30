import { Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Router/AppRouter";

const AuthLayout: React.FC = () => {
  return (
    <Box component="main">
      <RouterProvider router={appRouter} />
    </Box>
  );
};

export default AuthLayout;

import { Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import guestRouter from "./Router/GuestRouter";

const GuestLayout: React.FC = () => {
  return (
    <Box component="main">
      <RouterProvider router={guestRouter} />
    </Box>
  );
};

export default GuestLayout;

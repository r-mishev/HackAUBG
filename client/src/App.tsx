import { Box } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { RouterProvider } from "react-router-dom";
import GuestLayout from "./Layout/GuestLayout";
import appRouter from "./Layout/Router/AppRouter";

const App = () => {
  const loggedUser = true;
  const userLoading = false;
  const theme = useTheme();

  if (userLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: theme.palette.mode === "light" ? "#FFFFFF" : "#000000",
          padding: "1rem",
        }}
      >
        <h1 style={{ margin: "0" }}>Loading...</h1>
      </div>
    );
  }

  if (loggedUser) {
    return (
      <Box component="main">
        <RouterProvider router={appRouter} />
      </Box>
    );
  }

  return <GuestLayout />;
};

export default App;

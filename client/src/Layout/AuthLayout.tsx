import { Outlet } from "react-router-dom";
import Nav from "../pages/navigation/Nav";
import { Box, Theme } from "@mui/material";
import { SerializedStyles, css } from "@emotion/react";
import useTheme from "@mui/material/styles/useTheme";
import cssLayoutStyles from "../Global/Styles/layout";

const cssStyles = (theme: Theme) => ({
  contentContainer: css({
    marginTop: "78px",
    flexGrow: 1,
    backgroundColor: theme.palette.mode === "light" ? "#f5f5f5" : "#313131",
    minHeight: `calc(100vh - 78px)`,
  }),
});

interface AuthLayoutProps {
  css?: SerializedStyles[] | SerializedStyles;
  className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = () => {
  const theme = useTheme();
  const styles = { ...cssStyles(theme), ...cssLayoutStyles };
  return (
    <Box css={styles.contentContainer} component="main">
      <Nav />
      <Outlet />
    </Box>
  );
};

export default AuthLayout;

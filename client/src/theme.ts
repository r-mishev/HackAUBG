import { PaletteMode } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    light100?: string;
    light200?: string;
    light300?: string;
    light400?: string;
    dark100?: string;
    dark200?: string;
    dark300?: string;
    dark400?: string;
  }

  interface SimplePaletteColorOptions {
    light100?: string;
    light200?: string;
    light300?: string;
    light400?: string;
    dark100?: string;
    dark200?: string;
    dark300?: string;
    dark400?: string;
  }

  interface PaletteOptions {
    customColors: {
      greyText?: string;
      darkGrey?: string;
      darkBackgroundColor?: string;
      darkGray?: string;
    };
  }

  interface Palette {
    customColors: {
      greyText?: string;
      darkGrey?: string;
      darkBackgroundColor?: string;
      darkGray?: string;
    };
  }
}

const getTypographyAdjustments = (theme: Theme) => ({
  body1: {
    ...theme.typography.body1,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  body2: {
    ...theme.typography.body2,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.775rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.675rem",
    },
  },
  caption: {
    ...theme.typography.caption,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.65rem",
    },
  },
});

const staticThemeColors = {
  grey: {
    50: "#F5F5F5",
    100: "#EAEAEA",
    200: "#D5D5D5",
    300: "#CACACA",
    400: "#C0C0C0",
    500: "#B5B5B5",
    600: "#A0A0A0",
    700: "#8A8A8A",
    800: "#808080",
    900: "#555555",
  },
};

const theme = (mode: PaletteMode) => {
  const baseTheme = createTheme();

  const customTheme: ThemeOptions = {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#FFFFFF",
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.2))",
          },
        },
      },
    },
    palette: {
      mode,
      common: {
        white: mode === "light" ? "#FFFFFF" : "#000000",
        black: mode === "light" ? "#000000" : "#FFFFFF",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#FFFFFF",
      },
      primary: {
        main: "#30AFB8",
        light: mode === "light" ? "#E2F6F8" : "#2A9BA3",
        light100: "#C1ECEF",
        light200: "#7ED7DE",
        light300: "#5CCDD5",
        light400: "#3BC3CC",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#1E88E5",
        light: mode === "light" ? "#D8EAFA" : "#156BB6",
        light100: "#A7D1F5",
        light200: "#8AC1F1",
        light300: "#6DB2EE",
        light400: "#50A2EA",
        contrastText: "#FFFFFF",
      },
      error: {
        main: mode === "light" ? "#D94646" : "#AD2323",
        contrastText: "#FFFFFF",
      },
      warning: {
        main: mode === "light" ? "#FFCE3B" : "#F9BB00",
        contrastText: "#FFFFFF",
      },
      success: {
        main: mode === "light" ? "#00C853" : "#008A3A",
        contrastText: "#FFFFFF",
      },
      customColors: {
        greyText: mode === "light" ? "#5A5A5A" : "#d3d3d3",
        darkGrey: "#2d2d2d",
        darkBackgroundColor: "#313131",
        darkGray: "	#3e3e42",
      },
      grey: staticThemeColors.grey,
    },
    typography: {
      button: {
        fontFamily: "Montserrat",
        fontWeight: 700,
        fontSize: "0.875rem",
        lineHeight: 1.75,
        letterSpacing: "0.02857em",
        textTransform: "capitalize",
      },
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      htmlFontSize: 16,
      fontSize: 14,
      fontWeightRegular: 400,
      fontWeightBold: 700,
      h1: {
        fontSize: "1.5rem",
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
        fontSize: "1.25rem",
      },
      h3: {
        fontWeight: 600,
        fontSize: "1rem",
      },
      h4: {
        fontWeight: 600,
        fontSize: "1rem",
      },
      h5: {
        fontWeight: 600,
        fontSize: "0.875rem",
      },
      h6: {
        fontWeight: 600,
        fontSize: "0.75rem",
      },
      body1: {
        ...getTypographyAdjustments(baseTheme).body1,
        fontFamily: "Montserrat",
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
      },
      body2: {
        ...getTypographyAdjustments(baseTheme).body2,
        fontFamily: "Montserrat",
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 1.43,
        letterSpacing: "0.01071em",
      },
      caption: {
        ...getTypographyAdjustments(baseTheme).caption,
        fontFamily: "Montserrat",
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 1.66,
        letterSpacing: "0.03333em",
      },
    },
    shape: {
      borderRadius: 10,
    },
  };

  return responsiveFontSizes(createTheme(customTheme), { factor: 2.3 });
};

export default theme;

import { Theme, useTheme } from "@mui/material/styles"; // or @mui/joy/styles
import useMediaQuery from "@mui/material/useMediaQuery";
import { Breakpoint } from "@mui/system";

type BreakpointOrNull = Breakpoint | null;

const useGetCurrentMuiBreakpoint = (width?: number): Breakpoint => {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys];
  const values = theme.breakpoints.values;

  // component width not provided
  if (width === undefined) {
    return (
      keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return matches ? key : output;
      }, null) ?? "xs"
    );
  }

  // component width provided
  return getBreakpointKeyFromWidth(width, values);
};

export default useGetCurrentMuiBreakpoint;

const getBreakpointKeyFromWidth = (
  width: number,
  breakpoints: { [key in Breakpoint]: number }
): Breakpoint => {
  let selectedBreakpoint = "xs";

  for (const [key, value] of Object.entries(breakpoints)) {
    if (width >= value) {
      selectedBreakpoint = key;
    } else {
      break;
    }
  }

  return selectedBreakpoint as Breakpoint;
};

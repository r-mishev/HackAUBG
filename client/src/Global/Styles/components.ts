import { css } from "@emotion/react";
import { Theme } from "@mui/material";

const cssComponentsStyles = (theme: Theme) => ({
  greyIcon: css({
    color: theme.palette.grey[800],
  }),
  iconButton: css({
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: theme.shape.borderRadius,
  }),
  infoIcon: css({
    color: theme.palette.primary.light300,
  }),
});

export default cssComponentsStyles;

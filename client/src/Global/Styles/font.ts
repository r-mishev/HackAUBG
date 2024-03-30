import { css } from "@emotion/react";

const cssFontStyles = {
  boldText: css({
    fontWeight: 700,
  }),
  bolderText: css({
    fontWeight: 600,
  }),
  italicText: css({
    fontStyle: "italic",
  }),
  capitaliseFirstWord: css({
    "&:first-letter": {
      textTransform: "capitalize",
    },
  }),
};

export default cssFontStyles;

import { css } from "@emotion/react";

const cssLayoutStyles = {
  block: css({
    display: "block",
  }),
  relative: css({
    position: "relative",
  }),
  flex: css({
    display: "flex",
  }),
  flexColumn: css({
    display: "flex",
    flexDirection: "column",
  }),
  flexCenter: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  flexJustifyEnd: css({
    justifyContent: "flex-end",
  }),
  overflowYAuto: css({
    overflowY: "auto",
  }),
  overflowYUnset: css({
    overflowY: "unset",
  }),
  heightAuto: css({
    height: "auto",
  }),
  heightUnset: css({
    height: "unset",
  }),
  height100: css({
    height: "100%",
  }),
  width100: css({
    width: "100%",
  }),
  width50: css({
    width: "50%",
  }),
  widthLimit5: css({
    maxWidth: "5rem",
  }),
  widthLimit10: css({
    maxWidth: "10rem",
  }),
  widthLimit15: css({
    maxWidth: "15rem",
  }),
  widthLimit20: css({
    maxWidth: "20rem",
  }),
  widthLimit25: css({
    maxWidth: "25rem",
  }),
  widthLimit30: css({
    maxWidth: "30rem",
  }),
  widthLimit35: css({
    maxWidth: "35rem",
  }),
  widthLimit40: css({
    maxWidth: "40rem",
  }),
  widthLimit45: css({
    maxWidth: "45rem",
  }),
  widthLimit50: css({
    maxWidth: "50rem",
  }),
  widthLimit55: css({
    maxWidth: "55rem",
  }),
  pointer: css({
    cursor: "pointer",
  }),
};

export default cssLayoutStyles;

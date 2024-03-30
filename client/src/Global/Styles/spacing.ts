import { Theme } from "@mui/material";
import { css } from "@emotion/react";

const cssSpacingStyles = (theme: Theme) => ({
  textBreak: css({
    marginBottom: theme.spacing(1),
  }),
  labelBreak: css({
    marginBottom: theme.spacing(2),
  }),
  contentBreak: css({
    marginBottom: theme.spacing(3),
  }),
  sectionBreak: css({
    marginBottom: theme.spacing(4),
  }),
  segmentBreak: css({
    marginBottom: theme.spacing(6),
  }),
  doubleSectionBreak: css({
    marginBottom: theme.spacing(8),
  }),
  reverseTextBreak: css({
    marginTop: theme.spacing(1),
  }),
  reverseLabelBreak: css({
    marginTop: theme.spacing(2),
  }),
  reverseContentBreak: css({
    marginTop: theme.spacing(3),
  }),
  reverseSectionBreak: css({
    marginTop: theme.spacing(4),
  }),
  rightSpacer05: css({
    marginRight: theme.spacing(0.5),
  }),
  rightSpacer1: css({
    marginRight: theme.spacing(1),
  }),
  rightSpacer2: css({
    marginRight: theme.spacing(2),
  }),
  rightSpacer3: css({
    marginRight: theme.spacing(3),
  }),
  leftSpacer05: css({
    marginLeft: theme.spacing(0.5),
  }),
  leftSpacer1: css({
    marginLeft: theme.spacing(1),
  }),
  leftSpacer2: css({
    marginLeft: theme.spacing(2),
  }),
  leftSpacer3: css({
    marginLeft: theme.spacing(3),
  }),
  fullPadding1: css({
    padding: theme.spacing(1),
  }),
  fullPadding2: css({
    padding: theme.spacing(2),
  }),
  fullPadding3: css({
    padding: theme.spacing(3),
  }),
  leftRightPadding1: css({
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  }),
  leftRightPadding2: css({
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }),
  leftRightPadding3: css({
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  }),
  topBottomPadding1: css({
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }),
  topBottomPadding2: css({
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }),
  topBottomPadding3: css({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }),
  marginTopAuto: css({
    marginTop: "auto",
  }),
  marginBotAuto: css({
    marginBot: "auto",
  }),
  marginLeftAuto: css({
    marginLeft: "auto",
  }),
  marginRightAuto: css({
    marginRight: "auto",
  }),
  marginHorizontalAuto: css({
    marginLeft: "auto",
    marginRight: "auto",
  }),
  marginVerticalAuto: css({
    marginTop: "auto",
    marginBottom: "auto",
  }),
  fullMargin1: css({
    margin: theme.spacing(1),
  }),
  fullMargin2: css({
    margin: theme.spacing(2),
  }),
  fullMargin3: css({
    margin: theme.spacing(3),
  }),
  leftRightMargin1: css({
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }),
  leftRightMargin2: css({
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  }),
  leftRightMargin3: css({
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  }),
  topBottomMargin1: css({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }),
  topBottomMargin2: css({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }),
  topBottomMargin3: css({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  }),
});

export default cssSpacingStyles;

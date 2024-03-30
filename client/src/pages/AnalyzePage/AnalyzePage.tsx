import useTheme from "@mui/material/styles/useTheme";
import {
  Box,
  Button,
  Card,
  CardContent,
  Input,
  Typography,
} from "@mui/material";
import cssLayoutStyles from "../../Global/Styles/layout";
import cssSpacingStyles from "../../Global/Styles/spacing";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AnalyzePage = () => {
  const theme = useTheme();
  const styles = { ...cssSpacingStyles(theme), ...cssLayoutStyles };
  return (
    <>
      <Box css={[styles.width100, styles.fullPadding3]}>
        <Typography variant="h4" align="center">
          Fill in patient's data
        </Typography>
        <Button
          css={[styles.width100, styles.topBottomMargin3]}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
        <Card>
          <CardContent>
            <Input type="number" placeholder="Baseline value" />
            <Input type="number" placeholder="Accelerations" />
            <Input type="number" placeholder="Fetal Movement" />
            <Input type="number" placeholder="Uterine Contractions" />
            <Input type="number" placeholder="Light Decelerations" />
            <Input type="number" placeholder="Severe decelerations" />
            <Input type="number" placeholder="Pronlonged decelerations" />
            <Input type="number" placeholder="Abnormal short term variablity" />
            <Input
              type="number"
              placeholder="Mean value of short term variablity"
            />
            <Input
              type="number"
              placeholder="Percentage of time with abnormal short term variability"
            />
            <Input
              type="number"
              placeholder="Mean value of long term variablity"
            />
            <Card>
              <CardContent>
                <Input type="number" placeholder="Histogram width" />
                <Input type="number" placeholder="Histogram min" />
                <Input type="number" placeholder="Histogram max" />
                <Input type="number" placeholder="Histogram number of peaks" />
                <Input type="number" placeholder="Histogram number of zeros" />
                <Input type="number" placeholder="Histogram mode" />
                <Input type="number" placeholder="Histogram mean" />
                <Input type="number" placeholder="Histogram median" />
                <Input type="number" placeholder="Histogram variance" />
                <Input type="number" placeholder="Histogram tendency" />
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Box>
      <Button variant="contained">Continue</Button>
    </>
  );
};

export default AnalyzePage;

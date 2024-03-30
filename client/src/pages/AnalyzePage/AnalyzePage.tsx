import useTheme from "@mui/material/styles/useTheme";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import cssLayoutStyles from "../../Global/Styles/layout";
import cssSpacingStyles from "../../Global/Styles/spacing";

const AnalyzePage = () => {
  const theme = useTheme();
  const styles = { ...cssSpacingStyles(theme), ...cssLayoutStyles };
  return (
    <>
      <Box css={styles.width100}>
        <Typography variant="h4" align="center">
          Choose how to import data
        </Typography>
        <FormGroup>
          <RadioGroup
            aria-labelledby="import type"
            name="import-type-radio-group"
            defaultValue="csv"
          >
            <FormControlLabel
              value="csv"
              control={<Radio />}
              label="Using csv"
            />
            <FormControlLabel
              value="man"
              control={<Radio />}
              label="Manually"
            />
          </RadioGroup>
        </FormGroup>
      </Box>
      <Button variant="contained">Continue</Button>
    </>
  );
};

export default AnalyzePage;

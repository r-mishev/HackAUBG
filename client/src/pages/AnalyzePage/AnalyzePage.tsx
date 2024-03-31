import useTheme from "@mui/material/styles/useTheme";
import {
  Box,
  Button,
  Card,
  CardContent,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import cssLayoutStyles from "../../Global/Styles/layout";
import cssSpacingStyles from "../../Global/Styles/spacing";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { css, styled } from "@mui/material/styles";
import Footer from "../footer/Footer";
import { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../utils/routes";

const cssStyles = () => ({
  dataContainer: css({
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: "40%",
      margin: "10px",
    },
  }),
});

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

interface FormDataType {
  baseline_value: string;
  accelerations: string;
  fetal_movement: string;
  uterine_contractions: string;
  light_decelerations: string;
  severe_decelerations: string;
  prolongued_decelerations: string;
  abnormal_short_term_variability: string;
  mean_value_of_short_term_variability: string;
  percentage_of_time_with_abnormal_long_term_variability: string;
  mean_value_of_long_term_variability: string;
  histogram_width: string;
  histogram_min: string;
  histogram_max: string;
  histogram_number_of_peaks: string;
  histogram_number_of_zeroes: string;
  histogram_mode: string;
  histogram_mean: string;
  histogram_median: string;
  histogram_variance: string;
  histogram_tendency: string;
}

const initialFormData: FormDataType = {
  baseline_value: "",
  accelerations: "",
  fetal_movement: "",
  uterine_contractions: "",
  light_decelerations: "",
  severe_decelerations: "",
  prolongued_decelerations: "",
  abnormal_short_term_variability: "",
  mean_value_of_short_term_variability: "",
  percentage_of_time_with_abnormal_long_term_variability: "",
  mean_value_of_long_term_variability: "",
  histogram_width: "",
  histogram_min: "",
  histogram_max: "",
  histogram_number_of_peaks: "",
  histogram_number_of_zeroes: "",
  histogram_mode: "",
  histogram_mean: "",
  histogram_median: "",
  histogram_variance: "",
  histogram_tendency: "",
};

const AnalyzePage = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const styles = {
    ...cssStyles(),
    ...cssSpacingStyles(theme),
    ...cssLayoutStyles,
  };
  const navigate = useNavigate();

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target!.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data: Array<number[]> = XLSX.utils.sheet_to_json(ws, { header: 1 });
      const firstRow: number[] = data.slice(1)[0];
      const newData = {
        baseline_value: firstRow[0]?.toString() || "",
        accelerations: firstRow[1]?.toString() || "",
        fetal_movement: firstRow[2]?.toString() || "",
        uterine_contractions: firstRow[3]?.toString() || "",
        light_decelerations: firstRow[4]?.toString() || "",
        severe_decelerations: firstRow[5]?.toString() || "",
        prolongued_decelerations: firstRow[6]?.toString() || "",
        abnormal_short_term_variability: firstRow[7]?.toString() || "",
        mean_value_of_short_term_variability: firstRow[8]?.toString() || "",
        percentage_of_time_with_abnormal_long_term_variability:
          firstRow[9]?.toString() || "",
        mean_value_of_long_term_variability: firstRow[10]?.toString() || "",
        histogram_width: firstRow[11]?.toString() || "",
        histogram_min: firstRow[12]?.toString() || "",
        histogram_max: firstRow[13]?.toString() || "",
        histogram_number_of_peaks: firstRow[14]?.toString() || "",
        histogram_number_of_zeroes: firstRow[15]?.toString() || "",
        histogram_mode: firstRow[16]?.toString() || "",
        histogram_mean: firstRow[17]?.toString() || "",
        histogram_median: firstRow[18]?.toString() || "",
        histogram_variance: firstRow[19]?.toString() || "",
        histogram_tendency: firstRow[20]?.toString() || "",
      };

      setFormData(newData);
    };
    reader.readAsBinaryString(file);
  };

  const submitData = () => {
    axios
      .post("http://127.0.0.1:8080/api/v1/data", formData)
      .then(function (response) {
        if (response.status === 200) {
          localStorage.setItem("statusCode", response.data)
          navigate(Routes.RESULTS);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          <VisuallyHiddenInput
            type="file"
            onChange={handleFileUpload}
            accept=".xlsx, .xls, .csv"
          />
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ width: "70%" }}>
            <CardContent>
              <Card sx={{ marginBottom: 2, boxShadow: "1px 1px 1px grey" }}>
                <CardContent>
                  <Box css={[styles.dataContainer, styles.fullMargin1]}>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Baseline value
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.baseline_value}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            baseline_value: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Acceleration
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.accelerations}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            accelerations: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Fetal movement
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.fetal_movement}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fetal_movement: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Uterine contractions
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.uterine_contractions}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            uterine_contractions: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Light decelerations
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.light_decelerations}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            light_decelerations: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Severe decelerations
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.severe_decelerations}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            severe_decelerations: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Prolongued decelerations
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.prolongued_decelerations}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            prolongued_decelerations: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Abnormal ST variability
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.abnormal_short_term_variability}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            abnormal_short_term_variability: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Mean value of ST variability
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.mean_value_of_short_term_variability}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            mean_value_of_short_term_variability: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Percentage of time with abnormal ST variability
                      </InputLabel>
                      <Input
                        type="number"
                        value={
                          formData.percentage_of_time_with_abnormal_long_term_variability ||
                          ""
                        }
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            percentage_of_time_with_abnormal_long_term_variability:
                              e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Mean value of LT variability
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.mean_value_of_long_term_variability}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            mean_value_of_long_term_variability: e.target.value,
                          })
                        }
                      />
                    </>
                  </Box>
                </CardContent>
              </Card>
              <Card sx={{ boxShadow: "1px 1px 1px grey" }}>
                <CardContent css={styles.topBottomMargin2}>
                  <Typography variant="h2">Histogram Data</Typography>
                  <Box css={styles.dataContainer}>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>Width</InputLabel>
                      <Input
                        type="number"
                        value={formData.histogram_width}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogram_width: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Minimal value
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.histogram_min}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogram_min: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Maximum value
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.histogram_max}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogram_max: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Number of peaks
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.histogram_number_of_peaks}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogram_number_of_peaks: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Number of zeros
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.histogram_number_of_zeroes}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogram_number_of_zeroes: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>Mode</InputLabel>
                      <Input
                        type="number"
                        value={formData.histogram_mode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogram_mode: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>Mean</InputLabel>
                      <Input
                        type="number"
                        value={formData.histogram_mean}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogram_mean: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>Median</InputLabel>
                      <Input
                        type="number"
                        value={formData.histogram_median}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogram_median: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Variance
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.histogram_variance}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogram_variance: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>
                        Tendency
                      </InputLabel>
                      <Input
                        type="number"
                        value={formData.histogram_tendency}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogram_tendency: e.target.value,
                          })
                        }
                      />
                    </>
                  </Box>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginInline: "15rem",
            padding: "20px",
          }}
        >
          <Button
            variant="contained"
            onClick={() => setFormData(initialFormData)}
          >
            Clear data
          </Button>
          <Button variant="contained" onClick={submitData}>
            Continue
          </Button>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default AnalyzePage;

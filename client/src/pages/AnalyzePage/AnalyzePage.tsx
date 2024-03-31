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
import { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import ResultsPage from "./ResultsPage";

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
  baselineValue: string;
  accelerations: string;
  fetalMovement: string;
  uterineContractions: string;
  lightDecelerations: string;
  severeDecelerations: string;
  prolonguedDecelerations: string;
  abnormalShortTermVariability: string;
  meanValueOfShortTermVariability: string;
  percentageOfTimeWithAbnormalLongTermVariability: string;
  meanValueOfLongTermVariability: string;
  histogramWidth: string;
  histogramMin: string;
  histogramMax: string;
  histogramNumberOfPeaks: string;
  histogramNumberOfZeroes: string;
  histogramMode: string;
  histogramMean: string;
  histogramMedian: string;
  histogramVariance: string;
  histogramTendency: string;
}

const initialFormData: FormDataType = {
  baselineValue: "",
  accelerations: "",
  fetalMovement: "",
  uterineContractions: "",
  lightDecelerations: "",
  severeDecelerations: "",
  prolonguedDecelerations: "",
  abnormalShortTermVariability: "",
  meanValueOfShortTermVariability: "",
  percentageOfTimeWithAbnormalLongTermVariability: "",
  meanValueOfLongTermVariability: "",
  histogramWidth: "",
  histogramMin: "",
  histogramMax: "",
  histogramNumberOfPeaks: "",
  histogramNumberOfZeroes: "",
  histogramMode: "",
  histogramMean: "",
  histogramMedian: "",
  histogramVariance: "",
  histogramTendency: "",
};

const AnalyzePage = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const styles = {
    ...cssStyles(),
    ...cssSpacingStyles(theme),
    ...cssLayoutStyles,
  };

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
        baselineValue: firstRow[0]?.toString() || "",
        accelerations: firstRow[1]?.toString() || "",
        fetalMovement: firstRow[2]?.toString() || "",
        uterineContractions: firstRow[3]?.toString() || "",
        lightDecelerations: firstRow[4]?.toString() || "",
        severeDecelerations: firstRow[5]?.toString() || "",
        prolonguedDecelerations: firstRow[6]?.toString() || "",
        abnormalShortTermVariability: firstRow[7]?.toString() || "",
        meanValueOfShortTermVariability: firstRow[8]?.toString() || "",
        percentageOfTimeWithAbnormalLongTermVariability:
          firstRow[9]?.toString() || "",
        meanValueOfLongTermVariability: firstRow[10]?.toString() || "",
        histogramWidth: firstRow[11]?.toString() || "",
        histogramMin: firstRow[12]?.toString() || "",
        histogramMax: firstRow[13]?.toString() || "",
        histogramNumberOfPeaks: firstRow[14]?.toString() || "",
        histogramNumberOfZeroes: firstRow[15]?.toString() || "",
        histogramMode: firstRow[16]?.toString() || "",
        histogramMean: firstRow[17]?.toString() || "",
        histogramMedian: firstRow[18]?.toString() || "",
        histogramVariance: firstRow[19]?.toString() || "",
        histogramTendency: firstRow[20]?.toString() || "",
      };

      setFormData(newData);
    };
    reader.readAsBinaryString(file);
  };

  const submitData = () => {
    axios
      .post("/data", formData)
      .then(function (response) {
        console.log(response);
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
                        value={formData.baselineValue}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            baselineValue: e.target.value,
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
                        value={formData.fetalMovement}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fetalMovement: e.target.value,
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
                        value={formData.uterineContractions}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            uterineContractions: e.target.value,
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
                        value={formData.lightDecelerations}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lightDecelerations: e.target.value,
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
                        value={formData.severeDecelerations}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            severeDecelerations: e.target.value,
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
                        value={formData.prolonguedDecelerations}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            prolonguedDecelerations: e.target.value,
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
                        value={formData.abnormalShortTermVariability}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            abnormalShortTermVariability: e.target.value,
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
                        value={formData.meanValueOfShortTermVariability}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            meanValueOfShortTermVariability: e.target.value,
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
                          formData.percentageOfTimeWithAbnormalLongTermVariability ||
                          ""
                        }
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            percentageOfTimeWithAbnormalLongTermVariability:
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
                        value={formData.meanValueOfLongTermVariability}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            meanValueOfLongTermVariability: e.target.value,
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
                        value={formData.histogramWidth}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogramWidth: e.target.value,
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
                        value={formData.histogramMin}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogramMin: e.target.value,
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
                        value={formData.histogramMax}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogramMax: e.target.value,
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
                        value={formData.histogramNumberOfPeaks}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogramNumberOfPeaks: e.target.value,
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
                        value={formData.histogramNumberOfZeroes}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogramNumberOfZeroes: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>Mode</InputLabel>
                      <Input
                        type="number"
                        value={formData.histogramMode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogramMode: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>Mean</InputLabel>
                      <Input
                        type="number"
                        value={formData.histogramMean}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogramMean: e.target.value,
                          })
                        }
                      />
                    </>
                    <>
                      <InputLabel sx={{ textAlign: "end" }}>Median</InputLabel>
                      <Input
                        type="number"
                        value={formData.histogramMedian}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogramMedian: e.target.value,
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
                        value={formData.histogramVariance}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogramVariance: e.target.value,
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
                        value={formData.histogramTendency}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            histogramTendency: e.target.value,
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
    </>
  );
};

export default AnalyzePage;

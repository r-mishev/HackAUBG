import { Card, CardContent, Typography, Box } from "@mui/material";
import useFirebase from "../../utils/useFirebase";

const ResultsPage = () => {
  const imgUrl = useFirebase();

  const statusCodeToText = () => {
    switch (localStorage.getItem("statusCode")) {
      case "1": return "Normal case";
      case "2": return "Suspicious case";
      case "3": return "Pathological case";
    }
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h2">
            {statusCodeToText()}
          </Typography>
        </Box>
        {imgUrl.slice(0, 3).map((item, index) => (
          <img src={item} key={index} alt="images" loading="lazy" />
        ))}
      </CardContent>
    </Card>
  );
};

export default ResultsPage;

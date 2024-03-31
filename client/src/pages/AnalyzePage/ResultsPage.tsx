import {Card, CardContent, Typography} from "@mui/material";
import useFirebase from "../../utils/useFirebase";

const ResultsPage = () => {
  const imgUrl = useFirebase();
  return (
    <Card>
      <CardContent>
          <Typography variant="h2">{localStorage.getItem("statusCode")}</Typography>
          {imgUrl.slice(0, 3).map((item, index) => (
              <img src={item} key={index} alt="images" loading="lazy" />
          ))}
      </CardContent>
    </Card>
  );
};

export default ResultsPage;

import { Card, CardContent } from "@mui/material";
import useFirebase from "../../utils/useFirebase";

const ResultsPage = () => {
  const imgUrl = useFirebase();
  return (
    <Card>
      <CardContent>
          {imgUrl.map((item, index) => (
              <img src={item} key={index} alt="images" loading="lazy" />
          ))}
      </CardContent>
    </Card>
  );
};

export default ResultsPage;

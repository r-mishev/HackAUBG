import { Card, CardContent, ImageList, ImageListItem } from "@mui/material";
import useFirebase from "../../utils/useFirebase";

const ResultsPage = () => {
  const imgUrl = useFirebase();
  return (
    <Card>
      <CardContent>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={250}>
          {imgUrl.map((item, index) => (
            <ImageListItem key={index}>
              <img src={item} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
    </Card>
  );
};

export default ResultsPage;

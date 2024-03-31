import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import imageDb from "./utils";

const useFirebase = () => {
  const [imgUrl, setImgUrl] = useState([]);

  useEffect(() => {
    listAll(ref(imageDb)).then((imgs) => {
      console.log(imgs);
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
  }, []);

  return imgUrl;
};

export default useFirebase;

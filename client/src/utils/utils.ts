import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnvtPLTwv9Jpji0x2Bb3AXDPR5NjI6czs",
  authDomain: "backend-bucket.firebaseapp.com",
  projectId: "backend-bucket",
  storageBucket: "backend-bucket.appspot.com",
  messagingSenderId: "973662970757",
  appId: "1:973662970757:web:6bde919ad90f66f1ea1aec",
  measurementId: "G-LC7M1F4PLN",
  databaseURL:
    "https://backend-bucket-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

const imageDb = getStorage(app);

export default imageDb;

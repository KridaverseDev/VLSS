import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfWN-Uu0DNIGB--SV1qJmsWFPktzLh02w",
  authDomain: "vlss-15714.firebaseapp.com",
  projectId: "vlss-15714",
  storageBucket: "vlss-15714.appspot.com",
  messagingSenderId: "72622907259",
  appId: "1:72622907259:web:7ee56dc18389c6e94467de",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };

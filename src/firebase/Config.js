
import {  initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCy0kOQ6wvU0ln7XNTtbgbhtsmhnTUtAes",
  authDomain: "e-commerce-ae052.firebaseapp.com",
  projectId: "e-commerce-ae052",
  storageBucket: "e-commerce-ae052.appspot.com",
  messagingSenderId: "668136160628",
  appId: "1:668136160628:web:aca919b42c4168206a0021",
  measurementId: "G-7MMM1B9QNQ"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
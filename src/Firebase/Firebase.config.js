
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAh1vbwl1__HLQyHWtWGw4WZrq-Bhc2Tj4",
  authDomain: "hungry-ducks.firebaseapp.com",
  projectId: "hungry-ducks",
  storageBucket: "hungry-ducks.appspot.com",
  messagingSenderId: "978540672670",
  appId: "1:978540672670:web:682b4d76dcc7dcdb6aad8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
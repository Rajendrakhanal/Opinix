import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBby9bgJYfhmYJjv7MQY7cBoxAuspSY304",
  authDomain: "opinix-67675.firebaseapp.com",
  databaseURL: "https://opinix-67675-default-rtdb.firebaseio.com",
  projectId: "opinix-67675",
  storageBucket: "opinix-67675.appspot.com",
  messagingSenderId: "125752915736",
  appId: "1:125752915736:web:080db3379ed4337690d06d",
  measurementId: "G-92YPKPEYWH",
};

const app = initializeApp(firebaseConfig);
export const csvDb = getStorage(app);
export const csvDbRef = ref(csvDb);

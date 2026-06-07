import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFs0kgwd6pY98OgST9Ayi2t3uIYgaAp2Q",
  authDomain: "sadhikabirthday.firebaseapp.com",
  projectId: "sadhikabirthday",
  storageBucket: "sadhikabirthday.firebasestorage.app",
  messagingSenderId: "411707646592",
  appId: "1:411707646592:web:280d9316ff4818d2387c65"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

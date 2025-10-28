// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ↓ 여기에 네 Firebase 콘솔에서 복사한 설정을 넣어
const firebaseConfig = {
  apiKey: "AIzaSyBFHz2dP8iucRWl7KHvyv6I2HlRqHLDjkw",
  authDomain: "and-132-archive.firebaseapp.com",
  projectId: "and-132-archive",
  storageBucket: "and-132-archive.firebasestorage.app",
  messagingSenderId: "650954051303",
  appId: "1:650954051303:web:9ebe30987a0dbaf0451c42",
  measurementId: "G-3FGZQB43Q2"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
window.auth = getAuth(app);


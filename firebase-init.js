// firebase-init.js
// 🍃 Firebase 초기 설정 (박상희's Arch1ve용)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFHz2dP8iucRWl7KHvyv6I2HlRqHLDjkw",
  authDomain: "and-132-archive.firebaseapp.com",
  projectId: "and-132-archive",
  storageBucket: "and-132-archive.firebasestorage.app",
  messagingSenderId: "650954051303",
  appId: "1:650954051303:web:9ebe30987a0dbaf0451c42",
  measurementId: "G-3FGZQB43Q2"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);
console.log("🍃 Firebase initialized successfully");

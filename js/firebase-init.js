<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {
    getAuth,
    setPersistence,
    browserLocalPersistence
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  // ✅ Firebase 콘솔에서 복사한 config
  const firebaseConfig = {
    apiKey: "AIzaSyBFHz2dP8iucRWl7KHvyv6I2HlRqHLDjkw",
    authDomain: "and-132-archive.firebaseapp.com",
    projectId: "and-132-archive",
    storageBucket: "and-132-archive.firebasestorage.app",
    messagingSenderId: "650954051303",
    appId: "1:650954051303:web:9ebe30987a0dbaf0451c42",
    measurementId: "G-3FGZQB43Q2"
  };

  // ✅ Firebase 초기화 및 로그인 유지 설정
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  await setPersistence(auth, browserLocalPersistence);

  // ✅ 전역 변수로 등록 (다른 페이지에서 window.auth로 접근)
  window.auth = auth;
</script>

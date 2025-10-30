// auth.js
// 🌷 Firebase 로그인 / 회원가입 / 로그아웃 기능 통합 스크립트

import { app } from "./firebase-init.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);

// ✅ 로그인
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("이메일과 비밀번호를 입력해주세요 💌");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("🍃 로그인 성공!");
      // 로그인 후 MAIN 페이지로 이동
      window.location.href = "MAIN.html";
    })
    .catch(err => {
      alert("⚠️ 로그인 실패: " + err.message);
    });
});

// ✅ 회원가입
document.getElementById("signupBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("이메일과 비밀번호를 입력해주세요 💌");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("🌷 회원가입 완료! 로그인 후 이용해주세요."))
    .catch(err => alert("⚠️ 회원가입 실패: " + err.message));
});

// ✅ 로그아웃
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("💨 로그아웃 완료!");
      window.location.href = "index.html";
    })
    .catch(err => alert("⚠️ 로그아웃 실패: " + err.message));
});

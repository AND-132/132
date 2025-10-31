// auth.js
// 🍃 Firebase 인증 스크립트 (박상희's Arch1ve용)

import { auth } from "./firebase-init.js"; 
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🌿 토스트 메시지 함수 (예쁜 알림)
function showToast(message, color = "#7BE0B5") {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.top = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = color;
  toast.style.color = "white";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "25px";
  toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  toast.style.fontWeight = "bold";
  toast.style.fontFamily = "system-ui, sans-serif";
  toast.style.zIndex = "9999";
  toast.style.transition = "opacity 0.5s ease";
  toast.style.opacity = "1";
  document.body.appendChild(toast);
  setTimeout(() => (toast.style.opacity = "0"), 2000);
  setTimeout(() => toast.remove(), 2500);
}

// ✅ 로그인 기능
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    showToast("이메일과 비밀번호를 입력해주세요 💌", "#FFC8DD");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    showToast(`🌿 Welcome back, ${user.email}!`, "#7BE0B5");
    setTimeout(() => {
      window.location.href = "MAIN.html"; // ✅ 로그인 후 이동할 페이지
    }, 2000);
  } catch (err) {
    showToast("⚠️ 로그인 실패: " + err.message, "#FFC8DD");
    console.error(err);
  }
});

// ✅ 회원가입 기능
document.getElementById("signupBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    showToast("이메일과 비밀번호를 입력해주세요 💌", "#FFC8DD");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    showToast("🌷 회원가입 완료! 로그인 후 이용해주세요.", "#7BE0B5");
  } catch (err) {
    showToast("⚠️ 회원가입 실패: " + err.message, "#FFC8DD");
    console.error(err);
  }
});

// ✅ 로그아웃 기능
document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    await signOut(auth);
    showToast("💨 로그아웃 완료!", "#FFC8DD");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  } catch (err) {
    showToast("⚠️ 로그아웃 실패: " + err.message, "#FFC8DD");
    console.error(err);
  }
});

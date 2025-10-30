// auth.js
import { app } from "./firebase-init.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);

// 🌿 토스트 메시지 함수
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

// ✅ 로그인
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    showToast("이메일과 비밀번호를 입력해주세요 💌", "#FFC8DD");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      showToast(`🌿 Welcome back, ${user.email}!`, "#7BE0B5");
      setTimeout(() => {
        window.location.href = "MAIN.html";
      }, 2000);
    })
    .catch(err => showToast("⚠️ 로그인 실패: " + err.message, "#FFC8DD"));
});

// ✅ 회원가입
document.getElementById("signupBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    showToast("이메일과 비밀번호를 입력해주세요 💌", "#FFC8DD");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => showToast("🌷 회원가입 완료! 로그인 후 이용해주세요.", "#7BE0B5"))
    .catch(err => showToast("⚠️ 회원가입 실패: " + err.message, "#FFC8DD"));
});

// ✅ 로그아웃
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      showToast("💨 로그아웃 완료!", "#FFC8DD");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    })
    .catch(err => showToast("⚠️ 로그아웃 실패: " + err.message, "#FFC8DD"));
});

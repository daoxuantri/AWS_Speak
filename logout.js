
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAumUTEV-8m0ssgIYssxN6gGzgd_VxPB78",
  authDomain: "authfirebase-2b26c.firebaseapp.com",
  databaseURL: "https://authfirebase-2b26c-default-rtdb.firebaseio.com",
  projectId: "authfirebase-2b26c",
  storageBucket: "authfirebase-2b26c.appspot.com",
  messagingSenderId: "801604261642",
  appId: "1:801604261642:web:19c68723b4fcf93e1e0cf3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let logoutButton = document.getElementById("logout-button");
console.log(logoutButton);

logoutButton.addEventListener("click", (e) => {
    const auth = getAuth(app);
    signOut(auth)
        .then(() => {
            alert("Đăng xuất thành công");
            location.href = "http://127.0.0.1:5501/AWSPolly_Nhom28-5e975dfd1756c4c0ffc689113a3809808ccd80eb/AWSPolly/login.html";
        })
        .catch((error) => { });
});

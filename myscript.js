import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";


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
const auth = getAuth(app);
const database = getDatabase(app);
let signinButton = document.getElementById("signin-button");
let signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", (e) => {
  let name = document.getElementById("name").value;
  let nohp = document.getElementById("nohp").value;
  let emailSignup = document.getElementById("email_signup").value;
  let passwordSignup = document.getElementById("psw_signup").value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        name: name,
        nohp: nohp,
        email: emailSignup,
        password: passwordSignup
      })
        .then(() => {
          // Data saved successfully!
          alert("Đã tạo tài khoản thành công!!!");
        })
        .catch((error) => {
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('errorMessage');
    });
});

signinButton.addEventListener("click", (e) => {
  let emailSignin = document.getElementById("email_signin").value;
  let passwordSignin = document.getElementById("psw_signin").value;
  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let lgDate = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: lgDate
      })
        .then(() => {
          location.href = "http://127.0.0.1:5501/AWSPolly_Nhom28-5e975dfd1756c4c0ffc689113a3809808ccd80eb/AWSPolly/index.html?uuid=" + emailSignin;
          alert('Đăng nhập thành công')
        })
        .catch((error) => {
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Không tìm thấy tài khoản')
    });
  signOut(auth)
    .then(() => { })
    .catch((error) => { });
});

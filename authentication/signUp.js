// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import  {getAuth , createUserWithEmailAndPassword , signOut , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCkGszuBdyX8ZBwdPNygLfEkR6b1tpQtHA",
//   authDomain: "cp-community-5c382.firebaseapp.com",
//   projectId: "cp-community-5c382",
//   storageBucket: "cp-community-5c382.appspot.com",
//   messagingSenderId: "1088755596953",
//   appId: "1:1088755596953:web:d2cb23e4b145bbb1410208"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // const auth= getAuth(app)

// // const signupForm = document.querySelector('.signup')
// // signupForm.addEventListener('submit',(e)=>{
// //     e.preventDefault()

// //     const email = signupForm.email.value
// //     const password = signupForm.password.value


// //     createUserWithEmailAndPassword(auth,email,password)
// //     .then((cred) => {
// //         console.log('user created:',cred.user)
// //         signupForm.reset()
// //         window.location.href='/html/index2.html';
// //     })
    
// //     .catch((err) =>{
// //         console.log(err.message)
// //     })
    
// // })

// // // Signin and logging out
// // const logoutButton =document.querySelector('.logout')
// // logoutButton.addEventListener('click' , () =>{
// //     signOut(auth)
// //     .then(()=>{
// //         console.log('the user signed out')
// //     })
// //     .catch((err)=>{
// //         console.log(err.message)
// //     })
// // })

// // const loginForm = document.querySelector('.signin')
// // loginForm.addEventListener('submit' , (e)=>{
// //     e.preventDefault()

// //     const email=loginForm.email.value
// //     const password = loginForm.password.value


// //     signInWithEmailAndPassword(auth,email,password)
// //     .then((cred)=>{
// //         console.log('user logged in' , cred.user)
// //         window.location.href='/html/index2.html';

// //     })
// //     .catch((err)=>{
// //         console.log(err.message)

// //     })
// // })



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField }
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkGszuBdyX8ZBwdPNygLfEkR6b1tpQtHA",
    authDomain: "cp-community-5c382.firebaseapp.com",
    projectId: "cp-community-5c382",
    storageBucket: "cp-community-5c382.appspot.com",
    messagingSenderId: "1088755596953",
    appId: "1:1088755596953:web:d2cb23e4b145bbb1410208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signupForm.email.value
    const password = signupForm.password.value
    const College = signupForm.College.value


    createUserWithEmailAndPassword(auth, email, password, College)
        .then((cred) => {
            console.log('user created:', cred.user)
            signupForm.reset()
            window.location.href = '../html/index2.html';
        })

        .catch((err) => {
            console.log(err.message)

        })

})


const db = getFirestore();
var emailbox = email;
var passbox = password;
var ism = College

var Insbtn = document.getElementById("btn")
var Selbtn = document.getElementById("getbtn")

async function AddDocument_CustomID() {
    var ref = doc(db, "Signup", emailbox.value);

    await setDoc(
        ref, {
        Userid: emailbox.value,
        Userpass: passbox.value,
        Usercollege: ism.value

    })
        .then(() => {
            // alert("data added seccessfully");
        })
        .catch((error) => {
            alert("Unsuccessful opertion, error:" + error);
        });
}

async function getADocument() {
              var ref = doc(db, "Signup", emailbox.value);
              const docSnap = await getDoc(ref);
          
          if (docSnap.exists()) {
              emailbox.value = docSnap.data().Userid;
              passbox.value = docSnap.data().Userpass;
              ism.value = docSnap.data().Usercollege;
          }
          else {
              alert("NOs such document")
          }
      }

      Selbtn.addEventListener("click", getADocument)
      Insbtn.addEventListener("click", AddDocument_CustomID)

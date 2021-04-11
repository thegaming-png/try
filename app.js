var firebaseConfig = {
  apiKey: "AIzaSyCsQCQ6aXT165CdR9qUZaZ8GgZDzQ9Mmgo",
  authDomain: "chat-dudes.firebaseapp.com",
  projectId: "chat-dudes",
  storageBucket: "chat-dudes.appspot.com",
  messagingSenderId: "703676940012",
  appId: "1:703676940012:web:970dfd9d36627559ed2fc9",
  measurementId: "G-HHL26ZNQ05"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  
  let contactInfo = firebase.database().ref("infos");
  
  
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  
  function submitForm(e) {
    e.preventDefault();
  
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#Value").value;
  
    saveContactInfo(name, email, message);
  }
  
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      Username: name,
      email: email,
      message: message,
    })
  };

function contactInfoD(){
  document.getElementById("#name").value = "";
  document.getElementById("#name").value = "";
  document.getElementById("#name").value = "";
  saveContactInfo(email, message);
}
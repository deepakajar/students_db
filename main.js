import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA6uAQfeZmUwP5kZh-McsIpwT-81BZyfAs",
    authDomain: "vpmm-25a29.firebaseapp.com",
    projectId: "vpmm-25a29",
    storageBucket: "vpmm-25a29.appspot.com",
    messagingSenderId: "172322098392",
    appId: "1:172322098392:web:6bf7ea6891e7ca4f791bad"
    };
    const app = initializeApp(firebaseConfig);
    const db=getDatabase();
    let student_name=document.getElementById('name');
    let student_rno=document.getElementById('rollno');
    let addbtn=document.getElementById('addbt');
    let getbtn=document.getElementById('getbt');
  
   addbtn.addEventListener("click",()=>{
    set(ref(db,'Student_data/'+student_name.value),{
        student_name:student_name.value,
        student_rollno:student_rno.value
    }).then(()=>{
        alert("Insert Successfully");
    }).catch((error)=>{
        alert("Insert Unsuccessfully");
        console.log(error);
    })
   });

   getbtn.addEventListener("click", () => {
    const dbRef = ref(db, 'Student_data');
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(snapshot);
        output.innerHTML = ''; // Clear previous output
        for (const key in data) {
            
          if (data.hasOwnProperty(key)) {
            const student = data[key];
            output.innerHTML += ` <p>Name: ${student.student_name}, Roll No: ${student.student_rollno}</p>`;
          }
        }
      } else {
        output.innerHTML = 'No data available';
      }
    }).catch((error) => {
      console.error("Error fetching data:", error);
      output.innerHTML = 'Error fetching data';
    });
  });

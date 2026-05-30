# RISING CLASSES – Complete GitHub Compatible Project

## Project Folder Structure

```text
RISING-CLASSES/
│
├── index.html
├── admin.html
├── dashboard.html
│
├── css/
│   ├── style.css
│   ├── login.css
│   └── dashboard.css
│
├── js/
│   ├── script.js
│   ├── auth.js
│   ├── firebase-config.js
│   └── dashboard.js
│
├── images/
│   ├── logo.png
│   ├── hero-banner.jpg
│   ├── teacher1.jpg
│   ├── teacher2.jpg
│   └── teacher3.jpg
│
├── firebase/
│   └── firestore.rules
│
└── README.md
```

---

# 1. index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RISING CLASSES</title>

<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/login.css">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
</head>
<body>

<header>

<div class="logo-section">
<div class="logo-circle">
<i class="fa-solid fa-graduation-cap"></i>
</div>
<h2>RISING CLASSES</h2>
</div>

<nav>
<ul>
<li><a href="#home">Home</a></li>
<li><a href="#achievements">Achievements</a></li>
<li><a href="#teachers">Teachers</a></li>
<li><a href="#students">Top Students</a></li>
<li><a href="#pricing">Pricing</a></li>
<li><a href="#offers">Offers</a></li>
<li><a href="#about">About</a></li>
</ul>
</nav>

<div class="auth-buttons">
<button onclick="openLogin()">Login</button>
<button onclick="openRegister()">Register</button>
</div>

</header>

<section class="hero" id="home">
<div class="hero-content">
<h1>RISING CLASSES</h1>
<p>
Excellence in Education for aspiring minds in College Square, Aska
</p>
<button class="main-btn" onclick="scrollToEnroll()">
Enroll Now
</button>
</div>
</section>

<section id="achievements">
<h2 class="section-title">Achievements</h2>

<div class="card-container">

<div class="card">
<h3>500+</h3>
<p>Successful Students</p>
</div>

<div class="card">
<h3>98%</h3>
<p>Success Rate</p>
</div>

<div class="card">
<h3>50+</h3>
<p>State Rank Holders</p>
</div>

</div>
</section>

<section id="teachers">
<h2 class="section-title">Our Teachers</h2>

<div class="card-container">

<div class="card">
<img src="https://randomuser.me/api/portraits/men/12.jpg">
<h3>Rajesh Sir</h3>
<p>Mathematics Faculty</p>
</div>

<div class="card">
<img src="https://randomuser.me/api/portraits/women/22.jpg">
<h3>Anita Ma'am</h3>
<p>Physics Faculty</p>
</div>

<div class="card">
<img src="https://randomuser.me/api/portraits/men/30.jpg">
<h3>Rakesh Sir</h3>
<p>Chemistry Faculty</p>
</div>

</div>
</section>

<section id="students">
<h2 class="section-title">Top Students</h2>

<div class="card-container">

<div class="card">
<h3>Priya</h3>
<p>96% Overall Topper</p>
</div>

<div class="card">
<h3>Rahul</h3>
<p>95% Science Topper</p>
</div>

<div class="card">
<h3>Sneha</h3>
<p>94% Mathematics Topper</p>
</div>

</div>
</section>

<section id="pricing">
<h2 class="section-title">Pricing</h2>

<div class="card-container">

<div class="card">
<h3>Basic</h3>
<p>₹999/month</p>
</div>

<div class="card">
<h3>Advanced</h3>
<p>₹1999/month</p>
</div>

<div class="card">
<h3>Premium</h3>
<p>₹2999/month</p>
</div>

</div>
</section>

<section id="offers">
<h2 class="section-title">Special Offers</h2>

<div class="card-container">

<div class="card">
<h3>Scholarship Test</h3>
<p>Up to 50% Discount</p>
</div>

<div class="card">
<h3>Free Notes</h3>
<p>For Early Admissions</p>
</div>

</div>
</section>

<section id="about">
<h2 class="section-title">About Us</h2>

<p class="about-text">
RISING CLASSES provides quality education with experienced teachers,
modern teaching techniques, and career-focused learning.
</p>
</section>

<section id="enroll">
<h2 class="section-title">Student Enrollment</h2>

<div class="form-box">
<form id="enrollForm">

<input type="text" id="studentName"
placeholder="Student Name" required>

<input type="email" id="studentEmail"
placeholder="Email Address" required>

<input type="tel" id="studentPhone"
placeholder="Mobile Number" required>

<textarea id="studentCourse"
placeholder="Course Interested"></textarea>

<button type="submit" class="main-btn">
Submit Enrollment
</button>

</form>
</div>
</section>

<footer>
<p>
© 2026 RISING CLASSES | All Rights Reserved
</p>
</footer>

<!-- LOGIN MODAL -->

<div id="loginModal" class="modal">
<div class="modal-content">

<span class="close" onclick="closeLogin()">&times;</span>

<h2>Login</h2>

<input type="email" id="loginEmail"
placeholder="Enter Email">

<input type="password" id="loginPassword"
placeholder="Enter Password">

<button onclick="loginUser()" class="main-btn">
Login
</button>

</div>
</div>

<!-- REGISTER MODAL -->

<div id="registerModal" class="modal">
<div class="modal-content">

<span class="close" onclick="closeRegister()">&times;</span>

<h2>Create Account</h2>

<input type="text" id="registerName"
placeholder="Full Name">

<input type="email" id="registerEmail"
placeholder="Email Address">

<input type="password" id="registerPassword"
placeholder="Password">

<button onclick="registerUser()" class="main-btn">
Register
</button>

</div>
</div>

<script src="js/auth.js"></script>
<script src="js/script.js"></script>

</body>
</html>
```

---

# 2. css/style.css

```css
*{
margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior:smooth;
font-family:Arial;
}

body{
background:#f5f7fb;
}

header{
position:fixed;
top:0;
width:100%;
padding:15px 40px;
background:#0b3d91;
display:flex;
justify-content:space-between;
align-items:center;
z-index:1000;
}

.logo-section{
display:flex;
align-items:center;
gap:10px;
color:white;
}

.logo-circle{
width:45px;
height:45px;
border-radius:50%;
background:orange;
display:flex;
align-items:center;
justify-content:center;
color:white;
font-size:22px;
}

nav ul{
display:flex;
list-style:none;
gap:20px;
}

nav ul li a{
text-decoration:none;
color:white;
font-weight:bold;
}

.auth-buttons{
display:flex;
gap:10px;
}

.auth-buttons button{
padding:10px 18px;
border:none;
border-radius:8px;
font-weight:bold;
cursor:pointer;
}

.hero{
height:100vh;
background:linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400');
background-size:cover;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
color:white;
padding:20px;
}

.hero-content h1{
font-size:60px;
margin-bottom:20px;
}

.hero-content p{
font-size:22px;
margin-bottom:30px;
}

.main-btn{
padding:14px 30px;
background:orange;
color:white;
border:none;
border-radius:8px;
font-size:18px;
cursor:pointer;
}

section{
padding:100px 50px;
}

.section-title{
text-align:center;
font-size:40px;
margin-bottom:50px;
color:#0b3d91;
}

.card-container{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:white;
padding:25px;
border-radius:15px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
text-align:center;
}

.card img{
width:100%;
height:220px;
object-fit:cover;
border-radius:12px;
margin-bottom:15px;
}

.about-text{
max-width:900px;
margin:auto;
text-align:center;
font-size:20px;
line-height:1.8;
}

.form-box{
max-width:600px;
margin:auto;
background:white;
padding:30px;
border-radius:15px;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.form-box input,
.form-box textarea{
width:100%;
padding:14px;
margin:12px 0;
border:1px solid #ccc;
border-radius:8px;
}

footer{
background:#0b3d91;
color:white;
text-align:center;
padding:20px;
}
```

---

# 3. css/login.css

```css
.modal{
display:none;
position:fixed;
z-index:2000;
left:0;
top:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
}

.modal-content{
background:white;
width:90%;
max-width:400px;
margin:8% auto;
padding:30px;
border-radius:15px;
position:relative;
}

.modal-content input{
width:100%;
padding:14px;
margin:10px 0;
border:1px solid #ccc;
border-radius:8px;
}

.close{
position:absolute;
right:15px;
top:10px;
font-size:28px;
cursor:pointer;
}
```

---

# 4. js/script.js

```javascript
function scrollToEnroll(){

document.getElementById("enroll")
.scrollIntoView();

}

function openLogin(){

document.getElementById("loginModal")
.style.display="block";

}

function closeLogin(){

document.getElementById("loginModal")
.style.display="none";

}

function openRegister(){

document.getElementById("registerModal")
.style.display="block";

}

function closeRegister(){

document.getElementById("registerModal")
.style.display="none";

}

window.onclick=function(event){

let loginModal =
document.getElementById("loginModal");

let registerModal =
document.getElementById("registerModal");

if(event.target==loginModal){
closeLogin();
}

if(event.target==registerModal){
closeRegister();
}

}
```

---

# 5. js/auth.js

```javascript
const API_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL";

window.registerUser = async function(){

const name =
document.getElementById("registerName").value;

const email =
document.getElementById("registerEmail").value;

const password =
document.getElementById("registerPassword").value;

const response = await fetch(API_URL, {

method: "POST",
body: JSON.stringify({

action: "register",
name: name,
email: email,
password: password

})

});

const result = await response.json();

if(result.status == "success"){

alert("Registration Successful");
closeRegister();

}else{

alert(result.message);

}

}

window.loginUser = async function(){

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const response = await fetch(API_URL, {

method: "POST",
body: JSON.stringify({

action: "login",
email: email,
password: password

})

});

const result = await response.json();

if(result.status == "success"){

localStorage.setItem("user", JSON.stringify(result.user));

alert("Login Successful");
window.location.href = "dashboard.html";

}else{

alert("Invalid Email or Password");

}

}
```

---

# 6. Google Apps Script Backend

```javascript
import {
auth
} from './firebase-config.js';

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.registerUser = function(){

const email =
document.getElementById("registerEmail").value;

const password =
document.getElementById("registerPassword").value;

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential)=>{

alert("Registration Successful");
closeRegister();

})
.catch((error)=>{

alert(error.message);

});

}

window.loginUser = function(){

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

signInWithEmailAndPassword(auth, email, password)
.then((userCredential)=>{

alert("Login Successful");
window.location.href = "dashboard.html";

})
.catch((error)=>{

alert(error.message);

});

}
```

---

# 7. dashboard.html

```html
<!DOCTYPE html>
<html>
<head>
<title>Student Dashboard</title>
<link rel="stylesheet" href="css/dashboard.css">
</head>
<body>

<div class="dashboard">

<h1>Welcome To RISING CLASSES</h1>

<div class="dashboard-cards">

<div class="dashboard-card">
<h2>Attendance</h2>
<p>92%</p>
</div>

<div class="dashboard-card">
<h2>Fees Status</h2>
<p>Paid</p>
</div>

<div class="dashboard-card">
<h2>Notes</h2>
<p>Available</p>
</div>

</div>

</div>

</body>
</html>
```

---

# 8. css/dashboard.css

```css
body{
font-family:Arial;
background:#f5f7fb;
padding:40px;
}

.dashboard h1{
text-align:center;
margin-bottom:40px;
color:#0b3d91;
}

.dashboard-cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.dashboard-card{
background:white;
padding:30px;
border-radius:15px;
text-align:center;
box-shadow:0 5px 15px rgba(0,0,0,0.1);
}
```

---

# 9. admin.html

```html
<!DOCTYPE html>
<html>
<head>
<title>Admin Panel</title>
<link rel="stylesheet" href="css/dashboard.css">
</head>
<body>

<div class="dashboard">

<h1>Admin Dashboard</h1>

<div class="dashboard-cards">

<div class="dashboard-card">
<h2>Total Students</h2>
<p>500+</p>
</div>

<div class="dashboard-card">
<h2>Teachers</h2>
<p>25</p>
</div>

<div class="dashboard-card">
<h2>Courses</h2>
<p>12</p>
</div>

</div>

</div>

</body>
</html>
```

---

# 10. Google Apps Script Code

Paste this inside Google Apps Script.

```javascript
function doPost(e) {

var sheet = SpreadsheetApp
.getActiveSpreadsheet();

var data = JSON.parse(e.postData.contents);

if(data.action == "register"){

var userSheet = sheet.getSheetByName("USERS");

userSheet.appendRow([

new Date(),
data.name,
data.email,
data.password,
"student"

]);

return ContentService
.createTextOutput(JSON.stringify({

status:"success"

}))
.setMimeType(ContentService.MimeType.JSON);

}

if(data.action == "login"){

var userSheet = sheet.getSheetByName("USERS");

var rows = userSheet
.getDataRange()
.getValues();

for(var i=1;i<rows.length;i++){

if(
rows[i][2] == data.email &&
rows[i][3] == data.password
){

return ContentService
.createTextOutput(JSON.stringify({

status:"success",
user:{
name: rows[i][1],
email: rows[i][2],
role: rows[i][4]
}

}))
.setMimeType(ContentService.MimeType.JSON);

}

}

return ContentService
.createTextOutput(JSON.stringify({

status:"failed"

}))
.setMimeType(ContentService.MimeType.JSON);

}

if(data.action == "enroll"){

var studentSheet = sheet
.getSheetByName("STUDENTS");

studentSheet.appendRow([

new Date(),
data.name,
data.email,
data.phone,
data.course

]);

return ContentService
.createTextOutput(JSON.stringify({

status:"success"

}))
.setMimeType(ContentService.MimeType.JSON);

}

}
```

---

# 11. README.md

```md
# RISING CLASSES

Modern Tuition Classes Website.

## Features

- Student Login/Register
- Google Sheets Database
- Student Dashboard
- Admin Panel
- Responsive Design
- GitHub Compatible

## Technologies Used

- HTML
- CSS
- JavaScript
- Google Apps Script + Google Sheets
- GitHub Pages
      ↓
HTML/CSS/JavaScript
      ↓
Google Apps Script
      ↓
Google Sheets Database

## Step 3
Paste your Google Apps Script Web App URL inside:

```javascript
js/auth.js
```

and also in:

```javascript
js/script.js
```

Then upload project to GitHub and enable GitHub Pages.

---

# Final Architecture

```text
GitHub Pages
      ↓
HTML/CSS/JavaScript
      ↓
Firebase Authentication
      ↓
Firestore Database
```

---

# Dynamic Student & Teacher Image Management Using Google Sheets

You wanted:
- Student images managed dynamically
- Teacher images managed dynamically
- Image filename and details stored in Google Sheets
- Images automatically shown on website

This is the best structure for GitHub hosting.

---

# Recommended Image Folder Structure

```text
RISING-CLASSES/
│
├── images/
│   │
│   ├── teachers/
│   │   ├── teacher1.jpg
│   │   ├── teacher2.jpg
│   │   └── teacher3.jpg
│   │
│   ├── students/
│   │   ├── student1.jpg
│   │   ├── student2.jpg
│   │   └── student3.jpg
│   │
│   └── banners/
│       └── hero-banner.jpg
```

---

# TEACHERS Sheet Structure

Create sheet named:

```text
TEACHERS
```

| ID | Name | Subject | Experience | Image |
|---|---|---|---|---|
| 1 | Rajesh Sir | Mathematics | 10 Years | teacher1.jpg |
| 2 | Anita Ma'am | Physics | 8 Years | teacher2.jpg |
| 3 | Rakesh Sir | Chemistry | 7 Years | teacher3.jpg |

---

# STUDENTS_TOPPERS Sheet Structure

Create sheet named:

```text
STUDENTS_TOPPERS
```

| ID | Name | Marks | Rank | Image |
|---|---|---|---|---|
| 1 | Priya | 96% | State Rank | student1.jpg |
| 2 | Rahul | 95% | Science Topper | student2.jpg |
| 3 | Sneha | 94% | Maths Topper | student3.jpg |

---

# Google Apps Script API For Teachers & Students

```javascript
function doGet(e){

var action = e.parameter.action;

var ss = SpreadsheetApp.getActiveSpreadsheet();

if(action == "teachers"){

var sheet = ss.getSheetByName("TEACHERS");

var data = sheet.getDataRange().getValues();

var result = [];

for(var i=1;i<data.length;i++){

result.push({

id: data[i][0],
name: data[i][1],
subject: data[i][2],
experience: data[i][3],
image: data[i][4]

});

}

return ContentService
.createTextOutput(JSON.stringify(result))
.setMimeType(ContentService.MimeType.JSON);

}

if(action == "students"){

var sheet = ss.getSheetByName("STUDENTS_TOPPERS");

var data = sheet.getDataRange().getValues();

var result = [];

for(var i=1;i<data.length;i++){

result.push({

id: data[i][0],
name: data[i][1],
marks: data[i][2],
rank: data[i][3],
image: data[i][4]

});

}

return ContentService
.createTextOutput(JSON.stringify(result))
.setMimeType(ContentService.MimeType.JSON);

}

}
```

---

# Dynamic Teacher Loading JavaScript

Create file:

```text
js/load-teachers.js
```

```javascript
const API_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";

async function loadTeachers(){

const response = await fetch(
API_URL + "?action=teachers"
);

const teachers = await response.json();

const container =
document.getElementById("teacherContainer");

container.innerHTML = "";

teachers.forEach(teacher=>{

container.innerHTML += `

<div class="card">

<img src="images/teachers/${teacher.image}">

<h3>${teacher.name}</h3>

<p>${teacher.subject}</p>

<p>${teacher.experience}</p>

</div>

`;

});

}

loadTeachers();
```

---

# Dynamic Student Loading JavaScript

Create file:

```text
js/load-students.js
```

```javascript
const API_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";

async function loadStudents(){

const response = await fetch(
API_URL + "?action=students"
);

const students = await response.json();

const container =
document.getElementById("studentContainer");

container.innerHTML = "";

students.forEach(student=>{

container.innerHTML += `

<div class="card">

<img src="images/students/${student.image}">

<h3>${student.name}</h3>

<p>${student.marks}</p>

<p>${student.rank}</p>

</div>

`;

});

}

loadStudents();
```

---

# Update Teachers Section In index.html

```html
<section id="teachers">

<h2 class="section-title">
Our Teachers
</h2>

<div class="card-container"
id="teacherContainer">
</div>

</section>
```

---

# Update Students Section In index.html

```html
<section id="students">

<h2 class="section-title">
Top Students
</h2>

<div class="card-container"
id="studentContainer">
</div>

</section>
```

---

# Add Scripts In index.html

```html
<script src="js/load-teachers.js"></script>
<script src="js/load-students.js"></script>
```

---

# Final Working Flow

```text
Teacher Image → images/teachers/
                    ↓
Image Name Stored In Google Sheet
                    ↓
JavaScript Reads Google Sheet
                    ↓
Website Automatically Shows Teachers
```

---

# Benefits Of This Structure

- Easy updates from Google Sheets
- No HTML changes needed
- GitHub compatible
- Local images load fast
- Dynamic student and teacher cards

---

# Future Improvements

- Online Classes
- Student Result System
- Payment Gateway
- Attendance System
- WhatsApp Notifications
- Teacher Dashboard
- Dark Mode
- AI Chat Assistant


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

window.enrollSubmit = async function(){

let studentName =  document.getElementById("studentName").value;
let studentEmail = document.getElementById("studentEmail").value;
let studentPhone = document.getElementById("studentPhone").value;
let studentCourse = document.getElementById("studentCourse").value;

const response = await fetch(API_URL, {

method: "POST",
body: JSON.stringify({
action : "enroll",
studentName: studentName,
studentEmail: studentEmail,
studentPhone: studentPhone,
studentCourse:studentCourse,


})

});
const result = await response.json();

if(result.status == "success"){

document.getElementById("studentName").value = "";
document.getElementById("studentEmail").value = "";
document.getElementById("studentPhone").value = "";
document.getElementById("studentCourse").value = "";
window.location.href = "#home";
alert("Enrolled Successful!");
closeRegister();

}else{

alert(result.message);

}

}

window.logout = async function(){

alert("Visit again. Thank you");
window.location.href = "index.html";



}

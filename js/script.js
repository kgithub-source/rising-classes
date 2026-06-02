function scrollToEnroll(){

document.getElementById("enroll")
.scrollIntoView();

}

function openLogin(){

document.getElementById("loginModal").style.display="block";

//document.getElementById("loginModal").style.display="block";

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




// setInterval(() => {

//     const container =
//     document.getElementById("teacherContainer");

//     container.scrollBy({
//         left:300,
//         behavior:"smooth"
//     });

// },3000);


const slides = document.querySelectorAll(".bg-slide");

const dotsContainer = document.querySelector(".dots");

let current = 0;
let interval;

slides.forEach((slide,index)=>{

    const dot =
    document.createElement("span");

    dot.classList.add("dot");

    if(index===0)
        dot.classList.add("active");

    dot.onclick=()=>{

        showSlide(index);

        restartSlider();

    };

    dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".dot");

function showSlide(index){

    slides.forEach(s=>
        s.classList.remove("active")
    );

    dots.forEach(d=>
        d.classList.remove("active")
    );

    slides[index].classList.add("active");

    dots[index].classList.add("active");

    current=index;

}

function nextSlide(){

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

}

function startSlider(){

    interval=setInterval(nextSlide,4000);

}

function stopSlider(){

    clearInterval(interval);

}

function restartSlider(){

    stopSlider();

    startSlider();

}

document.querySelector(".hero").addEventListener("mouseenter",stopSlider);

document.querySelector(".hero").addEventListener("mouseleave",startSlider);

startSlider();


// var API_URL_TEACHER = "https://script.google.com/macros/s/AKfycbzpdmJuV9YbV_vQoechiWdYelMzSMQLxABhvn2gB1DLy539TvT_Ysng3a3BCEAzX2ZduQ/exec";
var API_URL_TEACHER = "https://script.google.com/macros/s/AKfycbzhs794y2DjQ5IpSjo5l8iCvgEvGD1yplkURvSN0LcT-V8THFS0r2Nz__hCndXzWSelPw/exec";
async function loadTeachers(){

const response =
await fetch(API_URL_TEACHER + "?action=teachers");

const teachers =
await response.json();

const container = document.getElementById("teacherContainer");

container.innerHTML = "";

teachers.forEach(teacher=>{

container.innerHTML += `

<div class="card">

<img  src="images/teachers/${teacher.image}" alt="${teacher.name}">
<h3>${teacher.name}</h3>

<p> <strong>Specialist:</strong>${teacher.subject}</p>

<p><strong>Education:</strong>${teacher.experience}</p>

<p>${teacher.description}</p>

</div>

`;

});

}


function scrollTeachers(direction){

    const container =
    document.getElementById("teacherContainer");

    container.scrollBy({

        left: direction * 320,
        behavior: "smooth"

    });

}

loadTeachers();
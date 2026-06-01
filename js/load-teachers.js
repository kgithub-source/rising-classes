var API_URL =
"https://script.google.com/macros/s/AKfycbxBJ9N4qzHqRHTbmPQs9cJBphkvDMRxOjXCMSmjMMm0XYX44Pr-0y6vpXIgrWuDks9VGg/exec";

async function loadTeachers(){

const response =
await fetch(API_URL + "?action=teachers");

const teachers =
await response.json();

const container =
document.getElementById("teacherContainer");

container.innerHTML = "";

teachers.forEach(teacher=>{

container.innerHTML += `

<div class="card">

<img
src="images/teachers/${teacher.image}"
alt="${teacher.name}">

<h3>${teacher.name}</h3>

<p>
<strong>Subject:</strong>
${teacher.subject}
</p>

<p>
<strong>Education:</strong>
${teacher.experience}
</p>

<p>
${teacher.description}
</p>

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
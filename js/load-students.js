var API_URL_STUDENTS = "https://script.google.com/macros/s/AKfycbzpdmJuV9YbV_vQoechiWdYelMzSMQLxABhvn2gB1DLy539TvT_Ysng3a3BCEAzX2ZduQ/exec"



async function loadStudents(){

const response =
await fetch(API_URL_STUDENTS + "?action=students");

const students =
await response.json();
debugger;
const container =
document.getElementById("studentContainer");

container.innerHTML = "";

students.forEach(student=>{

    // <img
// src="images/students/${student.image}"
// alt="${student.name}">

container.innerHTML += `

<div class="card">

<h3>${student.name}</h3>

<p>
<strong>Marks:</strong>
${student.marks}
</p>

<p>
<strong>Rank:</strong>
${student.rank}
</p>

<p>
${student.description}
</p>

</div>

`;

});

}

function scrollStudents(direction){

    const container =
    document.getElementById("studentContainer");

    container.scrollBy({

        left: direction * 320,
        behavior: "smooth"

    });

}


loadStudents();
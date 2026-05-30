const STUDENT_API_URL =
"https://script.google.com/macros/s/AKfycbxBJ9N4qzHqRHTbmPQs9cJBphkvDMRxOjXCMSmjMMm0XYX44Pr-0y6vpXIgrWuDks9VGg/exec";

async function loadStudents(){

const response =
await fetch(API_URL + "?action=students");

const students =
await response.json();
debugger;
const container =
document.getElementById("studentContainer");

container.innerHTML = "";

students.forEach(student=>{

container.innerHTML += `

<div class="card">

<img
src="images/students/${student.image}"
alt="${student.name}">

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

loadStudents();
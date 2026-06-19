// var API_URL_STUDENTS = "https://script.google.com/macros/s/AKfycbzpdmJuV9YbV_vQoechiWdYelMzSMQLxABhvn2gB1DLy539TvT_Ysng3a3BCEAzX2ZduQ/exec"
var API_URL_STUDENTS = "https://script.google.com/macros/s/AKfycbzhs794y2DjQ5IpSjo5l8iCvgEvGD1yplkURvSN0LcT-V8THFS0r2Nz__hCndXzWSelPw/exec";



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

<div class="card-students">

<div class='info-student'>
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
</div>

`;

});

}



function scrollStudents(direction){

    const container =
    document.getElementById(
        "studentContainer"
    );

    if(window.innerWidth <= 768){

        if(direction > 0){

            const first =
            container.firstElementChild;

            container.appendChild(first);

        }
        else{

            const cards =
            container.children;

            container.insertBefore(
                cards[cards.length-1],
                cards[0]
            );

        }

    }
    else{

        container.scrollBy({

            left: direction * 320,

            behavior:"smooth"

        });

    }

}
loadStudents();





function enableStudentSwipe(){

    const container =
    document.getElementById("studentContainer");

    let startX = 0;

    container.addEventListener(
        "touchstart",
        (e)=>{

            startX =
            e.touches[0].clientX;

        },
        {passive:true}
    );

    container.addEventListener(
        "touchend",
        (e)=>{

            const endX =
            e.changedTouches[0].clientX;

            const diff =
            startX - endX;

            if(Math.abs(diff) < 50)
                return;

            if(diff > 0){

                const first =
                container.firstElementChild;

                container.appendChild(first);

            }
            else{

                const cards =
                container.children;

                container.insertBefore(
                    cards[cards.length - 1],
                    cards[0]
                );

            }

        }
    );

}

enableStudentSwipe()
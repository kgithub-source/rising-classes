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

<div class="card-teacher">

<img  src="images/teachers/${teacher.image}" alt="${teacher.name}">
<div class='teacher-info'>
<h3>${teacher.name}</h3>

<p> <strong>Specialist:</strong>${teacher.subject}</p>

<p><strong>Education:</strong>${teacher.experience}</p>

<p>${teacher.description}</p>
</div>

</div>

`;

});

}


function scrollTeachers(direction){

    const container =
    document.getElementById(
        "teacherContainer"
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

loadTeachers();



// function enableSwipe(containerId){

//     const slider =
//     document.getElementById(containerId);

//     let isDown = false;
//     let startX;
//     let scrollLeft;

//     slider.addEventListener("mousedown",(e)=>{

//         isDown = true;

//         startX =
//         e.pageX - slider.offsetLeft;

//         scrollLeft =
//         slider.scrollLeft;

//     });

//     slider.addEventListener("mouseleave",()=>{

//         isDown = false;

//     });

//     slider.addEventListener("mouseup",()=>{

//         isDown = false;

//     });

//     slider.addEventListener("mousemove",(e)=>{

//         if(!isDown) return;

//         e.preventDefault();

//         const x =
//         e.pageX - slider.offsetLeft;

//         const walk =
//         (x - startX) * 2;

//         slider.scrollLeft =
//         scrollLeft - walk;

//     });

// }




// enableSwipe("teacherContainer")



function enableTeacherSwipe(){

    const container =
    document.getElementById("teacherContainer");

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

enableTeacherSwipe()
async function loadEnrollments(){

    const response =
    await fetch(
        API_URL +
        "?action=getEnrollments"
    );

    const students =
    await response.json();

    const tbody =
    document.querySelector(
        "#studentTable tbody"
    );

    tbody.innerHTML = "";

    students.forEach(student => {

    const enrollDate = new Date(student.Date);

    const formattedDate =
        enrollDate.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });

        tbody.innerHTML += `
            <tr>
                <td>${student.ID}</td>
                <td>${student.Name}</td>
                <td>${student.Email}</td>
                <td>${student.Phone}</td>
                <td>${student.Course}</td>
                <td>${formattedDate}</td>
            </tr>
        `;
    });
}


window.logout = async function(){

alert("Visit again. Thank you");
sessionStorage.removeItem(
        "adminEmail"
    );

    window.location.href =
    "index.html";



}


// function logout(){

//     sessionStorage.removeItem(
//         "adminEmail"
//     );

//     window.location.href =
//     "index.html";

// }

loadEnrollments();
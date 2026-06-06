// var API_URL = "https://script.google.com/macros/s/AKfycbxBJ9N4qzHqRHTbmPQs9cJBphkvDMRxOjXCMSmjMMm0XYX44Pr-0y6vpXIgrWuDks9VGg/exec";


// var API_URL = "https://script.google.com/macros/s/AKfycbymfxeSeBY_Ume3vKKrGmlNw_CGlmkNK6Vz6xwSNNCrs3Ur2on1yzv2wWX9DL-NDYZqvw/exec"

// var API_URL = "https://script.google.com/macros/s/AKfycbzZBP4hcRNr9ZIT56H9j-V8uPoDRBj9Cx_SiJDN67UksGmPHk_leAWFFml3KapOeQE8Xw/exec"


var API_URL = "https://script.google.com/macros/s/AKfycbzhs794y2DjQ5IpSjo5l8iCvgEvGD1yplkURvSN0LcT-V8THFS0r2Nz__hCndXzWSelPw/exec";



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

// if(result.status == "success"){

// localStorage.setItem("user", JSON.stringify(result.user));

// alert("Login Successful");
// window.location.href = "dashboard.html";

if(result.status === "success"){

    sessionStorage.setItem(
        "adminEmail",
        result.email
    );

    window.location.href =
    "dashboard.html";



}else{

alert("Invalid Email or Password");

}

}
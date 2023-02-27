
function validates(){
    let fname= document.getElementById("fname").value;
let lname= document.getElementById("lname").value;
let email= document.getElementById("email").value;
let phone= document.getElementById("phone").value;
let password= document.getElementById("password").value;
let confirm= document.getElementById("confirm").value;


if (password == confirm){
    localStorage.setItem("fname",fname);
    localStorage.setItem("lname",lname);
    localStorage.setItem("password",password);
    if(email.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)){
        localStorage.setItem("email",email);
    }
    if(password.match(/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&-]).{8,}$/)){
        localStorage.setItem("password",password);
    }
    if(confirm.match(/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&-]).{8,}$/)){
        localStorage.setItem("confirm",confirm);
    }
    if(phone.match(/[+]?\d{3}[-]?[7][789]\d{7}/g)){
        localStorage.setItem("phone",phone);
    }
}
else {
    alert("The passwords do not match");
    locationl.href='regist.html';
};

}
document.getElementById("name-wel").innerHTML=localStorage.getItem("fname")+"  "+localStorage.getItem("lname");

function Log(){

    var num = document.getElementById("user").value;
    var num2 = document.getElementById("password1").value;
    if (localStorage.getItem('score') != null){
        if (num == localStorage.getItem('email') && num2 == localStorage.getItem('password')){
            
            if(localStorage.getItem('score') > 10){
                location.href= "../html/ResultsPage.html"
            }
            else {
                location.href="../html/ResultsPageFailed.html"
            }
           }
           else {
            alert("Email and password do not match!")
           }

    }
    else if (localStorage.getItem('score') == null){
        if (num == localStorage.getItem('email') && num2 == localStorage.getItem('password')){
            location.href='../html/welcome.html';
           }
           else{
            location.href='../html/regist.html';
            alert("You're not registered!")
           }
    }
//    if (num == localStorage.getItem('email') && num2 == localStorage.getItem('password')){
//     location.href='/welcome.html';
//    }
//    else{
//     location.href='log.html';
//     alert("You're not registered!")
//    }
   }
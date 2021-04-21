// addition function //

var addAns = document.getElementById("addAns");
var addBtn = document.getElementById("addBtn");

function addFunc() {
    var num1 = JSON.parse(document.getElementById("addNum1").value);
    var num2 = JSON.parse(document.getElementById("addNum2").value);
    var ans = num1 + num2;
    console.log(ans);
    addAns.textContent = ans;
}

addBtn.addEventListener("click", addFunc);

// subtraction function //

var subAns = document.getElementById("subAns");
var subBtn = document.getElementById("subBtn");

function subFunc() {
    var num1 = JSON.parse(document.getElementById("subNum1").value);
    var num2 = JSON.parse(document.getElementById("subNum2").value);
    var ans = num1 - num2;
    console.log(ans);
    subAns.textContent = ans;
}

subBtn.addEventListener("click", subFunc);

// multiplication function //

var multAns = document.getElementById("multAns");
var multBtn = document.getElementById("multBtn");

function multFunc() {
    var num1 = JSON.parse(document.getElementById("multNum1").value);
    var num2 = JSON.parse(document.getElementById("multNum2").value);
    var ans = num1 * num2;
    console.log(ans);
    multAns.textContent = ans;
}

multBtn.addEventListener("click", multFunc);

// division function //

var divAns = document.getElementById("divAns");
var divBtn = document.getElementById("divBtn");

function divFunc() {
    var num1 = JSON.parse(document.getElementById("divNum1").value);
    var num2 = JSON.parse(document.getElementById("divNum2").value);
    var ans = num1 * num2;
    console.log(ans);
    divAns.textContent = ans;
}

divBtn.addEventListener("click", divFunc);
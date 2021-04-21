var ans = document.getElementById("ans");
var btn = document.getElementById("btn");

function oddOrEven() {
    var num = document.getElementById("num").value;

    if (num % 2 === 0) {
        ans.textContent = "even";
    } else {
        ans.textContent = "odd";
    }
};

btn.addEventListener("click", oddOrEven);
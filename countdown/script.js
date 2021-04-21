var ans = document.getElementById("ans");
var btn = document.getElementById("btn");

function countdown() {
    var num = document.getElementById("num").value;

    if (num > 1){
        for (var i = num; i > 0; i--) {
            console.log(i);
        }
    
        ans.textContent = "open console to see the magic";
    }
    else {
        ans.textContent = "enter a number above 1"
    }
    
};

btn.addEventListener("click", countdown);
var ans = document.getElementById("ans");
var btn = document.getElementById("btn");

function logEvenNums() {
    var num = document.getElementById("num").value;

    if (num > 1){
        for (var i = 0; i <= num; i++) {
            if (i%2 === 0) {
                console.log(i);
            }
        }
    
        ans.textContent = "open console to see the magic";
    }
    else {
        ans.textContent = "enter a positive number"
    }
    
};

btn.addEventListener("click", logEvenNums);
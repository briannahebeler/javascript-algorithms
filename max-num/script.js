var ans = document.getElementById("ans");
var btn = document.getElementById("btn");

function maxNum() {
    var num1 = JSON.parse(document.getElementById("num1").value);
    var num2 = JSON.parse(document.getElementById("num2").value);
    var num3 = JSON.parse(document.getElementById("num3").value);
    var num4 = JSON.parse(document.getElementById("num4").value);
    var arr = [num1, num2, num3, num4]

    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log(max);
    ans.textContent = max;
    
};

btn.addEventListener("click", maxNum);
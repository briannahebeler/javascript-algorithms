var ans = document.getElementById("ans");
var btn = document.getElementById("btn");

function sumArray() {
    var num1 = JSON.parse(document.getElementById("num1").value);
    var num2 = JSON.parse(document.getElementById("num2").value);
    var num3 = JSON.parse(document.getElementById("num3").value);
    var num4 = JSON.parse(document.getElementById("num4").value);

    var arr = [num1, num2, num3, num4]

    result = 0;
    for (var i = 0; i < arr.length; i++) {
        number = arr[i];
        result += number;
    }

    console.log(result);
    ans.textContent = result;
    
};

btn.addEventListener("click", sumArray);
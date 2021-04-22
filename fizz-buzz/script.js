var ans = document.getElementById("ans");
var btn = document.getElementById("btn");

function fizzbuzz() {
    var num1 = JSON.parse(document.getElementById("num1").value);
    var num2 = JSON.parse(document.getElementById("num2").value);
    var num3 = JSON.parse(document.getElementById("num3").value);
    var num4 = JSON.parse(document.getElementById("num4").value);

    var arr = [num1, num2, num3, num4]

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            console.log("Fizz Buzz");
        }
        else if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
            console.log("Fizz");
        }
        else if (arr[i] % 3 !== 0 && arr[i] % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(arr[i]);
        }
    }

    ans.textContent = "open console to see the magic";
    
};

btn.addEventListener("click", fizzbuzz);
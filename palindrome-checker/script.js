var ans = document.getElementById("ans");
var btn = document.getElementById("btn");

function isPalindrome() {
    var string = document.getElementById("string").value.toLowerCase();
    var result;
    if (string.split("").reverse().join("") === string) {
        result = true;
    } else {
        result = false;
    }

    console.log(result);
    ans.textContent = result;
    
};

btn.addEventListener("click", isPalindrome);
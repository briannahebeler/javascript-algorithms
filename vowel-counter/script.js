var ans = document.getElementById("ans");
var btn = document.getElementById("btn");

function vowelCounter() {
    var string = document.getElementById("string").value.toLowerCase();

    var count = 0;
    var vowelArr = ["a", "e", "i", "o", "u"];

    for (var i = 0; i < string.length; i++) {
        if (vowelArr.includes(string[i])) {
            count++;
        }
    }
    console.log(count);
    ans.textContent = count;
    
};

btn.addEventListener("click", vowelCounter);
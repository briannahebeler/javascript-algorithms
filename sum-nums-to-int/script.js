var ans = document.getElementById("ans");
var btn = document.getElementById("btn");

function sumTotal() {
    var num = JSON.parse(document.getElementById("num").value);

    var sum = 0;

    for (var i = 0; i <= num; i++) {
        sum += i;
    }

    console.log(sum);
    ans.textContent = sum;
    
};

btn.addEventListener("click", sumTotal);
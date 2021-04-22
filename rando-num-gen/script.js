$(document).ready(function() {

    var ans = $("#ans");
    var btn = $("#btn");

    function randoNum() {
        var num = Math.floor(Math.random() * 1000) +1;
        ans.html("<br><hr>" + num);
    };

    btn.on("click", randoNum);

});
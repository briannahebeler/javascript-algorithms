$(document).ready(function() {

    var ans = $("#ans");
    var btn = $("#btn");

    function lottoNum() {
        var num = Math.floor(Math.random() * 1000) +1;
        ans.text(num);

        var lottoNumber = "";
        for (var i = 0; i < 9; i++) {
            var random = Math.floor(Math.random() * 10);
            lottoNumber = lottoNumber + random;
        }
        ans.html("<br><hr>" + lottoNumber);
    };

    btn.on("click", lottoNum);

});
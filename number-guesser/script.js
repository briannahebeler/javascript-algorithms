$(document).ready(function () {

    
    function numGuess() {
        var computerPick = Math.floor(Math.random() * 4) + 1;
        var userPick = $(this).val();
        console.log(userPick);
        $("#computer-pick").text(computerPick);
        if (parseInt(userPick) === parseInt(computerPick)) {
            $("#result").text("You win!");
        } else {
            $("#result").text("You lost!");
        }
    }

    $(".btn-choice").on("click", numGuess);

});
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

});

function pairCheck (card1, card2) {
    if (card1 === card2) {
        console.log("match!")
    } else {
        console.log("try again")
    }
}

$(".back").click(function() {
    $(".card").css("display", "none")
})
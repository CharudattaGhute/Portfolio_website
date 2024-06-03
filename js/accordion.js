$(document).ready(function () {
    $(".card-heading").click(function () {
    // self clicking close
    if ($(this).next(".card-body").hasClass("active")) {
        $(this).next(".card-body").removeClass("active").slideUp();
        $(this).children("i").removeClass("fa-minus").addClass("fa-plus");
    } else {
        $(".accordion-card .card-body").removeClass("active").slideUp();
        $(".accordion-card .card-heading i").removeClass("fa-minus").addClass("fa-plus");
        $(this).next(".card-body").addClass("active").slideDown();
        $(this).children("i").removeClass("fa-plus").addClass("fa-minus");
    }
    });
});

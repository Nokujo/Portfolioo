document.addEventListener('DOMContentLoaded', function() {
    const presentationScreen = document.getElementById('presentation-screen');

    
    function hidePresentation() {
        presentationScreen.classList.add('hidden');
    }

    document.addEventListener('mousemove', hidePresentation);
    document.addEventListener('scroll', hidePresentation);

    
    setTimeout(hidePresentation, 5000); 
});

const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});
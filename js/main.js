$(document).ready(function() {

    const videoSrc = $(".player-1").attr("src");

    $(".video-play-btn,.video-popup").on("click", function() {

        if ($(".video-popup").hasClass("active")) {

            $(".video-popup").removeClass("active");
            $(".player-1").attr("src", "");
        } else {
            $(".video-popup").addClass("active");

            if ($(".player-1").attr("src") == '') {
                $(".player-1").attr("src", videoSrc);
            }
        }
    });


    $(window).on("scroll", function() {

        if ($(this).scrollTop() > 90) {
            $('.navbar').addClass("shrink");
        } else {
            $('.navbar').removeClass("shrink");
        }
    });

    // owl carousel feature section

    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,

            }
        }
    });
    // ===================== 
    // screenshot carousel 
    $('.screenshot-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 4,

            }
        }
    });
    // ================ 
    // testimonial carousel 
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,

            }
        }
    });
    // -----------------team carousel ------------------
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,

            }
        }
    });

    // ============== 
    // scroll it
    $(function() {
        $.scrollIt({
            topOffset: 50
        });
    });

    // =================== 
    $(".nav-link").click(function() {

        $(".navbar-collapse").collapse("hide");
    });
    // ===================== theme light and dark --------------- 

    function toggleTheme() {

        updateIcon();
        $("body").toggleClass("dark");
    };


    function updateIcon() {

        if ($("body").hasClass("dark")) {

            $(".toggle-theme i").addClass("fa-moon");
            $(".toggle-theme i").removeClass("fa-sun");
        } else {

            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
    }

    $(".toggle-theme").click(toggleTheme);
})
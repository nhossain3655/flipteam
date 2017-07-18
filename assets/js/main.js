



//Team Carousal
$(".team-carousel").owlCarousel({
    items: 4,
    margin: 30,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        900: {
            items: 4
        },
        1000: {
            items: 4
        }
    }
});





document.addEventListener("DOMContentLoaded", function () {

    var multipleCardCarousel = document.querySelector("#carouselExampleControls");

    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false,
        });
        var carouselInner = document.querySelector("#carouselExampleControls .carousel-inner");
        var carouselItems = document.querySelectorAll("#carouselExampleControls .carousel-item");
        var carouselWidth = carouselInner.scrollWidth;
        var cardWidth = carouselItems[0].offsetWidth;
        var scrollPosition = 0;

        document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                carouselInner.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth"
                });
            }
        });

        document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                carouselInner.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth"
                });
            }
        });
    } else {
        multipleCardCarousel.classList.add("slide");
    }

});

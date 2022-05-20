$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navi').addClass("sticky");
        }else{
            $('.navi').removeClass("sticky");
        }
    });   
// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Hello there", "Welcome to TikiTaka of Futbol"],
    typeSpeed: 10,
    backSpeed: 10,
    loop: true
});
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
});
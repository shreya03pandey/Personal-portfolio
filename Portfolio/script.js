$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
         $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        
    });
    $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
    })
})
var typed= new Typed(".typing",{
    strings:["Student","Problem Solver","Web Developer"],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true
});
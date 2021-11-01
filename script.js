$(document).ready(function(){
    $(window).scroll(function(){
    
        if(this.scrollY > 20){
            $('.header').addClass("sticky");
        }else{
            $('.header').removeClass("sticky");
        }
    });
});

let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.toggle('active');
}
window.onscroll =() =>{
    navbar.classList.remove('active');
}
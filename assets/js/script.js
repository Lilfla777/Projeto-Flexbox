
window.onload = function(){
    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex'){
            document.querySelector(".menu nav ul").style.display = 'none';
        } else{
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    } );
};




//SCROLL ANIMADO

const sections = document.querySelectorAll('.js-scroll');
const metade = window.innerHeight * 0.7;
function animaScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - metade < 0);
        if (isSectionVisible) {
            section.classList.add('ativarScroll');
        } else {
            section.classList.remove('ativarScroll')
        }
    })
}
window.addEventListener('scroll', animaScroll);
animaScroll();

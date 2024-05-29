





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

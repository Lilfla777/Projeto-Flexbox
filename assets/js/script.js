
window.onload = function(){
    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex'){
            document.querySelector(".menu nav ul").style.display = 'none';
        } else{
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    } );
};


const imgs = document.querySelectorAll('.js-img');
//console.log(imgs);
const desc = document.querySelectorAll('.js-desc');
//console.log(desc)

function menuTab() {
    //Serve para sempre manter o primeiro elemento visivel, já que o display é none e os elementos estao ocultados;
    desc[0].classList.add('ativo');

    //Essa função ativa um loop onde adiciona a classe 'ativo' no item clicado e remove das outras;
    function activeTab(index) {
        desc.forEach((item) => {
            item.classList.remove('ativo')
        });
        desc[index].classList.add('ativo');

    }
    //essa função para adicionar o item a ser clicado e revelar o conteudo
    //faz um loop no item pai, adiiconando eveneto de click para cada um, ativando a função ao clicar

    imgs.forEach((title, index) => {
        title.addEventListener('click', function () {
            activeTab(index);
        })
    })
}
menuTab();

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

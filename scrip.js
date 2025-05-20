const slides = document.querySelectorAll('.slide');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');
let slideatual =0;

function mostrarSlide(index){
    slides.forEach((slide, i) => {
        slide.classList.remove('ativa');
        if (i === index){
            slide.classList.add('ativa');
        }
    });
}
btnProximo.addEventListener('click', () =>{
    slideatual = (slideatual+1) %slides.length;
    mostrarSlide(slideatual);
});

btnAnterior.addEventListener('click', () =>{
    slideatual = (slideatual-1 + slides.length) % slides.length;
    mostrarSlide(slideatual);
});

setInterval(() => {
  slideatual = (slideatual + 1) % slides.length;
  mostrarSlide(slideatual);
}, 4000);
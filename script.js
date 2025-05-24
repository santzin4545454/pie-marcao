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

class menutelapequena{
    constructor(menumobile, listnav, navlinks){
        this.menumobile = document.querySelector(menumobile);
        this.listnav = document.querySelector(listnav);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeclass = "active";

        this.Handleclick=this.Handleclick.bind(this);
    }

    Handleclick(){
        console.log(this);
        this.listnav.classList.toggle(this.activeclass);
    }

    addClickEvent(){
        this.menumobile.addEventListener("click", this.Handleclick );
    }

    init(){
        if(this.menumobile){
            this.addClickEvent();
        }
        return this;
    }
}

const menumobile = new menutelapequena(
    "#hamburguerimg",
    "#containermenu",
    "#containermenu li",
);
menumobile.init();
const btnFecharMenu = document.querySelector("#xis");

btnFecharMenu.addEventListener("click", () => {
    document.querySelector("#containermenu").classList.remove("active");
});
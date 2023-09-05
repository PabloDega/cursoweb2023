function saludar(){
    console.log("Hola Mundo!!!");
}

document.querySelector("#boton1").addEventListener("click", saludar);


// Eventos de Mouse

const mouse = document.querySelector("#mouseEvents");
mouse.addEventListener("click", () => {console.log("M - Click")});
mouse.addEventListener("mouseover", () => {console.log("M - Over")});
mouse.addEventListener("mouseout", () => {console.log("M - Out")});
mouse.addEventListener("mousedown", (event) => {console.log("M - Down " + event.button);});
mouse.addEventListener("mouseup", (event) => {console.log("M - Up " + event.button)});
mouse.addEventListener("wheel", () => {console.log("M - Rueda")});
mouse.addEventListener("mousemove", (event) => {
    // console.log(event.offsetY)
    coord.textContent = "Y"+event.offsetY+" / X"+event.offsetX ;
});
let coord = document.querySelector("#mouseEvents>span");
mouse.addEventListener("contextmenu", (event) => {event.preventDefault()});

// Eventos de Teclado

const input = document.querySelector("#texto");
input.addEventListener("keydown", () => {console.log("T - Abajo")});
input.addEventListener("keyup", () => {console.log("T - Arriba")});
input.addEventListener("keypress", () => {console.log("T - Apretada")});

const input2 = document.querySelector("#texto2");
input2.addEventListener("keypress", (event) => {console.log(event.key)});

const pass = document.querySelector("#pass");
let registro = "";
pass.addEventListener("keypress", (event) => {registro += event.key});

// Eventos de Foco

const foco = document.querySelector("#foco");
foco.addEventListener("focus", () => {
    console.log("F - enfocado");
    enfocado(foco);
})
foco.addEventListener("blur", () => {
    console.log("F - desenfocado");
    desenfocado(foco);
})

function enfocado(x){
    x.style.background = "lightblue";
}
function desenfocado(x){
    x.style.background = "none";
};

// UiEvents 

window.addEventListener("load", () => {console.log("Finalizó la carga del sitio")});

const ventanaScroll = document.querySelector("#uiEvents")

// Scroll
//--- Pasos previos
// ventanaScroll.addEventListener("scroll", () => {console.log("Scroll a texto")});

/* ventanaScroll.addEventListener("click", () => {console.log(ventanaScroll.scrollTop)});
ventanaScroll.addEventListener("click", () => {console.log(ventanaScroll.scrollHeight)});
ventanaScroll.addEventListener("click", () => {console.log(ventanaScroll.clientHeight)}); */

/* ventanaScroll.addEventListener("click", () => {console.log(ventanaScroll.scrollTop + ventanaScroll.clientHeight)});
ventanaScroll.addEventListener("click", () => {console.log(ventanaScroll.scrollHeight)}); */

ventanaScroll.addEventListener("click", () => {console.log(ventanaScroll.scrollHeight - (ventanaScroll.scrollTop + ventanaScroll.clientHeight))});
ventanaScroll.addEventListener("click", () => {console.log(ventanaScroll.scrollHeight - ventanaScroll.clientHeight)});
const barraLectura = document.querySelector("#barraLectura");
// const circuloScroll = document.querySelector("#circuloScroll");

// --- Final
function fondoScroll(){
    let ubicacionScroll = ventanaScroll.scrollHeight - (ventanaScroll.scrollTop + ventanaScroll.clientHeight);
    let alturaScroll = ventanaScroll.scrollHeight - ventanaScroll.clientHeight;
    let porcentualScroll = ubicacionScroll/alturaScroll;
    // console.log(porcentualScroll)
    barraLectura.style.height = ventanaScroll.clientHeight-porcentualScroll*ventanaScroll.clientHeight + "px";
    // circuloScroll.style.strokeDasharray = 252-porcentualScroll*252 + " 252";
    if(porcentualScroll == 0){
        barraLectura.style.backgroundColor = "darkblue";
        // circuloScroll.style.stroke = "darkblue";
    } else {
        barraLectura.style.backgroundColor = "blue";
        // circuloScroll.style.stroke = "blue";
    }
}

ventanaScroll.addEventListener("scroll", fondoScroll);

// Eventos Touch

const tocame = document.querySelector("#tocame");
tocame.addEventListener("touchstart", () => {console.log("T - Inico")});
tocame.addEventListener("touchmove", () => {console.log("T - Movimiento")});
tocame.addEventListener("touchend", () => {console.log("T - Fin")});


//---

/* const dibujame = document.querySelector("#dibujame");

dibujame.addEventListener("touchmove", dibujar);
function dibujar(event){
    const nodo = document.createElement("svg");
    const Y = (event.touches[0].clientY - event.target.getBoundingClientRect().top);
    const X = (event.touches[0].clientX - event.target.getBoundingClientRect().left);
    nodo.innerHTML = `<svg height="10" width="10" fill="green" style="position: absolute; top:${Y}px; left:${X}px"><circle cx="5" cy="5" r="2"/></svg>`;
    dibujame.appendChild(nodo);
}

dibujame.addEventListener("touchstart", frenarScroll);
function frenarScroll(){
    scrollTop = window.pageYOffset;
    scrollLeft = window.pageXOffset;
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

dibujame.addEventListener("touchend", activarScroll);
function activarScroll(){
    window.onscroll = function() {};
} */

/* document.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
}) */
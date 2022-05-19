var boton = document.querySelector("#btn");
var boton2 = document.querySelector("#btn2");
var body = document.querySelector("body")

var modo = true;

boton.addEventListener("click",function(){
        boton.classList.add("invisible");
        body.classList.add("modoNocturno");
        boton2.classList.remove("invisible")
});

boton2.addEventListener("click",function(){
        boton2.classList.add("invisible");
        body.classList.remove("modoNocturno");
        boton.classList.remove("invisible");
});
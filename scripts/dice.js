/* Declaracion de variables globales */
var Evaluador = 1;
var Saldo;
var Apuesta;
var Botones;
var BotonIzq;
var BotonDer;
var MensajesBotones = ["Nuevo juego","Jugar ahora","Lanzar dados","Retirarse"];

/* Inicializacion de contenedores de etiquetas */
function CargarVariables() {
    /* Por ID's */
    BotonIzq = document.getElementById("BtnIzq");
    BotonDer = document.getElementById("BtnDer");

    /* Por clases */
    Saldo = document.getElementsByClassName("Saldo");
    Apuesta = document.getElementsByClassName("Apuesta");
    Botones = document.getElementsByClassName("Botones");
}

/* Iniciar la animacion */
function MostrarAnimacion(){
    var Animacion = document.getElementById("div");
    Animacion.classList.toggle("Banner-Inicia");
    
    setTimeout(function(){
        Animacion.classList.toggle("Banner-Inicia");
    },4000);
}

/* Mostrar saldo */
function MostrarSaldo() {
    Saldo[0].style.display = "initial";
    Saldo[1].style.display = "initial";
}

/* Ocultar saldo */
function OcultarSaldo() {
    Saldo[0].style.display = "none";
    Saldo[1].style.display = "none";
}

/* Habilitar saldo */
function HabilitarSaldo(){
    Saldo[1].disabled = false;
}

/* Bloquear saldo */
function BloquearSaldo(){
    Saldo[1].disabled = true;
}

/* Mostrar apuesta */
function MostrarApuesta(){
    Apuesta[0].style.display = "initial";
    Apuesta[1].style.display = "initial";
}

/* Ocultar apuesta */
function OcultarApuesta(){
    Apuesta[0].style.display = "none";
    Apuesta[1].style.display = "none";
}

/* Habilitar apuesta */
function HabilitarApuesta(){
    Apuesta[1].disabled = false;
}

/* Deshabilitar apuesta */
function DeshabilitarApuesta(){
    Apuesta[1].disabled = true;
}

/* Mensajes boton izquierdo */
function MensajeBotonIzq() {
    BotonIzq.innerHTML = MensajesBotones[1];
}

/*Se inicio el juego*/
function InicioJuego(){
    MostrarAnimacion();
    setTimeout(() => {
        MostrarSaldo();
        HabilitarSaldo();
        OcultarApuesta();
        DeshabilitarApuesta();
        MensajeBotonIzq();    
    }, 4000);
}

/* Se ingresa el fondo y se espera lanzar los dados o retirarse */
function IngresaFondo(){
    BloquearSaldo();
    MostrarApuesta();
}

function Evaluar(){    
    switch(Evaluador){
        /*Inicio de juego*/
        case 1:
            InicioJuego();
            Evaluador++;
            break;
        /*Primer lanzamiento*/
        case 2:
            IngresaFondo();
            break;
    }
}

/*
function LanzarDados(){
    var D1 = parseInt(Math.random() * (6 - 0) + 1);
    var D2 = parseInt(Math.random() * (6 - 0) + 1);
    var Res = D1 + D2;
    
    EvaluarResultado();
}
function EvaluarResultado(Res){
    if(Res == 7 || Res == 11){
        /*Gano
    }
    if(Res == 2 || Res == 3 || Res == 12){
        /*Perdio
    }
    if(Res == 4 || Res == 5 || Res == 6 || Res == 8 || Res == 9 || Res == 10){
        /*Se establece punto
    }
}
*/
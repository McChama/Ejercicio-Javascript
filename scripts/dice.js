/* Declaracion de variables globales */
var Evaluador = 1;
var Saldo;
var Apuesta;
var Botones;
var BotonIzq;
var BotonDer;
var Columna1;
var Columna3;
var MensajesBotones = ["Nuevo juego","Jugar ahora","Lanzar dados","Retirarse"];


/* Inicializacion de contenedores de etiquetas */
function CargarVariables() {
    alert("Los scripts no han sido desarrollados en su totalidad aún");
    /* Por ID's */
    BotonIzq = document.getElementById("BtnIzq");
    BotonDer = document.getElementById("BtnDer");
    Columna1 = document.getElementById("Columna1");
    Columna3 = document.getElementById("Columna3");

    /* Por clases */
    Saldo = document.getElementsByClassName("Saldo");
    Apuesta = document.getElementsByClassName("Apuesta");
    Botones = document.getElementsByClassName("Botones");
}

/* Animaciones */
function AnimacionInicio(){
    var Animacion = document.getElementById("Animacion-Inicio");
    Animacion.classList.toggle("Banner-Inicia");
    
    setTimeout(function(){
        Animacion.classList.toggle("Banner-Inicia");
    },4000);
}
function AnimacionDados(){
    var Animacion = document.getElementById("Animacion-Dados");
    Animacion.classList.toggle("Banner-Inicia");
    
    setTimeout(function(){
        Animacion.classList.toggle("Banner-Inicia");
    },4000);
}

/* Visibilidad de las columnas */
function MostrarColumna1(){
    Columna1.style.display = "initial";
}
function OcultarColumna1(){
    Columna1.style.display = "none";
}

function MostrarColumna3(){
    Columna3.style.display = "initial";
}
function OcultarColumna3(){
    Columna3.style.display = "none";
}

/* Funciones de las etiquetas del saldo */
function MostrarSaldo() {
    Saldo[0].style.display = "initial";
    Saldo[1].style.display = "initial";
    Saldo[2].style.display = "initial";
    Saldo[3].style.display = "initial";
}
function OcultarSaldo() {
    Saldo[0].style.display = "none";
    Saldo[1].style.display = "none";
    Saldo[2].style.display = "none";
    Saldo[3].style.display = "none";
}
function HabilitarSaldo(){
    Saldo[1].disabled = false;
}
function BloquearSaldo(){
    Saldo[1].disabled = true;
}

/* Funciones de las etiquetas de la apuesta */
function MostrarApuesta(){
    Apuesta[0].style.display = "initial";
    Apuesta[1].style.display = "initial";
    Apuesta[2].style.display = "initial";
    Apuesta[3].style.display = "initial";
}
function OcultarApuesta(){
    Apuesta[0].style.display = "none";
    Apuesta[1].style.display = "none";
    Apuesta[2].style.display = "none";
    Apuesta[3].style.display = "none";
}
function HabilitarApuesta(){
    Apuesta[1].disabled = false;
}
function BloquearApuesta(){
    Apuesta[1].disabled = true;
}

/* Funciones boton izquierdo */
function MostrarBotonIzq(){
    BotonIzq.style.display = "initial";
}
function OcultarBotonIzq(){
    BotonIzq.style.display = "none";
}
function HabilitarBotonIzq(){
    BotonIzq.disabled = false;
}
function BloquearBotonIzq(){
    BotonIzq.disabled = true;
}
function MensajeBotonIzq(i) {
    BotonIzq.innerHTML = MensajesBotones[i];
}

/* Funciones boton derecho */
function MostrarBotonDer(){
    BotonDer.style.display = "initial";
}
function OcultarBotonDer(){
    BotonDer.style.display = "none";
}
function HabilitarBotonDer(){
    BotonDer.disabled = false;
}
function BloquearBotonDer(){
    BotonDer.disabled = true;
}
function MensajeBotonDer(i) {
    BotonDer.innerHTML = MensajesBotones[i];
}

/* Calculo de los dados */
function CalcularDados(){
    var D1 = parseInt(Math.random() * (6 - 0) + 1);
    var D2 = parseInt(Math.random() * (6 - 0) + 1);
    var Res = D1 + D2;
}

/*Se inicio el juego*/
function InicioJuego(){
    AnimacionInicio();
    setTimeout(() => {
        MostrarColumna1();
        MostrarColumna3();

        MostrarSaldo();
        HabilitarSaldo();

        OcultarApuesta();
        BloquearApuesta();

        MostrarBotonIzq();
        OcultarBotonDer();

        HabilitarBotonIzq();
        BloquearBotonDer();

        MensajeBotonIzq(1);
        MensajeBotonDer(3);
    }, 4000);
}

/* Se ingresa el fondo y se espera lanzar los dados o retirarse */
function IngresaFondo(){
    MostrarSaldo();
    BloquearSaldo();

    MostrarApuesta();
    HabilitarApuesta();

    MostrarBotonIzq();
    MostrarBotonDer();

    HabilitarBotonIzq();
    HabilitarBotonDer();

    MensajeBotonIzq(2);
    MensajeBotonDer(3);
}

/* Se lanzan los dados */
function LanzarDados(){
    MostrarSaldo();
    BloquearSaldo();

    MostrarApuesta();
    BloquearApuesta();

    MostrarBotonIzq();
    MostrarBotonDer();

    BloquearBotonIzq();
    BloquearBotonDer();

    MensajeBotonIzq(2);
    MensajeBotonDer(3);

    CalcularDados();
}

function Evaluar(){    
    switch(Evaluador){
        /*Inicio de juego*/
        case 1:
            InicioJuego();
            Evaluador = 2;
            break;
        /*Primer lanzamiento*/
        case 2:
            IngresaFondo();
            Evaluador = 3;
            break;
        case 3:
            LanzarDados();
            break;
    }
}



/*
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

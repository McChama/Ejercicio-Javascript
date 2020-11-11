/* Declaracion de variables globales */
var Evaluador = 1;
var Saldo;
var Apuesta;
var Botones;

/* Iniciar la animacion */
function MostrarAnimacion(){
    var Animacion = document.getElementById("div");
    Animacion.classList.toggle("Banner-Inicia");
    
    setTimeout(function(){
        Animacion.classList.toggle("Banner-Inicia");
    },4000);
}

/* Inicializacion de contenedores de etiquetas por clase */
function CargarVariables() {
    Saldo = document.getElementsByClassName("Saldo");
    Apuesta = document.getElementsByClassName("Apuesta");
    Botones = document.getElementsByClassName("Botones");
}

/* Habilitar etiquetas de saldo */
function MostrarSaldo() {
    setTimeout(function (){
        Saldo[0].style.display = "initial";
        Saldo[1].style.display = "initial";
        Saldo[1].disabled = false;   
    },4000);  
}

function InicioJuego(){
    MostrarAnimacion();
    MostrarSaldo();
    
    
}
function Evaluar(){
    
    switch(Evaluador){
        /*Inicio de juego*/
        case 1:
            InicioJuego();
            break;
        /*Primer lanzamiento*/
        case 2:
            PrimerLanzamiento();
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
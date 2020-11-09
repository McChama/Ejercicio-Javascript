function LanzarDados(){
    var D1 = parseInt(Math.random() * (6 - 0) + 1);
    var D2 = parseInt(Math.random() * (6 - 0) + 1);
    var Res = D1 + D2;
    
    EvaluarResultado();
}

function EvaluarResultado(Res){
    if(Res == 7 || Res == 11){
        /*Gano*/
    }
    if(Res == 2 || Res == 3 || Res == 12){
        /*Perdio*/
    }
    if(Res == 4 || Res == 5 || Res == 6 || Res == 8 || Res == 9 || Res == 10){
        /*Se establece punto*/
    }
}
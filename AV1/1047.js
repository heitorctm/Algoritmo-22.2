/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [horaI, minutoI, horaF, minutoF] =  prompt().split(" ");   */

horaI = parseInt(7);
minutoI = parseInt(10);
horaF = parseInt(8);
minutoF = parseInt(9);

var dia = 1440;
var inicio = horaI*60 + minutoI;
var fim = horaF*60 + minutoF;
var horaResposta = 0;
var minutoResposta = 0;

if(inicio != fim){
    if(inicio < fim){
        horaResposta = parseInt((fim - inicio)/60);
        minutoResposta = parseInt(fim - inicio)%60;
        console.log("O JOGO DUROU "+horaResposta+" HORA(S) E "+minutoResposta+" MINUTO(S)");
    }
    if (inicio > fim){
        horaResposta = parseInt((dia + fim - inicio)/60);
        minutoResposta = parseInt(dia + fim - inicio)%60;
        console.log("O JOGO DUROU "+horaResposta+" HORA(S) E "+minutoResposta+" MINUTO(S)");
    }
} else {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [horaI, horaF] =  prompt().split(" ");  

horaI = parseInt(horaI);
horaF = parseInt(horaF);
var dia = parseInt(24);

if (horaI == horaF) {
    console.log("O JOGO DUROU 24 HORA(S)")
} else {
    if(horaF > horaI) {
        console.log("O JOGO DUROU "+ (horaF - horaI) + " HORA(S)");
    } else {
        console.log("O JOGO DUROU " + (dia + horaF - horaI) + " HORA(S)");
    }
}
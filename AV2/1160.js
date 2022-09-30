var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());

var cont = 0;
var anos = 0;

while(cont < A) {
    cont++;

    var [Pa, Pb, G1, G2] = prompt().split(" ");

    Pa = parseInt(Pa);
    Pb = parseInt(Pb);
    G1 = parseFloat(G1)/100;
    G2 = parseFloat(G2)/100;
    var crescimentoA = 0;
    var crescimentoB = 0;

    while(Pa <= Pb) {

        anos++;
        crescimentoA = Math.floor(Pa*G1);
        crescimentoB = Math.floor(Pb*G2);
        Pa += crescimentoA;
        Pb += crescimentoB;

    }
    if(anos <= 100){
    console.log(anos + " anos.");
    } else {
        console.log("Mais de 1 seculo.");
    }
}
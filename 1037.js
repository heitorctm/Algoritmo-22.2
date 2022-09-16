var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var ponto = parseFloat(prompt());

if (ponto >=0 && ponto <=100){
    if (ponto >=0 && ponto <=25){
    console.log("Intervalo [0,25]");
    }
    if (ponto >25 && ponto <=50){
        console.log("Intervalo (25,50]");
    }
    if (ponto >50 && ponto <=75){
        console.log("Intervalo (50,75]");
    }
    if (ponto >75 && ponto <=100){
          console.log("Intervalo (75,100]")
    }
}
else { 
    console.log("Fora de intervalo");
}
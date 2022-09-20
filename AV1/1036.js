var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");
var [A,B,C] = entrada.split(" ");
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

var delta = Math.pow(B,2) - 4*A*C;

var R1 = (-B + Math.sqrt(delta))/2/A;
var R2 = (-B - Math.sqrt(delta))/2/A;
function resposta(){
    if(delta>=0 && A != 0) {
        console.log("R1 = "+ R1.toFixed(5));
        console.log("R2 = "+ R2.toFixed(5));
    } else{
    console.log("Impossivel calcular");
    }
}

resposta();
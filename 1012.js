var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var [A, B, C] =  prompt().split(" ");
var PI = 3.14159;

console.log("TRIANGULO: "+ (A*C/2).toFixed(3));
console.log("CIRCULO: "+ (PI*Math.pow(C,2)).toFixed(3));
console.log("TRAPEZIO: "+ ((parseFloat(A) + parseFloat(B))*C/2).toFixed(3));
console.log("QUADRADO: "+ (B*B).toFixed(3));
console.log("RETANGULO: "+ (A*B).toFixed(3));
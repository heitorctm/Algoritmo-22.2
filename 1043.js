var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [A, B, C] =  prompt().split(" ");

var A = parseFloat(A);
var B = parseFloat(B);
var C = parseFloat(C);
var Perimetro = (A + B + C);
var areaTrapezio = ((A + B) * C)/2;

if (A < (B+C) && (A> (B-C))) {
    console.log("Perimetro = "+Perimetro.toFixed(1));
} else {
    console.log("Area = "+areaTrapezio.toFixed(1));
}
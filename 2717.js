var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var tempo =  +(prompt());
var [A, B] = prompt().split(" ");
A = +A;
B = +B;
if (tempo <= (A+B)) {
    console.log("Farei hoje!");
} else {
    console.log("Deixa para amanha!");
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A=1;
var soma = 0;
var i= 0;

while (A > 0) {
  
    A = parseInt(prompt());
    if(A < 0) break;
    i++;
    soma = soma + A;
}
console.log((soma/i).toFixed(2));
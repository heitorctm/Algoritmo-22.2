var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var R = parseFloat(prompt("Digite o valor do raio.")).toFixed(2);
var n = 3.14159;
var A = n * Math.pow(R, 2);

console.log("A="+(A).toFixed(4));
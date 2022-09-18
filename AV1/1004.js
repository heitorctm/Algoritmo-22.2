var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A = parseInt(prompt("Digite o valor n1."));
var B = parseInt(prompt("Digite o valor n2."));
var PROD = A * B;
console.log("PROD = " + PROD);
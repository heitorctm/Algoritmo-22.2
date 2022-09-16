var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [A, B] =  prompt().split(" ");

var A = +A;
var B = +B;
var posicao = A - (parseInt(A/B) * B);
console.log(posicao);
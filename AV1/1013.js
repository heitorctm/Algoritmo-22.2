var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var [A, B, C] =  prompt().split(" ");
var maiorAB = (parseInt(A)+parseInt(B)+Math.abs(parseInt(A)-parseInt(B)))/2;
var maiorABC = (maiorAB+parseInt(C)+Math.abs(maiorAB-parseInt(C)))/2;
console.log(maiorABC+" eh o maior");
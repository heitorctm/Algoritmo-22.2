var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var [cod1, n1, preco1] =  prompt().split(" ");
var [cod2, n2, preco2] =  prompt().split(" "); 

var total = parseFloat(n1*preco1) + parseFloat(n2 * preco2);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
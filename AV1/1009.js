var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var ID =  prompt();
var salario =  parseFloat(prompt());
var vendas =  parseFloat(prompt());

var salarioFinal = salario+(vendas*0.15);

console.log("TOTAL = R$ "+salarioFinal.toFixed(2));

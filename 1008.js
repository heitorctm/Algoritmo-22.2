var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var ID =  parseInt(prompt());
var horasTrabalhadasMes =  parseInt(prompt());
var dinheiroPorHora =  parseFloat(prompt());

var calculo = (horasTrabalhadasMes*dinheiroPorHora);

console.log("NUMBER = "+ID);
console.log("SALARY = U$ "+calculo.toFixed(2));
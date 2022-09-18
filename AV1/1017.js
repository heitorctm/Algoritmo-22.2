var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var horas = prompt("qual o tempo de viagem em horas");
var velocidade = prompt("qual a velocidade media?");
var consumoCarro = 12;
var distancia = horas * velocidade;
var litrosGas = (distancia/consumoCarro);

console.log(litrosGas.toFixed(3));

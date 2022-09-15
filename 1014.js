var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var X = parseInt(prompt());
var Y = parseFloat(prompt());
var consumoCarro = X/Y;

console.log(consumoCarro.toFixed(3)+" km/l");
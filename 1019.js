var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var tempo = parseInt(prompt());
var hora = parseInt(tempo/(60*60));
var minuto = parseInt((tempo-(hora*60*60))/60);
var segundo = parseInt(tempo -(hora*60*60)-(minuto*60));

console.log(hora+":"+minuto+":"+segundo);
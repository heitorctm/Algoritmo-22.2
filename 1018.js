var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valor = parseInt(prompt());

var nota100 = parseInt(valor/100);
var nota50 = parseInt((valor -nota100*100)/50);
var nota20 = parseInt((valor - nota100*100 - nota50*50)/20);
var nota10 = parseInt((valor - nota20*20 - nota100*100 - nota50*50)/10);
var nota5 = parseInt((valor - nota10*10 - nota100*100 - nota50*50 - nota20*20)/5);
var nota2 = parseInt((valor - nota5*5 - nota10*10 - nota100*100 - nota50*50 - nota20*20)/2);
var nota1 = (valor - nota2*2 - nota5*5 - nota10*10 - nota100*100 - nota50*50 - nota20*20);

console.log(valor);
console.log(nota100+" nota(s) de R$ 100,00");
console.log(nota50+" nota(s) de R$ 50,00");
console.log(nota20+" nota(s) de R$ 20,00");
console.log(nota10+" nota(s) de R$ 10,00");
console.log(nota5+" nota(s) de R$ 5,00");
console.log(nota2+" nota(s) de R$ 2,00");
console.log(nota1+" nota(s) de R$ 1,00");
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valor = parseFloat(prompt());

var nota100 = parseInt(valor/100);
var nota50 = parseInt((valor -nota100*100)/50);
var nota20 = parseInt((valor - nota100*100 - nota50*50)/20);
var nota10 = parseInt((valor - nota20*20 - nota100*100 - nota50*50)/10);
var nota5 = parseInt((valor - nota10*10 - nota100*100 - nota50*50 - nota20*20)/5);
var nota2 = parseInt((valor - nota5*5 - nota10*10 - nota100*100 - nota50*50 - nota20*20)/2);

var moeda01 = parseInt(valor - nota2*2 - nota5*5 - nota10*10 - nota100*100 - nota50*50 - nota20*20);
var moeda50 = parseInt((valor - Math.floor(valor))/0.5);
var moeda25 = parseInt(((valor - Math.floor(valor)) - moeda50*0.5)/0.25);
var moeda10 = parseInt((((valor - Math.floor(valor)) - moeda50*0.5 - moeda25*0.25)/0.10));
var moeda05 = parseInt((((valor - Math.floor(valor)) - moeda50*0.5 - moeda25*0.25 - moeda10*0.10))/0.05);
var moedaCentavo = parseInt((((valor - Math.floor(valor)) - moeda50*0.5 - moeda25*0.25 - moeda10*0.10 - moeda05*0.05)/0.01).toFixed(0));

//var resto = parseFloat((((valor - Math.floor(valor)) - moeda50*0.5 - moeda25*0.25 - moeda10*0.10))%0.05);
//var moedaCentavo = Math.round(parseFloat(resto*100));
 
console.log("NOTAS:");
console.log(nota100 + " nota(s) de R$ 100.00");
console.log(nota50+ " nota(s) de R$ 50.00");    
console.log(nota20+ " nota(s) de R$ 20.00");
console.log(nota10 + " nota(s) de R$ 10.00");
console.log(nota5 + " nota(s) de R$ 5.00");
console.log(nota2 + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(moeda01 + " moeda(s) de R$ 1.00");
console.log(moeda50 + " moeda(s) de R$ 0.50");
console.log(moeda25 + " moeda(s) de R$ 0.25");
console.log(moeda10 + " moeda(s) de R$ 0.10");
console.log(moeda05 + " moeda(s) de R$ 0.05");
console.log(moedaCentavo+ " moeda(s) de R$ 0.01");
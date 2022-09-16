var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var tempo = parseInt(prompt());

var ano = parseInt(tempo/365);
var restoAno = parseInt(tempo%365);

var mes =parseInt((restoAno/30));
var restoMes = parseInt(restoAno%30);

var dia =parseInt(restoMes);

console.log(ano+" ano(s)");
console.log(mes+" mes(es)");
console.log(dia+" dia(s)");
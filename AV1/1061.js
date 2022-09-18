var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var [diaInicio, Z] =  prompt().split(" ");
var [horaInicio, minutoInicio, segundoInicio] = prompt().split(" : ");
var [diaFim, Z1] =  prompt().split(" ");
var [horaFim, minutoFim, segundoFim] = prompt().split(" : ");
  
var diaInicio =  parseInt(diaInicio);
var horaInicio = parseInt(horaInicio);
var minutoInicio = parseInt(minutoInicio);
var segundoInicio = parseInt(segundoInicio);

var diaFim =  parseInt(diaFim);
var horaFim = parseInt(horaFim);
var minutoFim = parseInt(minutoFim);
var segundoFim = parseInt(segundoFim);

var diaInicio =  diaInicio*86400;
var horaInicio = horaInicio*3600;
var minutoInicio = minutoInicio*60;
var dataInicial = diaInicio+horaInicio+minutoInicio+segundoInicio;

var diaFim =  diaFim*86400;
var horaFim = horaFim*3600;
var minutoFim = minutoFim*60;
var dataFinal = diaFim+horaFim+minutoFim+segundoFim;

var dataResposta = dataFinal-dataInicial;
var diaResposta = parseInt(dataResposta/86400);
var restoDia = dataResposta%86400;
var horaResposta = parseInt(restoDia/3600);
var restoHora = restoDia%3600;
var minutoResposta = parseInt(restoHora/60);
var segundoResposta = restoHora%60;

console.log(diaResposta + " dia(s)");
console.log(horaResposta + " hora(s)");
console.log(minutoResposta + " minuto(s)");
console.log(segundoResposta + " segundo(s)");
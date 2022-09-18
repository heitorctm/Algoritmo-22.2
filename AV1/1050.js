var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var DDD = parseInt(prompt());

var brasilia = 61;
var Salvador = 71;
var saoPaulo = 11;
var Rio = 21;
var Juiz = 32;
var campinas = 19;
var vitoria = 27;
var BH = 17;

if (DDD != brasilia && DDD != Salvador && DDD != saoPaulo && DDD != Rio && DDD != Juiz && DDD != campinas && DDD != vitoria && DDD != BH) {
    console.log("DDD nao cadastrado")
} 
if (DDD == brasilia) {
    console.log("Brasilia")
}
if (DDD == Salvador) {
    console.log("Salvador")
}
if (DDD == saoPaulo) {
    console.log("Sao Paulo")
}
if (DDD == Rio) {
    console.log("Rio de Janeiro")
}
if (DDD == Juiz) {
    console.log("Juiz de Fora")
}
if (DDD == campinas) {
    console.log("Campinas")
}
if (DDD == vitoria) {
    console.log("Vitoria")
}
if (DDD == BH) {
    console.log("Belo Horizonte")
}
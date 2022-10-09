var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var i = 0;
var par = 0;
var impar = 0;
var positivo = 0;
var negativo = 0;

do{

    var numero = parseInt(prompt());

    if(numero > 0){
        positivo++;
    }
    if(numero%2 === 0){
        par++;
    }
    if(numero%2 !== 0){
        impar++;
    }
    if(numero < 0){
        negativo++;
    }
    i++;

} while(i<5);

console.log(par +' valor(es) par(es)');
console.log(impar +' valor(es) impar(es)');
console.log(positivo +' valor(es) positivo(s)');
console.log(negativo +' valor(es) negativo(s)');
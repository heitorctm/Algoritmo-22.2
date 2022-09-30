var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());
var B = parseInt(prompt());
var cont = 0;
var aux = 0;
var soma = 0;

if(B > A) {
    aux = B;
    B = A;
    A = aux;
}
var repeticoes = A - B;
while(cont <= repeticoes){

    aux = B+cont;
    if(aux%13 !== 0) {
        soma = soma + aux;
    }
    cont++;
}
console.log(soma);
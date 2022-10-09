var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var numeros =  prompt();

var vetor = numeros.split(" ");
var tamanhoVetor = parseInt(vetor.length);

var A = parseInt(vetor[0]);
var N = parseInt(vetor[tamanhoVetor - 1]);

var soma = 0;
var i = 0;
while(i < N) {
    soma += (A + i);
    i++;
}
console.log(soma);
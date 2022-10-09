var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());
do{
    var Z = parseInt(prompt());
}while(Z <= A);

var soma = 0;
var i = 0;
while(soma <= Z){
    soma = soma + A+i;
    i++;
}
console.log(i);
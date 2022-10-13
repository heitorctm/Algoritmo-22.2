var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 

var testes = parseInt(prompt());
var vetor=[];

for(i=0; i < testes; i++) {
    vetor.push("a");
}

console.log('Feliz nat'+vetor.join('')+'l!\n');

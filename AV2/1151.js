var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var testes = parseInt(prompt());
var aux = 0;
var aux2 = 1;
var vetor=[0,1];
for(i=2; i < testes; i+=2) {

    aux = aux + aux2;
    aux2 = aux + aux2;

    vetor.push(aux);
    vetor.push(aux2);
    
}

console.log(vetor.join(" "));
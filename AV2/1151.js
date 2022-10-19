var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var testes = parseInt(prompt());
var a = 0;
var b = 1;
var vetor=[];
for(i=0; i < testes; i+=2) {
    vetor.push(a);
    vetor.push(b);
    a = a + b;
    b = a + b;    
}
console.log(vetor.join(" "));
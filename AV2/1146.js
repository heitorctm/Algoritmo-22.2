var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var testes = parseInt(prompt());
while(testes !== 0){
var contagem = 0;
var vetor = [];

while(contagem < testes) {
    contagem++;
    
    vetor.push(contagem);
}
console.log(vetor.join(" "));
testes = parseInt(prompt());
}
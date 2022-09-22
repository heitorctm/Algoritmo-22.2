var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var testes = parseInt(prompt());
var cont = 0;
while(cont <= testes) {
    var variavel = parseInt(prompt());
    if(variavel%2 != 0) {
        console.log(variavel+" nao eh perfeito");
    } else{
        console.log(variavel+" eh perfeito");
    }
    cont = cont + 1;
}
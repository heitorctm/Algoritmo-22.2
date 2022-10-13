var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var numero = parseInt(prompt());
var fatorial = 1;

for(var i = numero;i!=0; i--) {
    var fatorial = i*fatorial;
}
console.log(fatorial);
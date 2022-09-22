var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var senha = parseInt(prompt());

while (senha != 2002) {
    console.log("Senha Invalida");
    senha = parseInt(prompt());
} 
console.log("Acesso Permitido");
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var testes = parseInt(prompt()); 

var cont = 0;

while(cont < testes) {
    var variavel = parseInt(prompt());
    var soma = 0;

    for(i=1; i<variavel;i++) {
        var conta = variavel%i;
        if(conta === 0) {
            soma = soma+i;
        }
    }
    if(soma == variavel) {
        console.log(variavel + ' eh perfeito');
    } else{
        console.log(variavel + ' nao eh perfeito');
    }
cont++
} 
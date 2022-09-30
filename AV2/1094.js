var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt());
var cont = 0;
var coelho = 0;
var sapo = 0;
var rato = 0;


while(cont < x) { 
    var [contagem, bixo] = prompt().split(" ");

    contagem = parseInt(contagem);
    
    if(bixo == "C") {
        coelho = coelho + contagem;
    } else if (bixo == "R") {
        rato = rato + contagem;
    } else if (bixo == "S") {
        sapo = sapo + contagem;
    }
cont++;
}
var bixosTotal = sapo+coelho+rato;
console.log('Total: '+bixosTotal+' cobaias');
console.log('Total de coelhos: '+coelho);
console.log('Total de ratos: '+rato);
console.log('Total de sapos: '+sapo);
console.log('Percentual de coelhos: '+(coelho/bixosTotal*100).toFixed(2)+' %');
console.log('Percentual de ratos: '+(rato/bixosTotal*100).toFixed(2)+' %');
console.log('Percentual de sapos: '+(sapo/bixosTotal*100).toFixed(2)+' %');
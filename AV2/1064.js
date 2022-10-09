var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var i = 0;

var media = 0;
var positivo = 0;


do{

    var numero = parseFloat(prompt());

    if(numero > 0){
        positivo++;
        media += numero;
    }
    
    i++;

} while(i<6);

console.log (positivo + ' valores positivos');
console.log ((media/positivo).toFixed(1));
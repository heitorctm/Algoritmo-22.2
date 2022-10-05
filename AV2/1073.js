var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt());

for(var i = 2; i<=x; i+=2){
    var conta = Math.pow(i,2);
    console.log(i+'^2 = '+conta);
}
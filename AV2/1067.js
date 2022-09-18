var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var n1 = parseInt(prompt());
var cont = 1;

while(cont<=n1){
    console.log(cont);
    cont=cont+2;
}
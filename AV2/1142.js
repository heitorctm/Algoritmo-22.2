var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt());
var aux = 0;

for(i=0; i<x; i++) {

    console.log((aux+1)+" "+(aux+2)+" "+(aux+3)+" PUM");
    
    aux+=4;

}

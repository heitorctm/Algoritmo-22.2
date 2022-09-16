var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var distancia  = parseInt(prompt());

if(distancia > 1400) {
    console.log(3);
} else {
    if(distancia > 800) {
        console.log(2);
    } else {
        console.log(1);
    }
}
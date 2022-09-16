var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var X  = parseInt(prompt());
var Y = parseInt(prompt());

if(X%2 == 0) {
    if(Y%2 == 0) {
        console.log(1); //branco
    } else {
            console.log(0); //preto
    }
} else {
    if(Y%2 == 0) {
        console.log(0);
    } else {
        console.log(1);
    }
}

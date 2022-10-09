var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var N = parseInt(prompt());
var contIn = 0;
var contOut = 0;

for(var i = 0; i < N; i++){
    var numero = parseInt(prompt());
    if(numero >= 10 && numero <=20) contIn++;
    else contOut++;
}

console.log(contIn + ' in');
console.log(contOut + ' out');
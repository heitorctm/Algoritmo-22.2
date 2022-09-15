var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [n1, n2] =  prompt().split(" ");

var n1 = parseInt(n1);
var n2 = parseInt(n2);

if((n1%n2) == 0 || (n2%n1) == 0) {
    console.log("Sao Multiplos");
} else{
    console.log("Nao sao Multiplos");
}
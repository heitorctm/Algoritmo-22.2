var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [A, B, C, D] =  prompt().split(" "); 


/* var A = 2;
var B = 3;
var C = 2;
var D = 6; */

if(B > C && D > A && (C+D) > (A + B) && C > 0 && D > 0 && (A%2) == 0) {
    console.log("Valores aceitos");
 } else {
        console.log("Valores nao aceitos");
    }
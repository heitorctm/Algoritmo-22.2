var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [A, B, C] =  prompt().split(" ");
var A = +A;
var B = +B;
var C = +C;
var Aa = +A;
var Bb = +B;
var Cc = +C;
var auxiliar = 0;

if(B > A && B > C){
    auxiliar = B;
    B = A;
    A = auxiliar;
}
if(C > A && C > B){
    auxiliar = C;
    C = A;
    A = auxiliar;
}
if(B < C){
    auxiliar = C;
    C = B;
    B = auxiliar;
}
console.log(C);
console.log(B);
console.log(A);
console.log();
console.log(Aa);
console.log(Bb);
console.log(Cc);
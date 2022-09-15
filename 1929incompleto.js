var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [A, B, C, D] =  prompt().split(" ");

var A = parseFloat(A);
var B = parseFloat(B);
var C = parseFloat(C);
var D = parseFloat(D);
var auxiliar = 0;

if(B >= A && B >= C && B >= D){
    auxiliar = B;
    B = A;
    A = auxiliar;
}
if(C >= A && C >= B && C >= D){
    auxiliar = C;
    C = A;
    A = auxiliar;
}
if(D >= A && D >= B && D >= C){
    auxiliar = D;
    D = A;
    A = auxiliar;
}

if(A < (B+C)) {
    console.log("S");
} else{
if(A < (B+D)) {
    console.log("S");
} else {
if(A < (C+D)) {
    console.log("S");
}else{   
    console.log("N");
}
}
}
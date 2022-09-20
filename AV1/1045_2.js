var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [A, B, C] =  prompt().split(" "); 

var A = parseFloat(A);
var B = parseFloat(B);
var C = parseFloat(C);
var auxiliar = 0;

if(B >= A && B >= C){
    auxiliar = B;
    B = A;
    A = auxiliar;
}
if(C >= A && C >= B){
    auxiliar = C;
    C = A;
    A = auxiliar;
}
if(A >= (B+C)) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if((A*A) == ((B*B) + (C*C))) {
        console.log("TRIANGULO RETANGULO");
    }
    if((A*A) > ((B*B) + (C*C))) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if((A*A) < ((B*B) + (C*C))){
        console.log("TRIANGULO ACUTANGULO");
    }
    if(A == B && A == C) {
        console.log("TRIANGULO EQUILATERO");
    }
    if(A == B && A != C || A == C && A != B || A != B && B == C) {
        console.log("TRIANGULO ISOSCELES");
    }
}
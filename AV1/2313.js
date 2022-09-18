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
    console.log("Invalido");
} else {
    if(A != B && B !=C && C != A) {
        console.log("Valido-Escaleno");
    }
    if(A == B && A == C) {
        console.log("Valido-Equilatero");
    }
    if(A == B && A != C || A == C && A != B || A != B && B == C) {
        console.log("Valido-Isoceles");
    }
    if((A*A) == ((B*B) + (C*C))) {
        console.log("Retangulo: S");
    } else {
        console.log("Retangulo: N");
    }
}
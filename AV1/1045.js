var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [A, B, C] =  prompt().split(" ");

var A = parseFloat(A);
var B = parseFloat(B); 
var C = parseFloat(C);

if(A>B && A>C && A >= (B+C)) {
    console.log("NAO FORMA TRIANGULO");
} else {
if(B>A && B>C && B >= (A+C)) {
    console.log("NAO FORMA TRIANGULO");
} else {
if(C>A && C>B && C >= (A+B)) {
    console.log("NAO FORMA TRIANGULO");
} else {
    
    if(A>=B && A>C){
        if((A*A) == ((B*B) + (C*C))) {
            console.log("TRIANGULO RETANGULO");
        }
        if((A*A) > ((B*B) + (C*C))) {
            console.log("TRIANGULO OBTUSANGULO");
        }
        if((A*A) < ((B*B) + (C*C))){
            console.log("TRIANGULO ACUTANGULO");
        }
    }
    if(B>A && B>=C){
        if((B*B) == ((A*A) + (C*C))) {
            console.log("TRIANGULO RETANGULO");
        }
        if((B*B) > ((A*A) + (C*C))) {
            console.log("TRIANGULO OBTUSANGULO");
        }
        if((B*B) < ((A*A) + (C*C))){
            console.log("TRIANGULO ACUTANGULO");
        }
    }
    if(C>B && C>=A){
        if((C*C) == ((B*B) + (A*A))) {
            console.log("TRIANGULO RETANGULO");
        }
        if((C*C) > ((B*B) + (A*A))) {
            console.log("TRIANGULO OBTUSANGULO");
        }
        if((C*C) < ((B*B) + (A*A))){
            console.log("TRIANGULO ACUTANGULO");
        }
    }
    if(A == B && A == C) {
        console.log("TRIANGULO ACUTANGULO");
        console.log("TRIANGULO EQUILATERO");
    }
    if(A == B && A != C) {
        console.log("TRIANGULO ISOSCELES");
    }
    if(A != B && A == C) {
        console.log("TRIANGULO ISOSCELES");
    }
    if(C == B && C != A) {
        console.log("TRIANGULO ISOSCELES");
    }
    }
}
}
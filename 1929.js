var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [A, B, C, D] =  prompt().split(" ");

var A = parseFloat(A);
var B = parseFloat(B);
var C = parseFloat(C);
var D = parseFloat(D);
var auxiliarMaior = 0;
var auxiliarMenor = 0;

//Fazendo o lado A ser sempre o Maior para utilizar uma unica formula
if(B >= A && B >= C && B >= D){
    auxiliarMaior = B;
    B = A;
    A = auxiliarMaior;
}
if(C >= A && C >= B && C >= D){
    auxiliarMaior = C;
    C = A;
    A = auxiliarMaior;
}
if(D >= A && D >= B && D >= C){
    auxiliarMaior = D;
    D = A;
    A = auxiliarMaior;
}
//Fazendo o lado D ser sempre o 2 maior para utilizar uma unica formula
if(B >= D && B >= C){
    auxiliarMenor = B;
    B = D;
    D = auxiliarMenor;
}
if(C >= B && C >= D){
    auxiliarMenor = C;
    C = D;
    D = auxiliarMenor;
}

if(A < (B+C)) {
    console.log("S");
} else{
if(A < (B+D)) {
    console.log("S");
} else{
if(A < (C+D)) {
    console.log("S");
} else {
if(D < (B+C)) {
    console.log("S");
} else{
    console.log("N");
}}}}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [X, Y] =  prompt().split(" "); 

/* var X = 0;
var Y = 1; */

if (X > 0 && Y > 0) {
    console.log('Q1');
}
if (X < 0 && Y > 0) {
    console.log('Q2');
}
if (X < 0 && Y < 0) {
    console.log('Q3');
}
if (X > 0 && Y < 0) {
    console.log('Q4');
}
if (X == 0 && Y == 0) {
    console.log("Origem");
}
if (X == 0 && Y!= 0) {
    console.log("Eixo Y");
}
if (Y == 0 && X != 0) {
    console.log("Eixo X");
}

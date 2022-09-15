var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var n1 = parseInt(prompt());
var n2 = parseInt(prompt());
var n3 = parseInt(prompt());
var n4 = parseInt(prompt());
var n5 = parseInt(prompt());

var contPar = 0;
var contImpar = 0;
var contPositivo = 0;
var contNegativo = 0;

if((n1%2) === 0) {
    contPar++;   
} else {
    contImpar++
}
if((n2%2) === 0) {
    contPar++;
} else {
    contImpar++
}
if((n3%2) === 0) {
    contPar++;
} else {
    contImpar++
}
if((n4%2) === 0) {
    contPar++;
} else {
    contImpar++
}
if((n5%2) === 0) {
    contPar++;
} else {
    contImpar++
}
if(n1>0) {
    contPositivo++
}
if(n1<0) {
    contNegativo++
}
if(n2>0) {
    contPositivo++
}
if(n2<0) {
    contNegativo++
}
if(n3>0) {
    contPositivo++
}
if(n3<0) {
    contNegativo++
}
if(n4>0) {
    contPositivo++
}
if(n4<0) {
    contNegativo++
}
if(n5>0) {
    contPositivo++
}
if(n5<0) {
    contNegativo++
}
console.log(contPar + " valor(es) par(es)")
console.log(contImpar + " valor(es) impar(es)")
console.log(contPositivo + " valor(es) positivo(s)")
console.log(contNegativo + " valor(es) negativo(s)")
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var nota = parseInt(prompt());

if(nota >= 86) {
    console.log("A");
} else {
    if(nota >= 61) {
    console.log("B");
} else {
    if(nota >= 36) {
    console.log("C");
} else {
    if(nota >= 1) {
    console.log("D");
} else {
    console.log("E");
}}}}
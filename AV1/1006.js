var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A =  parseFloat(prompt("digite a nota A"));
var B =  parseFloat(prompt("digite a nota B"));
var C =  parseFloat(prompt("digite a nota C"));
var media = ((A*2)+(B*3)+(C*5))/(2+3+5);

console.log("MEDIA = "+media.toFixed(1));
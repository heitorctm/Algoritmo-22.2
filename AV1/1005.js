var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A =  parseFloat(prompt("digite a nota A")).toFixed(2);
var B =  parseFloat(prompt("digite a nota B")).toFixed(2);
var media = ((A*3.5)+(B*7.5))/(3.5+7.5);

console.log("MEDIA = "+media.toFixed(5));
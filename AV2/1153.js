﻿var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var n = parseInt(prompt());
var fatorial = 1;

for(var i = 1; i<=n; i++){
    fatorial*=i;
}
console.log(fatorial);
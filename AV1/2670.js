var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A = +(prompt());
var B = +(prompt());
var C = +(prompt());

var tempo1 = B*2 + C*4;  
var tempo2 = C*2 + A*2;
var tempo3 = A*4 + B*2;

if(tempo1 <= tempo2 && tempo1 <= tempo3){
    console.log(tempo1);
}else{
if(tempo2 <= tempo1 && tempo2 <= tempo3){
    console.log(tempo2);
} else{
 if(tempo3 <= tempo2 && tempo3 <= tempo1){
    console.log(tempo3);
}
}
}
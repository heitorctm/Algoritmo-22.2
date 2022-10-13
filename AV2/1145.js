var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [x, y] =  prompt().split(" ");
 
x= 3;
y= 99;
var cont = 0;
vetor = [];
for(j=0; j< y; j+=x){
    vetor = [];
    
    for(i=0; i<x;i++){
        
        cont++;
        vetor.push(cont);
    }
    console.log(vetor.join(" "));
}
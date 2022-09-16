const { parse } = require('path');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [n2, n3, n4, n1] =  prompt().split(" ");

var n2 = parseFloat(n2);
var n3 = parseFloat(n3);
var n4 = parseFloat(n4);
var n1 = parseFloat(n1);
var media1 = parseFloat((n2*2+n3*3+n4*4+n1*1)/10);

console.log("Media: "+ media1.toFixed(1));

if (media1 >=7){
    console.log("Aluno aprovado.");
}
if (media1 < 5){
    console.log("Aluno reprovado.");
}
if (media1 >= 5 && media1 <7){
    console.log("Aluno em exame.");
    
    var final =  parseFloat(prompt())
    var mediaFinal = ((final+media1)/2);
    console.log("Nota do exame: "+ final.toFixed(1));
    if(mediaFinal < 5){
    console.log("Aluno reprovado.");
    console.log("Media final: "+ mediaFinal.toFixed(1));    
    }
    if((mediaFinal) >=5){
    console.log("Aluno aprovado.");
    console.log("Media final: "+ mediaFinal.toFixed(1));    
    }
}
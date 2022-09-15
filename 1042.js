var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [n1, n2, n3] =  prompt().split(" ");

/* var n1 = parseInt(1);
var n2 = parseInt(2);
var n3 = parseInt(3); */

if(n1<n2 && n1<n3 && n2<n3) {
    console.log(n1);
    console.log(n2);
    console.log(n3);
}
if(n1<n2 && n1<n3 && n3<n2) {
    console.log(n1);
    console.log(n3);
    console.log(n2);
}
if(n2<n1 && n2<n3 && n3<n1) {
    console.log(n2);
    console.log(n3);
    console.log(n1);
}
if(n2<n1 && n2<n3 && n1<n3) {
    console.log(n2);
    console.log(n1);
    console.log(n3);
}
if(n3<n1 && n3<n2 && n1<n2) {
    console.log(n3);
    console.log(n1);
    console.log(n2);
}
if(n3<n1 && n3<n2 && n2<n1) {
    console.log(n3);
    console.log(n2);
    console.log(n1);
    
}
console.log();
console.log(n1);
console.log(n2);
console.log(n3);
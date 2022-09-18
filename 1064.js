var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var n1 = parseFloat(prompt());
var n2 = parseFloat(prompt());
var n3 = parseFloat(prompt());
var n4 = parseFloat(prompt());
var n5 = parseFloat(prompt());
var n6 = parseFloat(prompt());
var cont = 0;
var i = 0;
while (i <= 6) {
    i++

}
if(n1 >0){
    cont++;
} else {
    n1=0;
}
if(n2 >0){
    cont++;
} else {
    n2=0;
}
if(n3 >0){
    cont++;
} else {
    n3=0;
}
if(n4 >0){
    cont++;
} else {
    n4=0;
}
if(n5 >0){
    cont++;
} else {
    n5=0;
}
if(n6 >0){
    cont++;
} else {
    n6=0;
}
console.log(cont + " valores positivos");
console.log(parseFloat((n1+n2+n3+n4+n5+n6)/cont).toFixed(1));
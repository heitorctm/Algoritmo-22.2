var a = 2;
var b = 3;
var divisao = 0;
while(b <= 39){

    divisao = divisao + (b/a);
    a = a * 2;
    b = b + 2;
}
console.log((divisao+1).toFixed(2));

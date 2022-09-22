var aux = 1;
var resposta = 0;

while(aux <= 100) {
    resposta = resposta + 1/aux;
    aux = aux+1;
}
console.log(resposta.toFixed(2));
var vetor = [1,2,3,4,5,6,7,10,5,13];

console.log(getMaxOfArray(vetor))
console.log(getMinOfArray(vetor))
var novoVetor = vetor.filter(removeMax);
console.log(novoVetor)

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}
function removeMax(valor) {
    return getMaxOfArray(valor);
}
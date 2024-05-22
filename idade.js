function verificaIdade (idade){
    if (idade >= 18) {
        return true;
    } else (idade < 18) {
        return false;
    }
}

console.log(verificaIdade(19)); // true
console.log(verificaIdade(14)); // false
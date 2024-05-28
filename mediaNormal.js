function calcularMedia (n1, n2, n3, n4) {
    const soma = n1 + n2 + n3 + n4;
    const media = soma / 4;
    return media;
}

const mediaNotas = calcularMedia(4, 6, 8, 9);
console.log(mediaNotas);
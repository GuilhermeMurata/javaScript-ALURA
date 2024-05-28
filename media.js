function calcularMedia (notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    const media = soma / notas.length;
    return media;
}

const notas = [7, 6, 2, 9];
const mediaNotas = calcularMedia(notas);
console.log(mediaNotas);
let soma = 0;
let quantidade = 0;
let maior = null;
let menor = null;

while (true) {

    let numero = parseInt(prompt("Digite um número (0 para encerrar):"));

    if (numero === 0) {
        break;
    }

    soma += numero;
    quantidade++;

    if (maior === null || numero > maior) {
        maior = numero;
    }

    if (menor === null || numero < menor) {
        menor = numero;
    }
}

let media = soma / quantidade;

alert(
    "Soma: " + soma +
    "\nMédia: " + media +
    "\nMaior número: " + maior +
    "\nMenor número: " + menor
);

console.log("Soma:", soma);
console.log("Média:", media);
console.log("Maior número:", maior);
console.log("Menor número:", menor);
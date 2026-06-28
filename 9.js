let maiores = 0;
let menores = 0;

while (true) {

    let nome = prompt("Digite o nome (ou 'fim' para encerrar):");

    if (nome.toLowerCase() === "fim") {
        break;
    }

    let idade = parseInt(prompt("Digite a idade:"));

    if (idade >= 18) {
        maiores++;
    } else {
        menores++;
    }
}

alert(
    "Maiores de idade: " + maiores +
    "\nMenores de idade: " + menores
);

console.log("Maiores de idade:", maiores);
console.log("Menores de idade:", menores);
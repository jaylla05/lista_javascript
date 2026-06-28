let N = parseInt(prompt("Digite um número inteiro:"));

let fatorial = 1;

for (let i = 1; i <= N; i++) {
    fatorial *= i;
}

console.log("Fatorial de " + N + " = " + fatorial);
let numero = parseInt(prompt("Digite um número inteiro:"));

let primo = true;

if (numero <= 1) {
    primo = false;
}

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        primo = false;
        break;
    }
}

if (primo) {
    console.log("O número é primo.");
} else {
    console.log("O número não é primo.");
}
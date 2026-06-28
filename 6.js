let N = parseInt(prompt("Digite um número inteiro:"));

console.log("Números primos entre 1 e " + N + ":");

for (let num = 2; num <= N; num++) {

    let primo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        console.log(num);
    }
}
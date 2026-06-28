let temperatura = parseFloat(prompt("Digite a temperatura:"));
let opcao = prompt("Converter para Celsius (C) ou Fahrenheit (F)?");

let resultado;

if (opcao.toUpperCase() === "F") {
    resultado = (temperatura * 9/5) + 32;
    alert("Resultado: " + resultado + " °F");
}
else if (opcao.toUpperCase() === "C") {
    resultado = (temperatura - 32) * 5/9;
    alert("Resultado: " + resultado + " °C");
}
else {
    alert("Opção inválida!");
}
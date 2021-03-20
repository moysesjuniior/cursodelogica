var nome = "Renato Oliveira";
var peso = 76.00;
var altura = 1.78;
var imc = peso / (altura**2);

/*
console.log(nome);
console.log(`Peso: ${peso} - Altura: ${altura}`);
console.log(`Calculo do IMC: ${imc.toFixed(2)}`);
*/

var elNome = document.getElementById("nome");
elNome.innerHTML = nome;
var elNome = document.getElementById("peso");
elNome.innerHTML = peso;
var elNome = document.getElementById("altura");
elNome.innerHTML = altura;
var elNome = document.getElementById("imc");
elNome.innerHTML = imc.toFixed(2);

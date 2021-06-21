/*
Antonio Costa dos Santos tem 21 anos, pesa 67 kilos, tem 1.84 de altura e seu IMC é 19.58
*/ 

const nome = 'Antonio';
const sobreNome = 'Costa dos Santos';
const idade = 22;
const peso = 67;
const altura = 1.85;
let imc = peso / (altura * altura);
let anoNascimento = 2021 - idade

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kilos, tem ${altura} de altura e seu IMC é ${imc.toFixed(2)}`);
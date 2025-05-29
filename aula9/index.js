const nome = "Diuliano";
const sobrenome = "Stefhano";
const idade = 25;
const peso = 66;
const AlturaEmCm = 1.78;
let indiceMassaCorporal; // peso/ (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (AlturaEmCm * AlturaEmCm);
anoNascimento = 2025 - idade;

console.log(nome,sobrenome, 'tem', idade, 'anos', 'pesa',peso, 'kg');
console.log('tem', AlturaEmCm, 'de altura e seu indice de massa Corporal é de',indiceMassaCorporal);
console.log(nome, 'nasceu em ', anoNascimento,);

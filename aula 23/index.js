/* Primitivos(nao pode ser mudado) - string, number, boolean, undefined, null
 VALORES COPIADOS

Referencia(mutável) - array, object, function
VALORES PASSADOS POR REFERENCIA


*/
//let nome = 'diuliano';
//nome = 'kaio';
//console.log(nome[0]);

/*let a= [1,2,3];
let b = a;
let c = b;
console.log(a,b);

a.push(4);
console.log(a,b);

b.pop(4);
console.log(a, b);
console.log(c);
*/
const a = {
nome:   'Diuliano', sobrenome: 'Stefhano'
};
const b = a;
b.nome = 'kaio';

console.log(a);
console.log(b);

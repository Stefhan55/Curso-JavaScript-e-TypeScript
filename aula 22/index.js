//let array= [1,2,3,];
//array.push(4);
//array[0]= 'diuliano';
//array = 'Outra';
//console.log(array);
//function criaPessoa (nome, sobrenome, idade){
//return{nome,sobrenome,idade
//};
//}

//const pessoa1 = criaPessoa('diuliano', 'Stefhano', 25);
//console.log(pessoa1.idade);
const pessoa1 = {
nome: 'diuliano',
sobrenome: 'Stefhano',
idade: 25,

fala(){
     console.log(` O ${this.nome} ${this.sobrenome} está falando oi.....`)
    console.log(`E a minha idade atual é ${this.idade}.`);
   
},

incrementaIdade(){
    ++this.idade;
}
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
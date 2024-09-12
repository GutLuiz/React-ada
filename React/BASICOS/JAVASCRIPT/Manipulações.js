// ARRAYS: Permite armazenar multiplos valores.
let frutas = ["maça", "banana", "laranja"];
console.log(frutas[0]) // pegando a posição da fruta que voce quer printar
console.log(frutas[1]) // saida: "banana"
// METODOS COMUNS DE ARRAYS:
let numeros = [1,2,3];
numeros.push(4); //adiciona o numero no final do array
numeros.unshift(0); //adiciona o numero no começo do array
numeros.pop(); //remove o numero final do array
numeros.shift(); // remove o numero do começo do array.

//LOOPS: Executa um bloco e codigo varias vezes. O for é o mais usao.
//FOR:
let carros = ["palio", "pollo", "argo"];
for(let i = 0 ; i < carros.length; i++){
    console.log(carros[i]); // saidas de todos que estao na variavel
}
//FOREACH:
carros.forEach(function(carros){
    console.log(carros);
});

// OBJETOS: Usadas para armazenar pares de chave-valor.
let pessoa = {
    nome: "joao",
    idade: 30,
    saudacao: function(){
        return 'ola, meu nome é ${this.nome} e eu tenho ${this.idade} anos.'
    }
};
console.log(pessoa.nome); //ira sair 'joao"
console.log(pessoa.saudacao()); // printa a frase que esat dentro do obejto.


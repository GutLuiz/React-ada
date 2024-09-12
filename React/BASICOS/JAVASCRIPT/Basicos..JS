/*
Variaveis:
    - Usadas para armazenar valores que podem ser usados posteriormente no codigo
*/

// String:
let exemplo = "joão";
// Inteiro:
const exemplo1 = 25;
// decimais:
var exemplo2 = 1.75;
// OBS: O LET pode ser tudo, numeros, strings ou booleanos.

//OPERAÇÕES COM STRINGS:
//CONCATENAR:
let nome = "Gut";
let ola = "ola, " + exemplo + "!";
//INTERPOLAÇÃO:
let idade = 30;
let mensagem = 'Eu tenho $(idade) anos.';

//CONVERSÃO DE TIPOS(CONVERTER VARIAVEIS PARA OUTRA):
//STRING PARA NUMERO:
let string = "123";
let converte = Number(string); 
//CONVERTER NUMERO PARA STRING:
let stringnu = 456;
let texto = STRING(numero);

//OPERAÇÕES MATEMATICAS:
let soma = 5 + 5;
let sub = 5 - 3;
let multi = 5 * 3;
let divisão = 5/3;

// ESTRUTURAS CONDICIONAIS:
let idade1 = 26;

if(idade >= 18){
    console.log("voce é maior de idade");// Metodo de print no js.
}else{
    console.log("voce é menor de idade");
}

//FUNÇÕES(METODOS):
function saudação(nome){
    return 'ola, ${nome}!'
}
let resultado = saudacao("Maria"); //Colocou o nome para retornar na função.
console.log(resultado); // saida

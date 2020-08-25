console.log("Hello World")//comando console.log() é utilizado para exibir Logs em console ou terminal
    
//*********************************
//Variaveis e dados
//*********************************

var nome = "Carlos"; //variavel string
var idade = 23; //variavel int
var peso = 85.4; //variavel float
var humano = true; //variavel boolean

var familia = ["Carlos","Natalia","Ana","Fran","Kamila","Jose","Alexandre"];//Vetores

var pessoa = {
    nome: "Carlos",
    idade: 23,
    peso: 85.4,
    humano: true
};//Objetos

console.log(familia[1]); //log

console.log(pessoa.nome); //log

//*********************************
//Operações matematicas
//*********************************

var x = 10 , y = 5;
console.log(x,y); //log
var resultado = x+y;
console.log(resultado); //log
x += 3;//x + x + 3;
var z = x

console.log(z); //log

//*********************************
//Funções
//*********************************

function unirNome (nome1,nome2){//estrutura da função "function nomeDaFuncao(parametro1,parametro2)"
    var nomeCompleto = nome1 + nome2;//{ corpo da função quando foi chamada}
    return nomeCompleto;
}
var nomeCompleto = unirNome("Carlos","Eduardo");

console.log(nomeCompleto);

//*********************************
//Condicionais
//*********************************

function retornaSexo (sexo){//usando a função if e else, podemos decidir qual valor sera retornado
    if (sexo === "M"){//iff retorna verdadeiro
        return "Masculino";
    } else if (sexo === "F"){//else if retorna senão se
        return "Feminino";
    } else { //else retorna falso
        return "Outro";
    }
}
var resultado = retornaSexo("M");
console.log(resultado)
//caso a função haja diversos if e else, pode ser uma opção utilizar "switch"
function retornaSexo (sexo){
    switch (sexo){
        case "M":
            return "masculino";
        case "F":
            return "Feminino";
        default:
            return "Outro";
    }
}

//*********************************
//Operadores logicos
//*********************************

var sexo = "M",idade = 23;
// AND (&&), OR (||), NOT (!=)
if (sexo === "M" && idade >= 18){
    console.log("Ok");
}

//*********************************
//Condição ternaria
//*********************************

var sexo = "M";
var retorno = (sexo === "M") ? "Masculino" : "Feminino";
console.log(retorno)
// A condição ternaria pode ser utilizada quando a a necessidade de somente (1 if) e (1 else)
// utilizando o sinal de interrogação ? e os dois pontos : para identificar as opções{}

//*********************************
//Estrutura de Repetição
//*********************************

for (var i =0;i<=100; i++){
    console.log(i);
}
//condição for refere-se a um looping
while(j <=100){
    console.log(j);
    j++;
}
//condição while refere-se a um looping porém mais utilizado quando não se sabe a quantidade de vezes a serem executadas.

//*********************************
//Intervalo e timeout
//*********************************

function exibeAlgo(){
    console.log("Hello World");
}
setInterval(exibeAlgo,1000);
//setInterval propoe um intervalo de tempo para execução da função diversas vezes em referencia.
function exibeAlgo(){
    console.log("Hello World");
}
setTimeout(exibeAlgo,1000);
//setTimeout propoe um tempo de espera para execução da função uma vez.

//*********************************
//Interação com DOM
//*********************************

//Caixa de aviso no navegador
//html
<button onclick="mostraAlerta()">
Me pressione
</button>

//script
function mostraAlerta(){
alert("Este botão foi clicado");
}


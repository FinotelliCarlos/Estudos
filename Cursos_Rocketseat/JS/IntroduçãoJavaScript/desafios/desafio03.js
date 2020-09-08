//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
    if (skills == "Javascript"){
        return "true";
    } else{
        return "false";
        }
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);

const resultado = temHabilidade("Javascript")

console.log(resultado);
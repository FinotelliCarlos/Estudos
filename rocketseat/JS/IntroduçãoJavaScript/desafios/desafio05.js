//Escrever uma função que escreva 
//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function usData(dataUs){
    for (var us of dataUs) {
        console.log('O', us.nome, 'possui as habilidades: ', us.habilidades.join(', '));
    }
}
usData(usuarios);
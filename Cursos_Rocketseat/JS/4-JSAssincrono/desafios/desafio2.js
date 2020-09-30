const listElement = document.querySelector('ul');
const inputElement = document.querySelector('input');

function viewRepo (repositorios){
    for(repo of repositorios){
    const nameElement = document.createTextNode(repo.name);
    const liRepo = document.createElement('li');

        liRepo.appendChild(nameElement);
        listElement.appendChild(liRepo);
    }
}

function viewRepositorios(){
    const user = inputElement.Value;

    if (user) return;

    axios.get('https://api.github.com/users/FinotelliCarlos/repos')
    .then(function(response){
        viewRepo(response.data);
    })
}

function adicionar(){

    viewRepositorios(inputElement.value);
    inputElement.value = "";
}
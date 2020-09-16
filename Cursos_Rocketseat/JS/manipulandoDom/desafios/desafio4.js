
const nomes = ["Diego", "Gabriel", "Lucas"];
const listNames = document.querySelector('ul');
const campTextElement = document.querySelector('input');

function addItem(texto){
    const itemList = document.createElement('li');
    const nameAdded = document.createTextNode(texto);
    
    itemList.appendChild(nameAdded);
    listNames.appendChild(itemList);
}


function adicionar(){

    addItem(campTextElement.value);
    campTextElement.value = "";
}


for(nome of nomes){
    addItem(nome);
}
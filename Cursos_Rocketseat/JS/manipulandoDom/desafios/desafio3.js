const boxDiv = document.querySelector('div');

boxDiv.style.backgroundColor = 'black';
boxDiv.style.height = '110px';
boxDiv.style.width = '200px';
boxDiv.style.borderRadius = '10px';


const nomes = ["Carlos", "Celso", "Eduardo"];

const nameList = document.querySelector('ul');

for(nome of nomes){
    const newName = document.createElement('li');
    const itemList = document.createTextNode(nome);

    newName.appendChild(itemList);
    nameList.appendChild(newName);

    nameList.style.fontSize = '28px';
    nameList.style.fontWeight = '550';
    nameList.style.fontFamily = 'Arial';
    nameList.style.color = '#00EE00';

}
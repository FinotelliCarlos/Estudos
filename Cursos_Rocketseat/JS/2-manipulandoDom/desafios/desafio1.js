const myButton = document.getElementById('app-button');
const addButton = document.getElementById('new-box');

myButton.onclick = function(){
    const insertBox = document.createElement('div');

    insertBox.style.height = '100px';
    insertBox.style.width = '100px';
    insertBox.style.backgroundColor = '#000';
    insertBox.style.borderRadius = '10px';
    insertBox.style.margin = '5px';

    addButton.appendChild(insertBox);

}
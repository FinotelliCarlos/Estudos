const myButton = document.getElementById('app-button');
const addBox = document.getElementById('new-box');

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }
   var newColor = getRandomColor(); // #E943F0
   
myButton.onclick = function(){
    const insertBox = document.createElement('div');

    insertBox.style.height = '100px';
    insertBox.style.width = '100px';
    insertBox.style.backgroundColor = '#000';
    insertBox.style.borderRadius = '10px';
    insertBox.style.margin = '5px';

    insertBox.onmouseover = function(){
        insertBox.style.backgroundColor = getRandomColor();
    }

    addBox.appendChild(insertBox);

}


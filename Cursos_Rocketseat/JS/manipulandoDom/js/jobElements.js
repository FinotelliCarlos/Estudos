var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'https://www.google.com.br');

var textElement = document.createTextNode('Acessar site do google');
linkElement.appendChild(textElement);

var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);
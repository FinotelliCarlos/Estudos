const inputElement = document.querySelector('input[name=nome]');
const btnElement = document.querySelector('button.botao');

btnElement.onclick = function() {
    const text = inputElement.value;

    alert(text)
}
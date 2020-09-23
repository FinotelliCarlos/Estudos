var xhr = new XMLHttpRequest();//funcionalidade de acesso ao AJAX para recuperar funções de algum servidor.

xhr.open('GET', 'https://api.github.com/users/FinotelliCarlos');
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}
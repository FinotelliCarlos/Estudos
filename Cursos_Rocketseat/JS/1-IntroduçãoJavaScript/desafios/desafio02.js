//Criar uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {
    while (x <=y){
        if(x % 2 === 0){
            console.log(x);
        }
        x++;
    }
}
pares(32, 321);
'use strict'
let n;
let suma;

suma = 0;

function Calcular() {
    n = parseInt(document.getElementById('cantidad').value)
    suma = OperacionSuma(n)

    if(n>1){
        document.getElementById('Resultado').innerHTML = ("La suma de los " + n + " número que digitó es igual a: " + suma)
    }
    else{
        document.getElementById('Resultado').innerHTML = ("La suma del número que ingresó es: " + suma)
    }
}

function OperacionSuma(N) {
    let cont = 0;
    let num;
    let acum = 0;

    while (cont < N) {
        num = Number(prompt('Digite el número a sumar'));
        acum = acum + num;
        cont = cont + 1;
    }
    return acum;
}
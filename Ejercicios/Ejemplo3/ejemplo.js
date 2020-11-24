let cantidad;
let suma;

function Calcular(){
    cantidad = parseInt(document.getElementById('cantidad').value)
    alert(cantidad)
    suma = operacioSuma(cantidad);

    if(cantidad>1){
        document.getElementById('Resultado').innerHTML 
        =("Las suma de " + cantidad + " números es: " + suma)
    }else{
        document.getElementById('Resultado').innerHTML 
        =("El número es: " + suma)  
    }
}

function CalcularFor(){
    cantidad = parseInt(document.getElementById('cantidad').value)
    alert(cantidad)
    suma = operacioSuma(cantidad);

    if(cantidad>1){
        document.getElementById('Resultado').innerHTML 
        =("Las suma de " + cantidad + " números es: " + suma)
    }else{
        document.getElementById('Resultado').innerHTML 
        =("El número es: " + suma)  
    } 
}

function operacionSumaFor(N){
    let cont =0;
    let acum =0;
    let num;

    for (let i = 0; i < N; i++) {
        num = Number(prompt('Digite el número a sumar'))
        cont = cont +1;
        acum = acum + num;   
    }
    return acum;
}



function operacioSuma(N){
    let cont =0;
    let acum=0;
    let num;
    
    while (cont<N) {
        num = Number(prompt('Digite el número a sumar'))
        cont = cont +1;
        acum = acum + num;   
    }
    return acum;
}

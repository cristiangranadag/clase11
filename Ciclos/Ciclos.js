// Ciclo While
document.write("<br/>" + "<h1>" +"Ciclo While"+ "</h1>" + "<br/>")
var n=0
while (n<10) {
    n=(n+1)
    document.write(n + "<br/>")
    console.log(n);
    // alert("El número es: "+n)
    document.getElementById('Resultado').value = n
}

document.write("<br/>" + "<h1>" +"Ciclo While"+ "</h1>" + "<br/>")
var n=11
while (n>1) {
    n=(n-1)
    document.write(n + "<br/>")
    console.log(n);
    document.getElementById('Resultado').value = n
}


// Ciclo Do While
document.write("<br/>" + "<h1>" +"Ciclo Do While"+ "</h1>" + "<br/>")
var m=0
do {
    m=(m+1)
    document.write(m + "<br/>")
    console.log(m)
} while (m != 10);
console.log("Fin")

document.write("<br/>" + "<h1>" +"Ciclo Do While"+ "</h1>" + "<br/>")
var m=11
do {
    m=(m-1)
    document.write(m + "<br/>")
    console.log(m)
} while (m != 1);
console.log("Fin")


// Ciclo For
document.write("<br/>" + "<h1>" +"Ciclo for"+ "</h1>" + "<br/>")
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br/>")
}

document.write("<br/>" + "<h1>" +"Ciclo for"+ "</h1>" + "<br/>")
for (let i = 10; i > 0; i--) {
    document.write(i + "<br/>")
}
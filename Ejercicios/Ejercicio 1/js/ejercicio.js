
var n=11
while (n>1) {
    n=(n-1)
    document.write(n + "<br/>")
    console.log(n);
    document.getElementById('resultado').value= n
}

document.write("<br/>" + "<h1>" +"Ciclo for"+ "</h1>" + "<br/>")
for (let i = 10; i > 0; i--) {
    document.write(i + "<br/>") 
}

document.write("<br/>" + "<h1>" +"Ciclo Do while"+ "</h1>" + "<br/>")

var m=10
do {
    m=(m-1)
    document.write(m + "<br/>")
    console.log(m)
} while (m == 0);
console.log("Fin")
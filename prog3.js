//Vaiável Número 
var valor = Number (prompt("Digite um valor "));

for (i=0; i<valor; i++){
    //document.write("Valor atual  " + i + "<br>");

    if (i % 2 == 0){
    document.write("<p style='color:orange;'>" +i+ "</p>")

    }else{

        document.write("<p style='color:blue;'>" +i+ "</p>")

    }

}
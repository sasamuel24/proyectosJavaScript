// suma , resta , multiplicacion , division
a= 10;
b= 7;
 function suma(a,b){
    resultado = a+b;
    console.log(resultado)
 }

 suma(a,b);
 console.log("El resultado de la operacion suma es", resultado);

 c= 50;
 d=24;
 function resta (c,d){  
    resultado= c-d;
    console.log(resultado);
 }

 resta(c,d);
 console.log("El resultado de la operacion resta es", resultado);

 e=40;
 f=68;
function multiplicacion(e,f){
    resultado= e*f;
    console.log(resultado);
}
multiplicacion(e,f)
console.log("El resultado de la operacion multiplicacion es", resultado);

h=1456
s=56
function division(h,s){
    resultado= h/s;
    console.log(resultado);
}
division(h,s);
console.log("El resultado de la operacion division es", resultado);

/* suma , resta , multiplicacion , division

function calculadora(num,operador,num2){
    let resultado; // definimos la variable resultado con lef

    switch (operador) {
        case "+": 

                resultado = num + num2;
            break;
        case "-":
            resultado = num - num2;
            break;
        case "/": 
            resultado= num / num2;
            break;
        case "*":
            resultado= num * num2;
            break;
        default:
            resultado = "operador matematico no valido";
            break;
    }

    console.log(resultado);

}

num= parseInt(prompt("Ingrese el primer numero")); // parseint se utiliza para sacar un numero a un numero entero 
// prompt es para que imprima el mensaje

operador= prompt("Ingrse el operador matematico que desea aplicar");

num2 = parseInt(prompt("Ingrese el segundo numero"));

calculadora(num,operador,num2);

*/
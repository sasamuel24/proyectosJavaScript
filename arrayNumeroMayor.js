// QUEREMOS HACER UN RECORRIDO EN UN ARRAY PARA ENCONTRAR EL NUMERO MAYOR
let numeros = [5,10,15,60,8];
let numeroMaximo= 0;
let tamañoArray = numeros.length; // este comando hace referencia ala canitdad de posiciones que tiene el array

for(let i=0;i<tamañoArray;i++) {
    if(numeroMaximo<numeros[i]){
        numeroMaximo = numeros[i];
    }

}
console.log(numeroMaximo);
console.log("el numero maximo del arreglo es:",numeroMaximo);

let maximo = Math.max(100 , 1000, 1456 , 24);
console.log(maximo);
console.log("el numero maximo del arreglo es:",maximo);



/*Escribe un programa que pida al usuario ingresar un número y l
uego muestre en la consola si ese número es par o impar. 
Para determinar si es par o impar, puedes utilizar el operador de módulo (%), 
que devuelve el resto de una división. Si el 
resto de dividir el número por 2 es igual a cero, el número es par. De lo contrario, es impar.*/

//First line

function determinarParImpar(numero){
    if(numero % 2 == 0){
        console.log(numero + ' es par ');
    }else{
        console.log(numero + ' es impar');
    }
}

determinarParImpar(5);
determinarParImpar(10);
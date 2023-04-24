/*Escribe una función en JavaScript que tome un array de números
 y calcule el promedio de los números pares del array. Si el array no tiene números pares,
la función debería devolver 0. La función debería tomar un solo argumento: 
el array de números. A continuación, te presento un ejemplo de entrada y salida esperada:

Ejemplo de entrada: [1, 2, 3, 4, 5, 6, 7, 8]
Resultado: 5 */

const promediPar =(array) =>{
    let sum = 0;
    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){ // calculamos si cada numero del array es par
            sum += array[i]; // lo vamos añadiendo a la suma
            count++; //el contador va aumentando por cada numero par. 
        }
    }
    if(count === 0){
        return 0;
    }else{
        return sum / count;
    }
}

//Ejemplo de uso.
let arrauNumber = [2,4,6,8,10,12,14,16,18,20];
let promedio = promediPar(arrauNumber);
console.log(promedio);
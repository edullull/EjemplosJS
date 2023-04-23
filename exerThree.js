/*Escribir una función en JavaScript que reciba como parámetro un número 
entero positivo y calcule la suma de todos los números enteros positivos 
que son múltiplos de 3 o 5 y que sean menores que el número dado. Por ejemplo, 
si se llama a la función con el número 10, debe devolver el valor 23 (3 + 5 + 6 + 9).*/

function plusNumberPositive(Number){
    let plus = 0;
    for(let i=3; i < Number; i += 3){
        plus += i;
    }
    for(let i  = 5; i < Number; i += 5){
        if(i % 3 !== 0){
            plus += i;
        }
    }

    return plus;
}

console.log(plusNumberPositive(20));

const plusNumberP = (number) =>{
    let plus = 0;
    for(let i = 3; i < number; i += 3){
        plus += i;
    }
    for(let i = 5; i < number; i += 5){
        if( i % 3 !== 0)
        plus += i;
    }
    return plus;
}

console.log(plusNumberP(10));
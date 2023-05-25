/*Generador de una contraseña segura
Ejercicio: Generador de contraseña segura

Crea un programa que genere una contraseña segura de manera aleatoria. La contraseña debe cumplir con los siguientes criterios:

1. Tener una longitud de al menos 8 caracteres.
2. Contener una combinación de letras (mayúsculas y minúsculas), números y caracteres especiales.
3. No contener espacios en blanco u otros caracteres no permitidos.
4. El programa debe imprimir en la consola la contraseña generada.

Puedes utilizar los siguientes caracteres especiales: !@#$%^&*()*/


function generarContrasena(){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const longitud = 8;
    let contraseña = '';

    for (let i = 0; i < longitud; i++){
        const indiceAleatorio = Math.floor(Math.random()* caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }

    return contraseña;
}   

const contrasenaSegura = generarContrasena();
console.log("Contraseña segura generada: " + contrasenaSegura);
/*Crea una función llamada "validarContraseña" que tome una cadena de caracteres como 
argumento y verifique si cumple con los siguientes requisitos:

La contraseña debe tener al menos 8 caracteres.
La contraseña debe contener al menos un número.
La contraseña debe contener al menos una letra mayúscula.
La contraseña debe contener al menos una letra minúscula.
La función debe devolver "true" si la contraseña cumple con todos los requisitos y "false" si no.*/

const validationPassword = (password) => {
    if(password.length < 8){
        return false;
    }

    const hasNumber = /\d/.test(password);
    const hasMayus = /[A-Z]/.test(password);
    const hasMinus = /[a-z]/.test(password);

    return hasMayus && hasNumber && hasMinus;
}

console.log(validationPassword("Eduardo1"));
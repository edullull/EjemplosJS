// Lo primero que vamos a hacer es un ejemplo sencillo con switch

const day = "Monday";

switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    default:
        console.log("No is Monday!!!!");
        break;
}

// En este ejemplo day es Monday y se cumple la condicion y nos dice que "Today is Monday"
// en el caso de que no Monday nos devuelve el default. Ejemplo:

const days = "Friday";

switch(days){
    case "Monday":
        console.log("Today is Monday");
        break;
    default:
        console.log("No is Monday!!!!");
        break;
}

// estos ejemplos se realizan en la consola del navegador, este caso en el Chrome.
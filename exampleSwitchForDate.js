// Aqui vamos ha hacer un ejemplo con la funcion Date(), let´s goooo!!!!!

const day = new Date().getDay();

switch(day){
    case 1:
        console.log("Hoy es Lunes jejeje")
        break;
    case 2:
        console.log("Hoy es Martes jajaja")
        break;
    case 3:
        console.log("Hoy es Miercoles jajaja")
        break;
    case 4:
        console.log("Hoy es Jueves jajaja")
        break;
    default:
        console.log("Se acerca el fin de semana , YUPIIIII!!!!!!!")
        break;
}

//**información de la hora y la fecha usando el objeto Date. Este objeto tiene un método llamado getDay() 
//que nos devuelve el día de la semana en formato numérico, siendo 0 el domingo y 6 el sábado
// *********   Agrupando los CASE  ******

const dia = new Date().getDay();

switch (dia){
    case 0:
    case 6:
        console.log("Hoy es fin de semana! JJEJEJE");
        break;
    case 1:
    case 2:
        console.log("Sera el Martes digo yo")
        break;
    case 3:        
    case 4:
        console.log("No, a trabajar ");
        break;
    case 5:
        console.log("Hoy es viernes... yuiiii");
        break;            
}

// La solucion se puede ver en la consola del navegador
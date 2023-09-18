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
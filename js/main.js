
//Con respecto a esta variable, mi cerebro cree que esta bien crearla y luego hice la function, pero no estoy del todo claro si sirve de mucho.
let puedeJugar = true;
//Function con condicionales:
function validarEdad (){
    let edad = Number(prompt("Ingresa la edad del jugador"));
    if (edad > 20){
        console.log("El jugador no pertenece a la categoria y no puede jugar");
    } else {
        console.log("El jugador puede jugar");
    }
}
validarEdad()

//Bucle: numero ganador
let fortuna = prompt("Cual es el numero ganador?")
while (fortuna != 5){  
    if (fortuna != 5){
        prompt("Sigue intentando");
        console.log("Sigue intentando");
    }if (fortuna == 5){
        alert("Ganaste")
        break;
    }
}

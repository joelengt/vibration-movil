var btnVibrar = $("#vibrar");
var btnVibrarDos = $("#vibrar-dos");
var btnVibrarMucho = $("#vibrar-mucho");
var btnVibrarOff = $("#vibrar-off");


if (window.navigator && window.navigator.vibrate) {

	// Vibrar una vez por 1s
   btnVibrar.addEventListener("click", function () {
       navigator.vibrate(1000);
       console.log("Vibro una vez brr!");
   }, false);

	// Vibrar dos veces por y dos silencios intermedios
   btnVibrarDos.addEventListener("click", function () {
       navigator.vibrate([1000, 300, 800, 400]);
       console.log("Parace abeja!! brrr brr!");
   }, false);

	// Vibrar mucho, por 15s
   btnVibrarMucho.addEventListener("click", function () {
       navigator.vibrate(15000);
       console.log("No es mucho?? brrrrrrrrrrrr!"); 
   }, false);

   // Parar Vibración
   btnVibrarOff.addEventListener("click", function () {
        navigator.vibrate(0);
       console.log("No pos suficiente :p");
        // o tambien asi
        // navigator.vibrate([]);

    }, false);
} else {
   alert("Tu dispositivo no soporta la API de vibración");
}


function $ (argument) {
	 return document.querySelector(argument);  
}

// if (window.navigator && window.navigator.vibrate) {
//    // En caso de ser compatible
//    // alert("Este dispositivo es compatible con Vibracion :D");
//    navigator.vibrate (1000);
//    // 1000 => 1s , si quiero más tiempo solo aumentoel valor
   
//    // entre pausas y tiempos
//    // Vibra dos veces y dos pausas de medio segundo
//    navigator.vibrate([1000, 500, 1000, 500]);

//    // Detener la vibracion
//    navigator.vibrate (0);
//    // o
//    navigator.vibrate ([]);

//    // las dos fosrmas son validas

// } else {
//    // En caso de no ser compatible
//    alert('Tu dispositivo no soporta la API de vibración')
// }

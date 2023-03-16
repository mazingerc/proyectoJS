alert('Veamos cual es tu número de la suerte')
let edad = parseInt(prompt("Dime tu edad"));
if(edad >=18){
    alert('Perfecto! sigamos');
}else{
    alert('Según la ley XXXX no puedes... es broma, A JUGAR!');
}

let nombreUsuario = prompt('¿Cúal es tu nombre?');
while(nombreUsuario==''){
   alert('Disculpa, ¿puedes repetir?');
   nombreUsuario = prompt('¿Cúal es tu nombre?');
}
alert('Hola '+nombreUsuario+ ', ahora dime tres años importantes para ti');

let acumulador = 0;
for(let i=1; i<4; i++){
    let fecha = parseInt(prompt('Introduce la fecha número '+i));
    acumulador = acumulador + fecha;
}

function numeroFinal(){
    let calculo = parseInt(acumulador / 3 + acumulador);
    alert('El número al que debes apostar en la Quiniela es: '+calculo);
}

numeroFinal();
alert('Mucha suerte y hasta la próxima');

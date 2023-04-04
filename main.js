setTimeout(()=>{

    alert('Veamos cuales son tus números de la suerte')
    let edad = parseInt(prompt("Dime tu edad"));
        if(edad >=18){
    alert('Perfecto! sigamos');
    }   else{
    alert('Debes ser mayor de edad para jugar pero haremos una excepción');
    }

    let nombreUsuario = prompt('¿Cúal es tu nombre?');
        while(nombreUsuario==''){
    alert('Disculpa, ¿puedes repetir?');
    nombreUsuario = prompt('¿Cúal es tu nombre?');
    }
    alert('Hola '+nombreUsuario+ ', te daré uno a uno los números de tu combinación ganadora');

    function generadorAleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
        for(let i = 1; i <= 5; ++i){
    alert(generadorAleatorio(1,50));
    }

    let respuesta = true;
    for (respuesta; respuesta == true;){
    consulta = prompt('¿Quiere consultar los premios? \n 1. Acierto \n 2. Aciertos \n 3. Aciertos \n 4. Aciertos \n 5. Aciertos \n 6. No');
    
        if(consulta == 1)
            alert('Has ganado ' +premios[0]+ ' euros');
        else if(consulta == 2)
            alert('Bien! Has ganado ' +premios[1]+ ' euros');
        else if(consulta == 3)
            alert('Muy bien! Has ganado ' +premios[2]+ ' euros');
        else if(consulta == 4)
            alert('Genial! Has ganado ' +premios[3]+ ' euros');
        else if(consulta == 5)
            alert('Felicidades! Has ganado ' +premios[4]+ ' euros');
        else(consulta == 6)
            alert('Recuerda que el próximo sorteo se celebra el ' +sorteos.fecha)
            alert('Muchas gracias, nos vemos pronto!');
        break;
    }


},1000);

const premios = [5, 20, 500, 2000, 5000]
const sorteos = {
    nombre: "euromillon",
    fecha: "jueves",
    bote: 10000,
}

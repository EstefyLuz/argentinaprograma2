const PIEDRA = "Piedra";
const PAPEL = "Papel";
const TIJERAS = "Tijeras";
const GANA_COMPUTADORA = "Gana la Ronda la Computadora";
const GANA_USUARIO = "Gana la ronda el Usuario";
const EMPATE = "Hay un empate!";
const ERROR = "Debes ingresar tu nombre";
let listaEleccion = [PIEDRA, PAPEL, TIJERAS];
let nombreInput;
let mostrarNombre = document.getElementById("nombreMostrado");

document.addEventListener("DOMContentLoaded", function () {
    const buttonNombre = document.getElementById("buttonNombre");

    buttonNombre.addEventListener("click", () => {
        nombreInput = document.getElementById("nombre").value.trim().toUpperCase(); // saco espacios de principio y fin de input y paso a mayuscula.
        validarNombre(nombreInput); // valido que haya un nombre de jugador
        mostrarNombre.textContent = `Jugadores: ${nombreInput} - PC`; // muestro los jugadores
    });
});

// funcion para validar input
function validarNombre(nombreInput) {
    const soloLetras = /^[A-Za-z]+$/;
    if (!soloLetras.test(nombreInput)) {
        alert(ERROR);
    }
}

// funcion para iniciar el juego
function iniciarJuego(){
    
}

function obtenerJugadaComputadora() {
    let numAleatorio = Math.floor(Math.random() * 3);
    return listaEleccion[numAleatorio];
}

function mostrarEleccion(usEleccion) {
    const eleccionUsuario = document.getElementById("usElije"); 
    eleccionUsuario.textContent = `Elegiste: ${usEleccion}`;

    const pcEleccion = obtenerJugadaComputadora();
    const eleccionCompu = document.getElementById("pcElije");
    eleccionCompu.textContent = `La PC elige: ${pcEleccion}`;

    const resultado = resultadoRonda(pcEleccion, usEleccion);
    const ganaRonda = document.getElementById("ganaRonda");
    ganaRonda.textContent = resultado;
}

function resultadoRonda(compu, usuario) {
    if ((compu === PIEDRA && usuario === TIJERAS) || (compu === PAPEL && usuario === PIEDRA) || (compu === TIJERAS && usuario === PAPEL)) {
        return GANA_COMPUTADORA;
    } else if ((usuario === PIEDRA && compu === TIJERAS) || (usuario === PAPEL && compu === PIEDRA) || (usuario === TIJERAS && compu === PAPEL)) {
        return GANA_USUARIO;
    } else if ((usuario === PIEDRA && compu === PIEDRA) || (usuario === PAPEL && compu === PAPEL) || (usuario === TIJERAS && compu === TIJERAS)) {
        return EMPATE;
    }
}



function resultadoRonda(compu,usuario){
    if ((compu === PIEDRA && usuario === TIJERAS) || (compu === PAPEL && usuario === PIEDRA) || (compu === TIJERAS && usuario === PAPEL)){
        return GANA_COMPUTADORA;
    } else if ((usuario === PIEDRA && compu === TIJERAS) || (usuario === PAPEL && compu === PIEDRA) || (usuario === TIJERAS && compu === PAPEL)){
        return GANA_USUARIO;
    } else if ((usuario === PIEDRA && compu === PIEDRA) || (usuario === PAPEL && compu === PAPEL) || (usuario === TIJERAS && compu === TIJERAS)){
        return EMPATE;
    } 

}


/*
function obtenerJugadaUsuario(){
    let eleccionUsuario = document.getElementsByClassName("seleccionarJugada");
    let elijePiedra = document.getElementById("piedra");
    let elijePapel = document.getElementById("papel");
    let elijeTijeras = document.getElementById("tijeras");

    elijePiedra.addEventListener("click", ()=>{
        eleccionUsuario = PIEDRA;
        document.getElementById("usElije").innerHTML = `${nombre} elije ${PIEDRA}`;

    })

}

    if (eleccionUsuario.toLowerCase() != PIEDRA && eleccionUsuario.toLowerCase() != PAPEL && eleccionUsuario.toLowerCase() != TIJERAS){
        console.log(ERROR);
        return obtenerJugadaUsuario();
    } else {
        return eleccionUsuario.toLowerCase();
    }


function determinarGanador(compu,usuario){
    if ((compu === PIEDRA && usuario === TIJERAS) || (compu === PAPEL && usuario === PIEDRA) || (compu === TIJERAS && usuario === PAPEL)){
        return GANA_COMPUTADORA;
    } else if ((usuario === PIEDRA && compu === TIJERAS) || (usuario === PAPEL && compu === PIEDRA) || (usuario === TIJERAS && compu === PAPEL)){
        return GANA_USUARIO;
    } else if ((usuario === PIEDRA && compu === PIEDRA) || (usuario === PAPEL && compu === PAPEL) || (usuario === TIJERAS && compu === TIJERAS)){
        return EMPATE;
    } 
}

let resutadoComputadora = obtenerJugadaComputadora();
let resultadoJugador = obtenerJugadaUsuario();

function resultadoDelJuego(){
    let resultadoFinal = determinarGanador(resutadoComputadora,resultadoJugador);
    return resultadoFinal;
}

console.log("La computadora eligio:", resutadoComputadora);
console.log("El usuario eligio:", resultadoJugador);
console.log("El resultado fue:", resultadoDelJuego());

*/
const PIEDRA = "Piedra";
const PAPEL = "Papel";
const TIJERAS = "Tijeras";
const GANA_COMPUTADORA = "Gana la Computadora";
const GANA_USUARIO = "Gana el Usuario";
const EMPATE = "Hay un empate!";
const ERROR = "Debes ingresar tu nombre";
let listaEleccion = [PIEDRA, PAPEL, TIJERAS];
let nombreInput;
let mostrarNombre = document.getElementById("nombreMostrado");
let nombreIngresado = false;
let resultados = []; // Variable para almacenar los resultados de las rondas
// Las siguientes constantes las pase acá para no tener que volver a redeclararlas en la función Reiniciar
const eleccionUsuario = document.getElementById("usElije"); 
const eleccionCompu = document.getElementById("pcElije");    

const marcadorRondaUsuario = document.getElementById("MarcadorUs");
const marcadorRondaPc = document.getElementById("MarcadorPc");


document.addEventListener("DOMContentLoaded", function () {
    const buttonNombre = document.getElementById("buttonNombre");

    buttonNombre.addEventListener("click", () => {
        nombreInput = document.getElementById("nombre").value.trim().toUpperCase();
        if (validarNombre(nombreInput)) {
            mostrarNombre.textContent = `Jugadores: ${nombreInput} - PC`;
            nombreIngresado = true;
            habilitarEleccion();
            marcadorRondaUsuario.textContent = `${nombreInput}:`;
            eleccionUsuario.textContent = `${nombreInput}:`;
        } 
        }); 
    
}); 


function validarNombre(nombreInput) {
    if (nombreInput === "") {
        alert(ERROR);
        return false;
    } else {
        return true;
    }
}

function habilitarEleccion() {
    const clickearElecciones = document.querySelectorAll("#seleccionarJugada button");
    clickearElecciones.forEach(button => {
        button.removeAttribute("disabled");
        button.addEventListener("click", function() {
            if (nombreIngresado) {
                const eleccion = this.getAttribute("data-eleccion");
                mostrarEleccion(eleccion);
            }
        });
    });
}

function obtenerJugadaComputadora() {
    let numAleatorio = Math.floor(Math.random() * 3);
    return listaEleccion[numAleatorio];
}

function mostrarEleccion(usEleccion) {
    eleccionUsuario.textContent = `${nombreInput} elige: ` + `${usEleccion}`;
    const pcEleccion = obtenerJugadaComputadora();
    eleccionCompu.textContent = `La PC elige: ${pcEleccion}`;

    const resultado = resultadoRonda(pcEleccion, usEleccion);
    resultados.push(resultado); // Agregar resultado a la lista de resultados
    const ganaRonda = document.getElementById("ganaRonda");
    ganaRonda.textContent = "Ronda: " + resultado;

    actualizarMarcador();
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

function actualizarMarcador() {


    let sumaRondaUs = resultados.filter(resultado => resultado === GANA_USUARIO).length;
    let sumaRondaPc = resultados.filter(resultado => resultado === GANA_COMPUTADORA).length;

    marcadorRondaUsuario.textContent = `${nombreInput}: ${sumaRondaUs}`;
    marcadorRondaPc.textContent = `PC: ${sumaRondaPc}`;

    ganadorFinal(sumaRondaUs, sumaRondaPc);
}

function ganadorFinal(sumaRondaUs, sumaRondaPc){
    if (sumaRondaUs === 3){
        alert(GANA_USUARIO);
    } else if (sumaRondaPc === 3){
        alert(GANA_COMPUTADORA);
    } else if (resultados.length === 5){
        if (sumaRondaUs > sumaRondaPc){
            alert(GANA_USUARIO);
        } else if (sumaRondaUs < sumaRondaPc){
            alert(GANA_COMPUTADORA);
        } else if (sumaRondaUs === sumaRondaPc){
            alert(EMPATE);
        }
    }
}

function reiniciarJuego(){
    const inputNombre = document.getElementById("nombre");
    inputNombre.value = "";
    nombreInput = ""; //ok
    nombreIngresado = false;
    resultados = [];
    mostrarNombre.textContent = "";
    eleccionUsuario.textContent = "Usuario:";
    eleccionCompu.textContent = "PC:";
    ganaRonda.textContent ="-";
    marcadorRondaUsuario.textContent = "Usuario: 0";
    marcadorRondaPc.textContent = "PC: 0";
}

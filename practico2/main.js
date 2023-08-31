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
let resultados = []; 
const eleccionUsuario = document.getElementById("usElije"); 
const eleccionCompu = document.getElementById("pcElije");    
const marcadorRondaUsuario = document.getElementById("MarcadorUs");
const marcadorRondaPc = document.getElementById("MarcadorPc");

// funcion para pagina y que cuando verifique que el nombre ingresado es correcto 
//(saca espacios de inicio y fin y pasa a mayuscula). Si el nombre esta ok
// muestre el nombre, habilite la eleccion y actualice los nombres en el marcador y elecciones
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

// funcion que valida que se haya ingresado nombre con al menos un caracter
// retorna true o false para usar el valor antes de habilitar los botones de eleccion
function validarNombre(nombreInput) {
    if (nombreInput === "") {
        alert(ERROR);
        return false;
    } else {
        return true;
    }
}

// funcion para habilitar el uso de los botones de P,P y T, 
// que verifica si el nombre ingresado es correcto antes de habilitar
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

// funcion que hace que la compu haga una eleccion random
function obtenerJugadaComputadora() {
    let numAleatorio = Math.floor(Math.random() * 3);
    return listaEleccion[numAleatorio];
}

// muestra la eleccion de usuario y compu. Almacena el resultado de la ronda en la variable resultado
// para luego contabilizar el corte de rondas en la funcion ganador final. Llamo a actualizar marcador
function mostrarEleccion(usEleccion) {
    eleccionUsuario.textContent = `${nombreInput} elige: ` + `${usEleccion}`;
    let pcEleccion = obtenerJugadaComputadora();
    eleccionCompu.textContent = `La PC elige: ${pcEleccion}`;

    let resultado = resultadoRonda(pcEleccion, usEleccion);
    resultados.push(resultado);
    const ganaRonda = document.getElementById("ganaRonda");
    ganaRonda.textContent = "Ronda: " + resultado;

    actualizarMarcador();
}

// reglas del juego, quien gana a quien.
function resultadoRonda(compu, usuario) {
    if ((compu === PIEDRA && usuario === TIJERAS) || (compu === PAPEL && usuario === PIEDRA) 
    || (compu === TIJERAS && usuario === PAPEL)) {
        return GANA_COMPUTADORA;
    } else if ((usuario === PIEDRA && compu === TIJERAS) || (usuario === PAPEL && compu === PIEDRA) 
    || (usuario === TIJERAS && compu === PAPEL)) {
        return GANA_USUARIO;
    } else if ((usuario === PIEDRA && compu === PIEDRA) || (usuario === PAPEL && compu === PAPEL) 
    || (usuario === TIJERAS && compu === TIJERAS)) {
        return EMPATE;
    }
}

// Suma cada ronda ganada por cada jugador, en sumaRondaUs y sumaRondaPc que luego se usa para
// para usarlo en averiguar el ganador final. Tambien actualiza el marcador con las rondas que gano cada uno
function actualizarMarcador() {
    let sumaRondaUs = resultados.filter(resultado => resultado === GANA_USUARIO).length;
    let sumaRondaPc = resultados.filter(resultado => resultado === GANA_COMPUTADORA).length;

    marcadorRondaUsuario.textContent = `${nombreInput}: ${sumaRondaUs}`;
    marcadorRondaPc.textContent = `PC: ${sumaRondaPc}`;

    ganadorFinal(sumaRondaUs, sumaRondaPc);
}

// determina quien gana bajo la condicion de que el ganador sea quien gane 3 veces primero o al mejor de 5 rondas
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

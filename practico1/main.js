// Creo la funcion que realiza los calculos segun la operacion seleccionada
function Operaciones(operacion, x, y) {
    let res = 0;
    if (operacion === "+" || operacion === "-" || operacion === "*"
        || operacion === "/") {
        if (operacion == "+") {
            res = x + y;
        } else if (operacion == "-") {
            res = x - y;
        } else if (operacion == "*") {
            res = x * y;
        } else if (operacion == "/") {
            // Valido que no se divida por cero
            if (y == 0) {
                res = "No se puede dividir por 0";
            } else {
                res = x / y;
            }
        }
    } return res;
}
//Funcion que calcula todo
function Calcular() {
    // Defino variables a utilizar, agrego float para que utilice decimales.
    let x = parseFloat(document.getElementById("operando1").value);
    let y = parseFloat(document.getElementById("operando2").value);
    let operacion = document.getElementById("operaciones").value;
    
    //Valido que los campos input tengan un numero y alerto si falta alguno, tambien select
    /*Los else if que finalizan en return lo puse para impedir que se siga ejecutando el
    codigo y llegue al resultado = NaN y que se muestre en resultado por pantalla*/
    if (operacion === "selecciona la Operacion") {
        alert("Debe ingresar una operacion que desea realizar");
    } else if (isNaN(x)) {
        alert("Debe ingresar un primer valor numerico");
        return;
    } else if (isNaN(y)) {
        alert("Debe ingresar un segundo valor numerico")
        return;
    }

    //Guardo en la variable resultado lo que retorna operaciones() para poder utilizarlo
    let resultado = Operaciones(operacion, x, y);

    //Verifico si el valor es mayor o menor a 10000000000/ 
    if (resultado > 10000000000) {
        alert("El resultado es demasiado grande");
        return;
    } else if (resultado < -10000000000) {
        alert("El resultado es demaciado pequeño");
        return;
    }

    //Muestro el resultado por pantalla
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}
//Función para limpiar el formulario y restaurar al valor predeterminado del resultado
function limpiar() {
    document.getElementById("Calculadora").reset();
    document.getElementById("resultado").innerHTML = "El resultado es: "
}
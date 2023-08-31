# Juego de PIEDRA, PAPEL O TIJERAS

El siguiente juego es el piedra, papel y tijeras.

## Como se juega? 🚀

* Papel gana a piedra, piedra gana a tijera y tijera gana a papel. 
* Se juega contra la pc. 
* la pc elige un número aleatorio del 0 al 2, donde cada una va a corresponder a una selección. 
* El usuario elije primeramente sin saber que eligió la computadora. 
* Luego de las elecciones saldran los resultados por pantalla.
* Gana la partida quien _gane mas veces en 5 intentos_ o _quien llegue a tres rondas ganadas primero._ 

### Para comenzar a jugar 📋

Para poder jugar es necesio ingresar un nombre, si no se ingresa, no se habilitan las opciones.


### Instalación 🔧

No necesita instalacion ya que se puede acceder a traves del link de github https://estefyluz.github.io/argentinaprograma2/practico2/

## Ejecución las pruebas ⚙️

***Campos de valores en input nombre*** El input admite numeros, simbolos y letras, por si se quiere ingresar algun alias diferente a un nombre, y por si se quiere ingresar mas de un nombre. 
Si se hace click en el boton ingresar y hay solo espacios o no hay nada escrito sale una alerta para ingresar el nombre.

***opciones de piedra, papel o tijeras:*** Para seleccionar la operaciones a elegir. Es necesario ingresar el nombre primero. La eleccion se hace mediante un click. 
En la parte de elecciones se mostrara tanto la eleccion de la ronda del usuario como de la pc.

***Resultados:*** 
Se muestran los resultados de la ronda en el marcador, quien contabiliza como estan saliendo las manos.

### Pruebas 🔩

Se realizaron pruebas para confirmar la funcionalidad del juego.

* Se han evaluado casos donde los campos de entrada esten vacíos, mostrando alertas para informar al usuario sobre la necesidad de completarlos.

* Se han realizado validaciones para verificar que los resultados de las rondas y el resultado final sean correctos. 

* Se han realizado validaciones para verificar que los marcadores y elecciones ingresen las opciones correctas.

* Se verifica el uso del boton reiniciar para confirmar que funcione correctamente.

## Comentarios a mejorar ⌨️

* El boton  _Reiniciar_  en este caso recarga la pagina, con lo cual, a futuro se espera crear una funcion que  sirva para que reinicie el juego sin necesidad de recargar. 

Se intento utilizar el siguiente código pero no funcionaba a la hora de reiniciar la cantidad de rondas a 5 jugadas.

```
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
```

* También queda pendiente de mejorar que al hacer click en las elecciones sin haber agragado un nombre de usuario salga una alerta, por el momento la alerta solo sale cuando clickeamos _ingresar nombre_

* Por otro lado a mejorar, se espera que las funciones sean mas limpias, no se realizo como esperaba por una cuestion de tiempo pero queda pendiente a mejoras. Tanto en la declaracion de variables y constantes como en el orden en el cual fueron declaradas las mismas.

## Construido con 🛠️

HTML, Css y Java Script. 

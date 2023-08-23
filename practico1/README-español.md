# Calculadora Simple

La siguiente calculadora se hizo con motivo del trabajo práctico N°1 de la segunda parte del Curso de Programación Imperativa de Java Script: Páginas web con componentes dinámicos.

## Sobre la calculadora 🚀

Realiza las operaciones básicas de suma, resta, multiplicación y división entre dos números.

### Pre-requisitos 📋

Para poder utilizar la calculadora, solo se necesita tener acceso a internet y un navegador web. Se pueden usar navegadores populares como Chrome, Mozilla Firefox, Brave, entre otros.


### Instalación 🔧

La calculadora es accesible en línea, por lo que no requiere ninguna instalación local. Se puede acceder a ella mediante el enlace de github.

## Ejecución las pruebas ⚙️

***Campos de valores numéricos:*** Ambos imput admiten sólo números (excepto la letra e, que entiendo es tomada como exponencial). De todos modos no realiza el cálculo de la misma. Pedirá ingresar un valor v+alido a la capacidad de ejecucián de la calculadora. 

***Selector:*** Para seleccionar la operaciones a realizar. La operacián seleccionada se ejecuta sálo cuando se selecciona el botón de **Calcular resultado**

***Button:*** 
Calcular el resultado: ejecuta la operación seleccionada. Y muestra el resultado por pantalla. 
Limpiar Calculadora: Restaura la calculadora tanto en sus valores input, como select y button. 

### Pruebas 🔩

Se realizaron pruebas para confirmar la funcionalidad de la calculadora.

* Se han evaluado casos donde los campos de entrada o la selección de operación estén incompletos, mostrando alertas para informar al usuario sobre la necesidad de completarlos.

* Se han realizado validaciones para evitar operaciones inválidas, como la división por cero, brindando alertas para informar al usuario sobre estas restricciones.

* La calculadora no admite resultados mayores a 10000000000 o menores a -10000000000 se verifica que advierta al usuario si el resultado es muy grande o muy pequeño. 

* Solo se admiten valores numéricos (salvo que sea una e, pero no realiza la operación). Los input sólo permiten numeros. 

* Se verifica que se realicen operaciones decimales correctamente para que el resultado tenga mayor exactitud. 

## Cómo Usar la Calculadora ⌨️

* Los campos para ingresar valores permiten realizar las operaciones solo con valores numericos. En el caso de no contener los mismos o al ingresar algun valor erroneo solicitara inresar un valor correcto.

* El selector permite elegir la operacion a realizar. Es necesario elegir una opcion para que se ejecute la operacion.

* Una vez ingresados los valores y la operacion a realizar, el boton de **Calcular el resultado** da paso al resultado. 

* Para limpiar las operaciones realizadas esta el boton **Limpiar Calculadora**

## Construido con 🛠️

HTML, Css y Java Script. 




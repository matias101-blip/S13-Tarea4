# Tarea 4 - Algoritmo
## Realizar funciones reutilizables para pasar argumentos.
### Ejercicios:
#### Divisores:
  - Suma de los divisores de un número.
    - Encontrar los divisores de un número y sumarlos, ejemplo:
    - ```js
      Numero = 6 // Los divisores de 6 son 1, 2 y 3.
      // La suma de los divisores es 1+2+3 = 6.
    - Consejo: usar un bucle for y un if que sume los divisores que encuentre, también debe recibir argumentos y retornar los divisores.

- Números perfectos.
    - Un número perfecto es cuando la suma de sus divisores es igual al número principal.
    - ```js
      Numero = 6
      SumaDivisores = 6
      if (Numero == SumaDivisores){
        console.log("El número es perfecto.")
      }else {
        console.log("El número no es perfecto.")
      }
    - En este ejercicio, reutilizar la función de Suma de divisores que retornará los divisores que encuentre del número.
#### Primos
  - Primo
    - Un número primo es cuando es divisible por 1 y por sí mismo. Ejemplo:
    - ```js
      Numero = 7
      /*Este número es divisible por 1 y por sí mismo,
      es decir: 1 % 7 = 0 y 7 % 7 = 0, si estas dos
      condiciones se cumplen es un número primo.
      Consejo: usar un condicional con &&*/
      if (Numero && Numero){
        console.log("Es primo")
      }else {
        console.log("No es primo")
      }
  - Primos gemelos
    - Los primos gemelos son 2 números que son primos y que entre ellos su diferencia es 2, Ejemplo: 3 y 5 son primos y entre ellos su diferencia es 2.
    - Consejo: usar un if con && y usar la función de "Primo" anterior.

#### Cadenas
  - Concatenar dos cadenas
    - Unir dos frases en una sola variable.
  - Buscar una subcadena
    - Dentro de una cadena buscar si la subcadena se encuentra, ejemplo:
    - ```js
      Cadena = "Hola que tal" // Esta es la cadena principal.
      Subcadena = "que" // Esta es la cadena que debemos encontrar en la cadena principal.
      /*Si encontramos la cadena, retornamos su posición es decir,
      si en la "Subcadena" la "Subcadena[0] (Vendría a ser "q")
      se encuentra en la "Cadena" la cual sí está que es "Cadena[6](Vendría a ser la "q") entonces lo que
      retornamos es "6" que vendría a ser la posición,
      recordar que deben verificar los demás elementos de
      la "Subcadena"*/
      // Para resolver se usa un if y un for para iterar en la cadena.
  - Insertar una cadena
    - En una cadena debemos insertar una subcadena. (Ojo no es concatenar)
    -  ```js
        Cadena = "Hola mundo" // Esta es la cadena principal
        Subcadena = "hermoso" // Esta es la cadena que insertaremos
        /* Cuando vamos a insertar una cadena necesitamos
        una variable auxiliar para poder insertar la subcadena (Ya que la cadena principal no se puede modificar)
        para eso necesitamos una posición en la cual se
        insertará la subcadena.  */
        var Nueva_cadena; // Esta será la cadena que nos ayudará.
  - Eliminar una subcadena
    - Encontrar una subcadena y eliminarla de la cadena principal.
    - Aquí usaremos el mismo concepto de "insertar una cadena" refiriéndonos a guardar la operación en una cadena, usaremos la función de buscar para encontrar la subcadena y así eliminarla en la posición que se encuentra en la cadena principal.
  - Convertir un arreglo en cadena.
    -  Utilizar una de las funciones de js para convertir un arreglo en una cadena.
#### Arreglos
  - Mayor de un arreglo
    - Buscar el número mayor que esté en un arreglo (también puede servir con cadenas).
  - Buscar Arreglo
    - Buscar un elemento en un arreglo.
    - Para esto se necesita el objetivo en una variable, un for y if.
  - Insertar arreglo
    - Insertar elemento en un arreglo, esto se puede conseguir con la función push.
  - Eliminar arreglo
    - Eliminar un elemento específico del arreglo.
    - Aquí se reutiliza la función de "Buscar arreglo."
  - Convertir Cadena en arreglo
    - Aquí se usa la función split, toca pasar los puntos de interrupción para decirle donde corta.
  - Bases
    - 10 a base 2
    - 10 a base 8
    - 10 a base 16
    - 2 a base 10
    - 2 a base 8
    - 2 a base 16

Esos vendrían a ser los ejercicios que hay que hacer.
Consejo: Mantener ordenada las carpetas y tener una estructura, pueden guiarse con la estructura de este proyecto.
- Carpeta_Principal
  - [Styles](style) : Carpeta donde se almacenan los estilos CSS.
  - [Script](script) : Carpeta donde se almacenan los archivos JS.
  - [Img](img) : Carpeta donde se almacenan las imágenes.
  - [Templates o Pages](template) : Donde se almacenan los demás archivos HTML.
  - [Index](index.html) : Este sería el archivo principal del proyecto.

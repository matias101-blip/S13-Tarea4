# Tarea 4 - Algoritmo
## Rehalizar funciones reutilizables para pasar argumentos.
### Ejercicios:
#### Divisores:
  - Suma de los divisores de un numero.
    - Encontrar los divisores de un numero y sumarlos, ejemplo:
    - ```js
      Numero = 6 //Los divisores de 6 son 1, 2 y 3.
      //La suma de los divisores es 1+2+3 = 3.
    - Consejo: usar un bucle for y un if que sumara los divisores que encunetre, tambien debe resivir argumento y retornar los divisores.

- Numeros perfectos.
    - Un numero perfecto es cuando la suma de sus divisores es igual al numero principal.
    - ```js
      Numero = 6
      SumaDivisores = 6
      if (Numero == SumaDivisores){
        console.log("El numero es perfecto.")

      }else {
        console.log("El numero no es perfecto.")
      }
    - En este ejercicio reutilizar la funcion de Suma de divisores que retornara los divisores que en contro del numero.
#### Primos
  - Primo
    - Un numero primo es cuando es divisible para 1 y para si mismo ejemplo:
    - ```js
      Numero = 7
      /*Este numero es divisible para 1 y para si mismo,
      es decir: 1 / 7 = 0 y 7 / 7 = 0, si estas dos
      condiciones se cumplen es un numero primo.
      consejo: usar un condicional con and*/
      if (numero && numero){
        console.log("Es primo")
      }else {
        console.log("No es primo")
      }
  - Primos Gemelos
    - Los Primos gemelos son 2 numeros que son primo y que entre ellos su diferencia es 2, Ejemplo 3 y 5 son primos y entre ellos su diferencia es 2.
    - Consejo usar un if con && y usar la funcion de "Primo" anterior.

#### Cadenas
  - Concatenar dos cadenas
    - Unir dos frases en una sola variable
  - Buscar una subcadena
    - Dentro de una cadena buscar si la subcadena se en cuentra, ejemplo:
    - ```js
      Cadena = "Hola que tal" //Esta es la cadena principal.
      Subcadena = "que" //Esta es la cadena que debemos en contrar en la cadena principal.
      /*Si encontramos la cadena, re tornamos su pocicion es decir,
      si en la "Subcadena" la "Subcadena[0] (Vendria a ser "q")
      se en cuentra en la "Cadena" la cual si esta que es "Cadena[6](Vendria a ser la "q") entonces lo que
      retornamos es "6" que vendria a ser la pocicion,
      recordar que deben verificar los demas elementos de
      la "Subcadena"*/
      //Para resolver se usa un if y un for para iterar en la cadena.
  - Insertar una cadena
    - En una cadena debemos insertar una subcadena. (Ojo no es concatenar)
    -  ```js
        Cadena = "Hola mundo" //Esta es la cadena principal
        Subcadena = "hermoso" // Esta es la cadena que insertaremos
        /* Cuando vamos a insertar una cadena necesitamos
        una varible de auxiliar para poder inserta la subcadena (Ya que la cadena principal no se puede modificar)
        para eso necesitamos una pocicion en la cual se
        insertara la subcadena.  */
        var Nueva_cadena; //Esta sera la cadena que nos ayudara.
  - Eliminar una subcadena
    - Encontrar una subcadena y eliminarla de la cadena principal.
    - Aqui usaremos el mismo concepto de "insertar una cadena" refireindonos a guardar la operacion en una cadena, usaremos la funcion de buscar para en contrar la subacdena y haci eliminarla en la pocision que se encuentra en la cadena principal.
  - Convertir un arreglo en cadena.
    -  Utilizar una de las funciones de js para convertir un arreglo en una cadena.
#### Arreglos
  - Mayor de un arreglo
    - Buscar el numero mayor que este en un arreglo ( tbm puede servir con cadenas).
  - Buscar Arreglo
    - Buscar un elemento en un arreglo
    - Para esto se necesita el objetivo en una variable, un for y if.
  - Insertar arreglo
    - Insertar elemento en un arreglo, esto se puede conseguir con la funcion push
  - Eliminar arreglo
    - Eliminar un elemento especifico  del arreglo.
    - Aqui se reutiliza la funcion de "Buscar arreglo"
  - Convertir Cadena en arreglo
    - Aqui se usa la funcion split, toca pasar los puntos de interupcion para decirle donde corta.
  - Bases
    - 10 a base 2
    - 10 a base 8
    - 10 a base 16
    - 2 a base 10
    - 2 a base 8
    - 2 a base 16

Esos vendrian hacer los ejercicios que hay que hacer.
consejo: Mantener ordenada las carpetas y tener una structura, pueden guiarse con la structura de este proyecto.
- Carpeta_Principal
  - [Styles](style) : Carpeta donde se almacenan los estilos css
  - [Script](script) : Carpeta donde se almacenan los archivos js
  - [Img](img) : Carpeta : donde se almacenan las imagenes.
  - [Templates o Pagues](template) : Donde se almacenan los demas archivos html
  - [Index](index.html) : Esta vendria hacer el archivo principal del proyecto.

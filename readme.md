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

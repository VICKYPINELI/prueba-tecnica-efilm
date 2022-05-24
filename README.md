# prueba-tecnica-efilm
Consta de 3 ejercicios.
1.- ARBOL DE NAVIDAD:
    Para realizar el dibujo, realizamos dos bucles:
    * El primer bucle, repetiremos tantas  "ramas"(su valor es X) como veces que nos indique el "range" ((1)start,(20)stop,(2)step)

    *Para hacer el tronco, es tan sencillo como repetir el "tronco" (su valor es 000) las veces que nos marca su range.
    
    * Para terminar añadimos en print (.center) con un parametro para centrar el dibujo en la consola.

2.- TABLERO DE AJEDREZ:
    Basandome en el funcionamiento de las matrices, he realizado dos bucles, uno dentro del otro, para que me dibujen tablero de barcos.
    Para dibujar algo semejante a los colores, he realizado una condiciòn, que tomando como valor el numero de las cordenadas de las filas y las columnas y dividiendolas entre dos, si el resto de dicha division es 0, dibujarìa en el tablero una "X", de lo contrario printearìa un "0".
    La mayor dificultad que he tenido es que la lista de listas entre x y 0, me aparecian en una sola fila, para solucionarlo, he printeado un salto de linea entre los dos bucles.

3.- 3 EN RAYA:
    He intentado (sin mucho exito), realizar este juego basandome,  en las nueve posiciones del tablero.

    Primero en html, he dibujado 9 botones, de tal manera que pulsando el boton 1 o dos veces estos cambien de color (simulando un turno por jugador).

    Para realizar las combinaciones ganadoras, he declarado un array (tablero) con nueve posiciones. 
    Despuès, he realizado una función declarando como verdaderas las ocho combinaciones ganadoras. 

    Para terminar si los colores de los botones coindicen con alguna de las combinaciones ganadoras, aparecerá un letrero donde felicita al color ganador.

    Me ha faltado poner un boton de restaurar el juego o que despuès del alert el juego reiniciara....pero no he sabido seguir. :( 



    







// funciòn que cambia del color cuando cambia de turno de jugador
let turno = 0;
const tablero = [];
const botonPulsado = (e, pos) =>{
    turno ++;
    const boton = e.target;
    const color = turno % 2 ? "red" :"blue"
    boton.style.backgroundColor = color;
    tablero[pos] = color;
    if(ganar()) alert("FELICIDADES JUGADOR" + color);
   
}
// Tendremos un array de 9 posiciones (cada una de las posiciones del tablero),
//  y cada vez que el jugador pulsa sobre una celda, 
//  rellenamos ese array con un valor 
//  (puede ser 0 para el jugador A, y 1 para el jugador B).
const ganar = () =>{
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0])
        { return true;
    }else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3])
        { return true;    
    }else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6])
        { return true;     
    }else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0])
        { return true; 
    }else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1])
        { return true; 
    }else if (tablero[2] == tablero[4] && tablero[2] == tablero[7] && tablero[2])
        { return true; 
    }else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0])
        { return true; 
    }else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2])
        { return true; 
    }
        return false        



}
//se realiza la funcion "boton pulsado" cuando se haga click en el boton
document.querySelectorAll("button").forEach(
    (obj, i) => obj.addEventListener("click", (e) => botonPulsado(e,i)));
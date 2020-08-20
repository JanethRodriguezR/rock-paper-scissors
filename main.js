let puntaje = 0;

function juego(a) {
    var jugador = ["piedra", "papel", "tijera"];
    var jugada = [
        ["Empate", "Perdiste", "Ganaste"],
        ["Ganaste", "Empate", "Perdiste"],
        ["Perdiste", "Ganaste", "Empate"]
    ];
    var computador = Math.floor(Math.random() * 3);
    document.getElementById('persona').innerHTML = jugador[a];
    document.getElementById('pc').innerHTML = jugador[computador];
    document.getElementById('resultado').innerHTML = jugada[a][computador];

    if (jugada[a][computador] == "Ganaste") {
        console.log(jugada[a][computador]);
        puntaje++;
    }
    if (jugada[a][computador] == "Perdiste") {
        console.log(jugada[a][computador]);
        puntaje = puntaje - 1;
    }
    if (jugada[a][computador] == "Empate") {
        console.log(jugada[a][computador]);
        puntaje = puntaje;
    }
    document.getElementById('puntos').innerHTML = puntaje;
}
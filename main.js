let puntaje = 0;
let mensaje = "";

function juego(a) {
    document.getElementById("inicio_juego").style.display = "none";
    document.getElementById("resultado_parcial").style.display = "flex";
    //mostrar resultado final
    setTimeout(function() {
        document.getElementById("resultado").style.display = "flex";
        document.getElementById("resultado_parcial").style.display = "none";
    }, 1500);
    //reiniciar juego con el boton
    document.getElementById("btn").addEventListener("click", () => {
        document.getElementById("inicio_juego").style.display = "block";
        document.getElementById("resultado").style.display = "none";
        //mostrar de nuevo circulo 
        var circulo = "<div id='nada'></div>";
        document.getElementById('pc_picked1').innerHTML = circulo;
    });

    var jugador = ["piedra", "papel", "tijera"];
    var jugada = [
        ["Empate", "Perdiste", "Ganaste"],
        ["Ganaste", "Empate", "Perdiste"],
        ["Perdiste", "Ganaste", "Empate"]
    ];
    var computador = Math.floor(Math.random() * 3);

    //PUNTAJES
    setTimeout(function() {
        if (jugada[a][computador] == "Ganaste") {
            mensaje = "YOU WIN";
            puntaje++;
            document.getElementById("col_pc").className = "col";
            document.getElementById("col_u").className += " col_ganador";
        }
        if (jugada[a][computador] == "Perdiste") {
            mensaje = "YOU LOST";
            puntaje = puntaje - 1;
            document.getElementById("col_pc").className += " col_ganador";
            document.getElementById("col_u").className = "col";
        }
        if (jugada[a][computador] == "Empate") {
            mensaje = "EQUALS";
            puntaje = puntaje;
            document.getElementById("col_u").className = "col";
            document.getElementById("col_pc").className = "col";
        }
        document.getElementById('puntos').innerHTML = puntaje;
        document.getElementById('msj_resultado').innerHTML = mensaje;
    }, 1500);
    //VISTA 2 y 3  
    //opciones persona
    if (a == 0) {
        var tu_eleccion = document.getElementById('piedra');
        document.getElementById('you_picked1').innerHTML = tu_eleccion.outerHTML;
        document.getElementById('you_picked').innerHTML = tu_eleccion.outerHTML;
    }
    if (a == 1) {
        var tu_eleccion = document.getElementById('papel');
        document.getElementById('you_picked1').innerHTML = tu_eleccion.outerHTML;
        document.getElementById('you_picked').innerHTML = tu_eleccion.outerHTML;
    }
    if (a == 2) {
        var tu_eleccion = document.getElementById('tijera');
        document.getElementById('you_picked1').innerHTML = tu_eleccion.outerHTML;
        document.getElementById('you_picked').innerHTML = tu_eleccion.outerHTML;
    }
    //opciones pc
    if (computador == 0) {
        var pc_eleccion = document.getElementById('piedra');
        setTimeout(function() {
            document.getElementById('pc_picked1').innerHTML = pc_eleccion.outerHTML;
        }, 1000);
        document.getElementById('pc_picked').innerHTML = pc_eleccion.outerHTML;
    }
    if (computador == 1) {
        var pc_eleccion = document.getElementById('papel');
        setTimeout(function() {
            document.getElementById('pc_picked1').innerHTML = pc_eleccion.outerHTML;
        }, 1000);
        document.getElementById('pc_picked').innerHTML = pc_eleccion.outerHTML;
    }
    if (computador == 2) {
        var pc_eleccion = document.getElementById('tijera');
        setTimeout(function() {
            document.getElementById('pc_picked1').innerHTML = pc_eleccion.outerHTML;
        }, 1000);
        document.getElementById('pc_picked').innerHTML = pc_eleccion.outerHTML;
    }
}
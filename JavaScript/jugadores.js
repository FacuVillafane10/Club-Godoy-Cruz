const filtrarPosiciones = document.querySelector(".elegirJugadores");
filtrarPosiciones.addEventListener("click", (event) => {
    
    const posicion = event.target.getAttribute("data-position");
    filterPlayers(posicion);
});

function filterPlayers(posicion) {
    const jugadores = document.querySelectorAll('.player-item');  

    jugadores.forEach(jugador => {
        const jugadorPosicion = jugador.getAttribute('data-position');

        
        if (posicion === 'all' || jugadorPosicion.toLowerCase() === posicion.toLowerCase()) {
            jugador.style.display = 'block'; 
        } else {
            jugador.style.display = 'none'; 
        }
    });
}

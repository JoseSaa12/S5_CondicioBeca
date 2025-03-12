function revisarCoche() {
    let viveCerca = confirm("¿Vives cerca?");
    let tieneGanasCaminar = confirm("¿Tienes ganas de caminar?");
    
    if (viveCerca && tieneGanasCaminar) {
        alert("Te vas andando y ya lo arreglarás mañana.");
        return;
    } 
    
    let tieneGasolina = confirm("¿Tiene gasolina?");
    
    if (!tieneGasolina) {
        let tieneDinero = confirm("¿Tienes dinero?");
        if (tieneDinero) {
            alert("Poner gasolina.");
        } else {
            alert("Vas en metro.");
        }
    } else {
        let tieneBateria = confirm("¿Tiene batería?");
        if (!tieneBateria) {
            alert("Recargar batería.");
        } else {
            alert("Pásate por el mecánico.");
        }
    }
}

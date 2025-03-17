function diagnosticarLampara() {
    let estaEnchufada = prompt("¿La lámpara está enchufada? (si/no)").toLowerCase();

    if (estaEnchufada === "no") {
        alert("Enchufa la lámpara.");
    } else if (estaEnchufada === "si") {
        let focoQuemado = prompt("¿El foco está quemado? (si/no)").toLowerCase();

        if (focoQuemado === "si") {
            alert("Cambia el foco.");
        } else if (focoQuemado === "no") {
            alert("Compra una nueva lámpara.");
        } else {
            alert("Respuesta no válida. Por favor, introduce 'si' o 'no'.");
        }
    } else {
        alert("Respuesta no válida. Por favor, introduce 'si' o 'no'.");
    }
}


diagnosticarLampara();
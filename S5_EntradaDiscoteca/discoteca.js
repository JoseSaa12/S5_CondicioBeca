function verificarEdad() {
    let edad = parseInt(document.getElementById("edad").value);
    let mensaje;

    if (edad < 18) {
        mensaje ="Lo lamento peluche, a otra jugueteria no tienes 18Y.";
    }

    else if (edad === 18){
     mensaje ="Buenooo nuevamente acá, pase usted adelante que tienes justo 18.";
    }

    else { mensaje = "Como cada Finde en tu garito de confianza por eres mayor de 18.";
    }
    
    document.getElementById("resultado").innerText = mensaje;
    
}
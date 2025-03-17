function verificarColor (){
    let = color = document.getElementById("color").value;
    let mensaje;

    if (color === "azul") {
        mensaje = "Como el mar de la tierra media hacia los Valhars";
    } 
    
    else if (color ==="verde") {
        mensaje = "Verde como el bosque de Rivendell";
    }

    else if (color === "rojo") {
        mensaje = "como el tomate que se come Denethor, el papá de Faramir y Boromir";
    }  
    else if (color === "amarillo") {
        mensaje = "como los campos de trigo de Hoobitown";
    }
    else if (color === "violeta") {
        mensaje = "Ps, violeta no habia nada en LOTR, Pero violeta como ciruelas";
    }
    else {
        mensaje = "No has escogido nada de color.";
    }

    document.getElementById("resultado").innerText = mensaje;
}
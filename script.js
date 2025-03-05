function verificarBeca() {
    const edad = parseInt(document.getElementById("edad").value);
    const residencia = document.getElementById("residencia").value.trim().toLowerCase();
    const familiaNumerosa = document.getElementById("familiaNumerosa").value;
    const genio = document.getElementById("genio").value;
    let resultado = "No cumples con los requisitos para la beca.";

    if ((edad >= 18 && residencia === "barcelona") ||
        (edad > 30 && familiaNumerosa === "si") ||
        (edad >= 12 && edad <= 18 && genio === "si")) {
        resultado = "¡Felicidades! Cumples con los requisitos para la beca.";
    }

    document.getElementById("resultado").textContent = resultado;
}
function leerVectoresYOrdenar() {
    let vector1 = leerVector("Primer");
    let vector2 = leerVector("Segundo");

    let mezcla = vector1.concat(vector2);
    mezcla.sort((a, b) => a - b);

    console.log("La lista ordenada de la mezcla de los dos vectores es: " + mezcla.join(" "));
}

function leerVector(nombre) {
    let vector = [];
    let anterior = -Infinity;

    for(let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Ingresa el ${i + 1}° número del ${nombre} vector:`));

        while(numero <= anterior) {
            console.log("Error: Los números deben ser ingresados en orden ascendente.");
            numero = parseInt(prompt(`Ingresa el ${i + 1}° número del ${nombre} vector:`));
        }

        vector.push(numero);
        anterior = numero;
    }

    return vector;
}

leerVectoresYOrdenar();

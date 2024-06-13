function almacenarEdadesYCalcular() {
    let edades = [];
    let menores = 0;
    let mayores = 0;
    let adultosMayores = 0;
    let edadMinima = 120;
    let edadMaxima = 0;
    let sumaEdades = 0;

    for(let i = 0; i < 10; i++) {
        let edad = parseInt(prompt("Ingresa la edad de la persona " + (i + 1)));

        while(edad < 1 || edad > 120) {
            console.log("Error: La edad debe estar en un rango entre 1 y 120 años.");
            edad = parseInt(prompt("Ingresa la edad de la persona " + (i + 1)));
        }

        edades.push(edad);
        sumaEdades += edad;

        if(edad < 18) {
            menores++;
        } else if(edad >= 18 && edad < 60) {
            mayores++;
        } else {
            adultosMayores++;
        }

        if(edad < edadMinima) {
            edadMinima = edad;
        }

        if(edad > edadMaxima) {
            edadMaxima = edad;
        }
    }

    let promedioEdades = sumaEdades / edades.length;

    console.log("Cantidad de personas menores de edad: " + menores);
    console.log("Cantidad de personas mayores de edad: " + mayores);
    console.log("Cantidad de adultos mayores: " + adultosMayores);
    console.log("Edad más baja: " + edadMinima);
    console.log("Edad más alta: " + edadMaxima);
    console.log("Promedio de edades: " + promedioEdades);
}

almacenarEdadesYCalcular();

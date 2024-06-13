let personas = [];

function mostrarMenu() {
    let opcion = prompt("Selecciona una opción:\n1. Agregar una persona\n2. Mostrar la información personal de una persona");

    switch(opcion) {
        case '1':
            agregarPersona();
            break;
        case '2':
            let posicion = parseInt(prompt("Ingresa la posición de la persona en el vector:"));
            mostrarInformacionPersona(posicion);
            break;
        default:
            console.log("Opción no reconocida");
    }
}

function agregarPersona() {
    let persona = {
        nombre: prompt("Ingresa el nombre de la persona:"),
        cedula: prompt("Ingresa el número de identificación (cédula) de la persona:"),
        fechaNacimiento: prompt("Ingresa la fecha de nacimiento de la persona:"),
        correo: prompt("Ingresa el correo electrónico de la persona:"),
        ciudadResidencia: prompt("Ingresa la ciudad de residencia de la persona:"),
        ciudadOrigen: prompt("Ingresa la ciudad de origen de la persona:"),
        cancionesFavoritas: []
    };

    for(let i = 0; i < 3; i++) {
        let cancion = {
            artista: prompt(`Ingresa el artista de la canción ${i + 1}:`),
            titulo: prompt(`Ingresa el título de la canción ${i + 1}:`)
        };
        persona.cancionesFavoritas.push(cancion);
    }

    personas.push(persona);
}

function mostrarInformacionPersona(posicion) {
    if(posicion < 0 || posicion >= personas.length) {
        console.log("Posición inválida");
        return;
    }

    let persona = personas[posicion];
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Número de identificación (cédula): ${persona.cedula}`);
    console.log(`Fecha de nacimiento: ${persona.fechaNacimiento}`);
    console.log(`Correo electrónico: ${persona.correo}`);
    console.log(`Ciudad de residencia: ${persona.ciudadResidencia}`);
    console.log(`Ciudad de origen: ${persona.ciudadOrigen}`);
    console.log(`Canciones favoritas:`);
    for(let i = 0; i < persona.cancionesFavoritas.length; i++) {
        console.log(`Canción ${i + 1}: ${persona.cancionesFavoritas[i].titulo} de ${persona.cancionesFavoritas[i].artista}`);
    }
}

mostrarMenu();

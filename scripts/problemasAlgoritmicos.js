function actualizarMenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '10px';
    }
}

function ejercicio1() {
    mostrarTextoConsola();
    function pedirDatosYCalcular() {
        let figura = prompt("¿Qué figura deseas calcular? escriba el numero indicado \n (1)triangulo \n (2) rectangulo \n (3) cuadrado \n (4) circulo");
        let dimensiones = {};
    
        switch(figura) {
            case '1':
                dimensiones.a = parseFloat(prompt("Ingresa el valor del lado a"));
                dimensiones.b = parseFloat(prompt("Ingresa el valor del lado b"));
                dimensiones.c = parseFloat(prompt("Ingresa el valor del lado c"));
                dimensiones.h = parseFloat(prompt("Ingresa el valor de la altura h"));
                break;
            case '2':
                dimensiones.largo = parseFloat(prompt("Ingresa el valor del largo"));
                dimensiones.ancho = parseFloat(prompt("Ingresa el valor del ancho"));
                break;
            case '3':
                dimensiones.lado = parseFloat(prompt("Ingresa el valor del lado"));
                break;
            case '4':
                dimensiones.radio = parseFloat(prompt("Ingresa el valor del radio"));
                break;
            default:
                console.log('Figura no reconocida');
                return;
        }
    
        let resultado = calcularPerimetroYArea(figura, dimensiones);
        console.log(`Perímetro: ${resultado.perimetro}, Área: ${resultado.area}`);
    }
    
    function calcularPerimetroYArea(figura, dimensiones) {
        let perimetro = 0;
        let area = 0;
    
        switch(figura) {
            case '1':
                let a = dimensiones.a;
                let b = dimensiones.b;
                let c = dimensiones.c;
                let h = dimensiones.h;
                perimetro = a + b + c;
                area = (b * h) / 2;
                break;
            case '2':
                let largo = dimensiones.largo;
                let ancho = dimensiones.ancho;
                perimetro = 2 * (largo + ancho);
                area = largo * ancho;
                break;
            case '3':
                let lado = dimensiones.lado;
                perimetro = 4 * lado;
                area = Math.pow(lado, 2);
                break;
            case '4':
                let radio = dimensiones.radio;
                perimetro = 2 * Math.PI * radio;
                area = Math.PI * Math.pow(radio, 2);
                break;
            default:
                console.log('Figura no reconocida');
        }
    
        return {
            perimetro: perimetro,
            area: area
        };
    }
    
    pedirDatosYCalcular();    
}

function ejercicio2() {
    mostrarTextoConsola();
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

        console.log("Cantidad de personas menores de edad: " + menores +
                    "\nCantidad de personas mayores de edad: " + mayores +
                    "\nCantidad de adultos mayores: " + adultosMayores +
                    "\nEdad más baja: " + edadMinima +
                    "\nEdad más alta: " + edadMaxima +
                    "\nPromedio de edades: " + promedioEdades);
    }

    almacenarEdadesYCalcular();
}

function ejercicio3() {
    mostrarTextoConsola();
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
    
}

function ejercicio4() {
    let personas = [];

    mostrarTextoConsola();

    function mostrarMenu() {
        let opcion = prompt("Selecciona una opción:\n1. Agregar una persona\n2. Mostrar la información personal de una persona");

        switch (opcion) {
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

        for (let i = 0; i < 3; i++) {
            let cancion = {
                artista: prompt(`Ingresa el artista de la canción ${i + 1}:`),
                titulo: prompt(`Ingresa el título de la canción ${i + 1}:`)
            };
            persona.cancionesFavoritas.push(cancion);
        }

        personas.push(persona);
        mostrarMenu();
    }

    function mostrarInformacionPersona(posicion) {
        if (posicion < 0 || posicion >= personas.length) {
            console.log("Posición inválida");
            return;
        }

        let persona = personas[posicion];
        let mensaje = `Nombre: ${persona.nombre}\n` +
                      `Número de identificación (cédula): ${persona.cedula}\n` +
                      `Fecha de nacimiento: ${persona.fechaNacimiento}\n` +
                      `Correo electrónico: ${persona.correo}\n` +
                      `Ciudad de residencia: ${persona.ciudadResidencia}\n` +
                      `Ciudad de origen: ${persona.ciudadOrigen}\n` +
                      `Canciones favoritas:\n`;

        for (let i = 0; i < persona.cancionesFavoritas.length; i++) {
            mensaje += `Canción ${i + 1}: ${persona.cancionesFavoritas[i].titulo} de ${persona.cancionesFavoritas[i].artista}\n`;
        }

        console.log(mensaje);
    }

    mostrarMenu();
}

let tituloEjercicio = document.getElementById("tituloEjercicio");
let parrafoTexto = document.getElementById("parrafoTexto");
const contenedorBotones = document.getElementById("contenedorBotones");
const contenedorConsola = document.getElementById("contenedorConsola");
const botonMostrarCodigo = document.getElementById("botonMostrarCodigo");
const botonMostrarDfd = document.getElementById("botonMostrarDfd");
const botonEjecutarCodigo1 = document.getElementById("botonEjecutarCodigo1");
const botonEjecutarCodigo2 = document.getElementById("botonEjecutarCodigo2");
const botonEjecutarCodigo3 = document.getElementById("botonEjecutarCodigo3");
const botonEjecutarCodigo4 = document.getElementById("botonEjecutarCodigo4");
const imagenEjercicio = document.getElementById("imagenEjercicio");
const objetoEjercicios = {
  "titulo1": "Ejercicio 1",
  "titulo2": "Ejercicio 2",
  "titulo3": "Ejercicio 3",
  "titulo4": "Ejercicio 4",
  "pregunta1": "Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas (triángulo, rectángulo, cuadrado, círculo). El programa debe solicitar al usuario el tipo de figura y las dimensiones necesarias para realizar el cálculo.",
  "codigo1": "/evidenciasADSO/img/problemasAlgoritmicos/codigoEjercicio1.png",
  "pregunta2": "Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar un nuevo valor.",
  "codigo2": "/evidenciasADSO/img/problemasAlgoritmicos/codigoEjercicio2.png",
  "pregunta3": "Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17. Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando los datos de forma ascendente.",
  "codigo3": "/evidenciasADSO/img/problemasAlgoritmicos/codigoEjercicio3.png",
  "pregunta4": "Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y cantantes más escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a estudiantes del SENA del programa de tecnólogo en análisis y desarrollo de software desarrollar una solución que permita conocer la respuesta de 6 personas con relación a sus gustos musicales. Con fines administrativos y realizar una rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia, ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en cada una de las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá mostrar un menú que permite las siguientes opciones: a. Agregar una persona con los datos que se listan anteriormente. b. Mostrar la información personal de una persona particular por medio de su posición en el vector.",
  "codigo4": "/evidenciasADSO/img/problemasAlgoritmicos/codigoEjercicio4.png",
}

function mostrarEjercicio1() {
    parrafoTexto.innerHTML = "";
    imagenEjercicio.src = "";
    tituloEjercicio.innerHTML = objetoEjercicios.titulo1;
    parrafoTexto.innerHTML = objetoEjercicios.pregunta1;
    contenedorBotones.style.display = "flex";
    botonEjecutarCodigo1.style.display = "block";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo4.style.display = "none";
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo1;
    });
    botonEjecutarCodigo1.addEventListener("click", function () {
      ejercicio1();
    });
}

function mostrarEjercicio2() {
    parrafoTexto.innerHTML = "";
    imagenEjercicio.src = "";
    tituloEjercicio.innerHTML = objetoEjercicios.titulo2;
    parrafoTexto.innerHTML = objetoEjercicios.pregunta2;
    contenedorBotones.style.display = "flex";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "block";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo4.style.display = "none";
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo2;
    });
    botonEjecutarCodigo2.addEventListener("click", function () {
      ejercicio2();
    });
}

function mostrarEjercicio3() {
    parrafoTexto.innerHTML = "";
    imagenEjercicio.src = "";
    tituloEjercicio.innerHTML = objetoEjercicios.titulo3;
    parrafoTexto.innerHTML = objetoEjercicios.pregunta3;
    contenedorBotones.style.display = "flex";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo3.style.display = "block";
    botonEjecutarCodigo4.style.display = "none";
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo3;
    });
    botonEjecutarCodigo3.addEventListener("click", function () {
      ejercicio3();
    });
}

function mostrarEjercicio4() {
    parrafoTexto.innerHTML = "";
    imagenEjercicio.src = "";
    tituloEjercicio.innerHTML = objetoEjercicios.titulo4;
    parrafoTexto.innerHTML = objetoEjercicios.pregunta4;
    contenedorBotones.style.display = "flex";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo4.style.display = "block";
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo4;
    });
    botonEjecutarCodigo4.addEventListener("click", function () {
      ejercicio4();
    });
}

function mostrarTextoConsola() {
    let consolaHTML = document.getElementById('consolaTexto');
  
    // Capturamos el console.log original
    let consoleLogOriginal = console.log;
    console.log = function (mensaje) {
      consoleLogOriginal(mensaje);
  
      contenedorConsola.style.display = 'flex';
      consolaHTML.textContent = ' ';  // Limpiamos el contenido anterior del elemento.
      // Añadimos el mensaje al HTML
      consolaHTML.textContent += mensaje + '\n';
  
      consolaHTML.scrollIntoView({behavior: "smooth"});
    };
}
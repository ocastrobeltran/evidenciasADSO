function actualizarMenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }
  
  function ejercicio1() {
    // Aca definimos las variables del corredor
    const tiempoTotalHoras_odcb = 2;
    const tiempoTotalMinutos_odcb = 25;
    const distanciaMaratonKm_odcb = 42.195;
  
    // Convertimos el tiempo de horas a minutos
    const tiempoTotalEnMinutos_odcb = tiempoTotalHoras_odcb * 60 + tiempoTotalMinutos_odcb;
  
    // Calculamos el tiempo medio por kilómetro
    const tiempoMedioPorKilometro_odcb = tiempoTotalEnMinutos_odcb / distanciaMaratonKm_odcb;
  
    mostrarTextoConsola();
    // Utilizamos el metodo toFixed para redondear a 2 decimales
    console.log(`El tiempo medio por kilómetro es aproximadamente ${tiempoMedioPorKilometro_odcb.toFixed(2)} minutos.`);
  }
  
  function ejercicio2() {
    // Definimos la temperatura en grados Centígrados
    const temperaturaCelsius_odcb = prompt("Ingrese la temperatura en grados Celsius:");
  
    // Calculamos la temperatura en grados Fahrenheit
    const temperaturaFahrenheit_odcb = (9 / 5) * temperaturaCelsius_odcb + 32;
  
    mostrarTextoConsola();
    // Utilizamos el metodo toFixed para redondear a 2 decimales
    console.log(`La temperatura en grados Fahrenheit es de ${temperaturaFahrenheit_odcb.toFixed(2)}°F.`);
  }
  
  function ejercicio3() {
    // Notas de talleres y quiz
    const notaTaller1_odcb = prompt("Ingrese la nota del taller 1:");
    const notaTaller2_odcb = prompt("Ingrese la nota del taller 2:");
    const notaQuiz_odcb = prompt("Ingrese la nota del quiz:");
    const notaExamenParcial_odcb = prompt("Ingrese la nota del examen parcial:");
  
    // Calculamos el promedio de las notas de los talleres y el quiz
    const notaTrabajos_odcb = (notaTaller1_odcb + notaTaller2_odcb + notaQuiz_odcb) / 3;
  
    // Calculamos la nota final 
    const notaFinal_odcb = (0.3 * notaTrabajos_odcb) + (0.7 * notaExamenParcial_odcb);
  
    mostrarTextoConsola()
    //utilizamos el metodo toFixed para redondear a 2 decimales
    console.log(`La nota final del primer parcial de "análisis" es aproximadamente ${notaFinal_odcb.toFixed(2)}.`);
  }
  
  function ejercicio4() {
    // Definimos la tasa de interés anual (porcentaje)
    const tasaInteresAnual_odcb = prompt("Ingrese la tasa de interés anual:");
  
    // Convertmos la tasa de interés a decimal
    const tasaInteresDecimal_odcb = tasaInteresAnual_odcb / 100;
  
    // utilizamos el metodo math.log para calcular el tiempo de duplicación
    const tiempoDuplicacion_odcb = Math.log(2) / Math.log(1 + tasaInteresDecimal_odcb);
  
    mostrarTextoConsola()
    console.log(`El capital se duplicará aproximadamente en ${tiempoDuplicacion_odcb.toFixed(2)} años.`);
  }
  
  function ejercicio5() {
    // Declaramos el arreglo que contendrá los números ingresados por el usuario
    const listaNumeros_odcb = [];
  
    // Solicitar al usuario que ingrese 20 números y agregarlos al arreglo
    for (let i_odcb = 0; i_odcb < 20; i_odcb++) {
      const numero_odcb = prompt("Ingrese un número:");
      listaNumeros_odcb.push(Number(numero_odcb));
    }
  
    // Filtremos los números menores o iguales a 25
    const numerosMenoresOIguales25_odcb = listaNumeros_odcb.filter(numero_odcb => numero_odcb <= 25);
  
    mostrarTextoConsola()
    //utilizamos el método join para mostrar los números separados por coma
    console.log(`Los números menores o iguales a 25 son: ${numerosMenoresOIguales25_odcb.join(', ')}.`);
  }
  
  function ejercicio6() {
    // Precios de las camisas en dólares
    const precioCamisa1_odcb = Number(prompt("Ingrese el precio en dolar de la camisa 1:"));
    const precioCamisa2_odcb = Number(prompt("Ingrese el precio en dolar de la camisa 2:"));
    const precioCamisa3_odcb = Number(prompt("Ingrese el precio en dolar de la camisa 3:"));
    const precioCamisa4_odcb = Number(prompt("Ingrese el precio en dolar de la camisa 4:"));
    const precioCamisa5_odcb = Number(prompt("Ingrese el precio en dolar de la camisa 5:"));
  
    // Calculemos el total en dólares
    const totalDolares_odcb = precioCamisa1_odcb + precioCamisa2_odcb + precioCamisa3_odcb + precioCamisa4_odcb + precioCamisa5_odcb;
  
    // Cambio de dolar a peso colombiano (1 dólar = 3800 pesos)
    const tipoCambio_odcb = 3800;
  
    // Calculemos el total en pesos
    const totalPesos_odcb = totalDolares_odcb * tipoCambio_odcb;
  
    mostrarTextoConsola()
    console.log(`El precio total de la venta es de ${totalPesos_odcb} pesos.`);
  }
  
  function ejercicio7() {
    // Creamos un arreglo para almacenar los consumos de los clientes
    const consumosClientes_odcb = [];
  
    // Solicitamos al usuario ingresar los consumos mediante prompt
    // utilizamos el metodo parseFloat para convertir el string a numero
    for (let i_odcb = 1; i_odcb <= 5; i_odcb++) {
      const consumo_odcb = parseFloat(prompt(`Ingresa el consumo del cliente ${i_odcb} (en pesos):`));
      consumosClientes_odcb.push(consumo_odcb);
    }
  
    // Aplicar el descuento del 20% si el consumo supera 50000 pesos
    // utilizamos el metodo map para recorrer el arreglo y aplicar el descuento
    const descuento_odcb = 0.2;
    const consumosConDescuento_odcb = consumosClientes_odcb.map(consumo_odcb => (consumo_odcb > 50000) ? consumo_odcb - (consumo_odcb * descuento_odcb) : consumo_odcb);
  
    mostrarTextoConsola()
    // Mostrar los pagos individuales (con o sin descuento)
    let resultado = 'Pagos individuales:\n';
    for (let i_odcb = 0; i_odcb < consumosClientes_odcb.length; i_odcb++) {
      resultado += `Cliente ${i_odcb + 1}: ${consumosConDescuento_odcb[i_odcb]} pesos\n`;
      alert(`Cliente ${i_odcb + 1}: ${consumosConDescuento_odcb[i_odcb]} pesos`);
    }
  
    // Mostrar el total de todos los pagos (con descuento)
    // utilizamos el metodo reduce para sumar los consumos
    const totalPagosConDescuento_odcb = consumosConDescuento_odcb.reduce((total_odcb, consumo_odcb) => total_odcb + consumo_odcb, 0);
    resultado += `Total de todos los pagos (con descuento): ${totalPagosConDescuento_odcb} pesos`;
    console.log(resultado);
  }
  
  function ejercicio8() {
    // Indicamos la hora planteada en el ejercicio 
    let hora_odcb = 23;
    let minutos_odcb = 59;
    let segundos_odcb = 59;
  
    // Incrementamos los segundos en la proxima llamada
    segundos_odcb++;
  
    // Ajustar minutos y horas si es necesario
    // con % 24 nos aseguramos que la hora nunca sea mayor a 24
    if (segundos_odcb >= 60) {
      segundos_odcb = 0;
      minutos_odcb++;
      if (minutos_odcb >= 60) {
        minutos_odcb = 0;
        hora_odcb = (hora_odcb + 1) % 24;
      }
    }
  
    mostrarTextoConsola()
    console.log(`La hora en el siguiente segundo es: ${hora_odcb}:${minutos_odcb}:${segundos_odcb}`);
  }
  
  function ejercicio9() {
    // definimos el valor de N
    const N_odcb = prompt("Ingrese un número que será el valor de N:");
  
    // Inicializamos el producto
    let producto_odcb = 1;
  
    // Calculamos el producto desde 1 hasta N
    for (let i_odcb = 1; i_odcb <= N_odcb; i_odcb++) {
      producto_odcb *= i_odcb;
    }
  
    mostrarTextoConsola()
    console.log(`El producto desde 1 hasta ${N_odcb} es: ${producto_odcb}`);
  }
  
  function ejercicio10() {
    // Ingresamos en numero, el número del cual queremos saber la tabla de multiplicar
    const numero_odcb = prompt("Ingrese un número entre 1 y 10 para mostrar su tabla de multiplicar decreciente:");
    let multiplicaciones = [];
  
    mostrarTextoConsola()
    // Mostramos con un ciclo for la tabla de multiplicar decreciente
    let resultado = '';
    for (let i_odcb = 10; i_odcb >= 1; i_odcb--) {
      resultado += `${numero_odcb} x ${i_odcb} = ${numero_odcb * i_odcb}\n`;
      multiplicaciones.push(`${numero_odcb} x ${i_odcb} = ${numero_odcb * i_odcb}`);
    }
    console.log(resultado);
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
  const botonEjecutarCodigo5 = document.getElementById("botonEjecutarCodigo5");
  const botonEjecutarCodigo6 = document.getElementById("botonEjecutarCodigo6");
  const botonEjecutarCodigo7 = document.getElementById("botonEjecutarCodigo7");
  const botonEjecutarCodigo8 = document.getElementById("botonEjecutarCodigo8");
  const botonEjecutarCodigo9 = document.getElementById("botonEjecutarCodigo9");
  const botonEjecutarCodigo10 = document.getElementById("botonEjecutarCodigo10");
  const imagenEjercicio = document.getElementById("imagenEjercicio");
  const objetoEjercicios = {
    "titulo1": "Ejercicio 1",
    "titulo2": "Ejercicio 2",
    "titulo3": "Ejercicio 3",
    "titulo4": "Ejercicio 4",
    "titulo5": "Ejercicio 5",
    "titulo6": "Ejercicio 6",
    "titulo7": "Ejercicio 7",
    "titulo8": "Ejercicio 8",
    "titulo9": "Ejercicio 9",
    "titulo10": "Ejercicio 10",
    "pregunta1": "Un corredor de maratón (distancia 42,195 Km) ha recorrido la carrera en 2 horas 25 minutos. Se desea un algoritmo que calcule el tiempo medio en minutos por kilómetro.",
    "diagrama1": "img/aplicandoFunciones/dfdEjercicio1.png",
    "codigo1": "img/aplicandoFunciones/codigoEjercicio1.png",
    "pregunta2": "Realizar la conversión de una temperatura dada en grados Centígrados a grados Fahrenheit (Fórmula: F = (9/5) C + 32).",
    "diagrama2": "img/aplicandoFunciones/dfdEjercicio2.png",
    "codigo2": "img/aplicandoFunciones/codigoEjercicio2.png",
    "pregunta3": "Escribir el algoritmo que permite calcular la nota correspondiente al primer parcial de “análisis” para un estudiante cualquiera. Se debe considerar que hay dos talleres y un quiz, que en conjunto valen un 30% de la nota y el resto (70%) corresponde a la nota del examen parcial.",
    "diagrama3": "img/aplicandoFunciones/dfdEjercicio3.png",
    "codigo3": "img/aplicandoFunciones/codigoEjercicio3.png",
    "pregunta4": "Un capital C está situado a un tipo de interés R anual ¿al término de cuántos años se doblará?",
    "diagrama4": "img/aplicandoFunciones/dfdEjercicio4.png",
    "codigo4": "img/aplicandoFunciones/codigoEjercicio4.png",
    "pregunta5": "Elaborar un algoritmo que permita ingresar 20 números y muestre todos los números menores e iguales a 25.",
    "diagrama5": "img/aplicandoFunciones/dfdEjercicio5.png",
    "codigo5": "img/aplicandoFunciones/codigoEjercicio5.png",
    "pregunta6": "Hacer un programa que sume 5 precios de camisas (en dólares) y que luego muestre el total de la venta en pesos.",
    "diagrama6": "img/aplicandoFunciones/dfdEjercicio6.png",
    "codigo6": "img/aplicandoFunciones/codigoEjercicio6.png",
    "pregunta7": "Hacer un programa que registre el consumo realizado por los clientes de un restaurante, si el consumo de cada cliente excede 50000 se hará un descuento del 20%. Se debe mostrar el pago de cada cliente y el total de todos los pagos.",
    "diagrama7": "img/aplicandoFunciones/dfdEjercicio7.png",
    "codigo7": "img/aplicandoFunciones/codigoEjercicio7.png",
    "pregunta8": "Diseñar un algoritmo que permita ingresar la hora, minutos y segundos, y que calcule la hora en el siguiente segundo ('0<= H <=23', '0<= M <=59' '0<= S<=59').",
    "diagrama8": "img/aplicandoFunciones/dfdEjercicio8.png",
    "codigo8": "img/aplicandoFunciones/codigoEjercicio8.png",
    "pregunta9": "Dado N, escribir el producto desde 1 hasta N.",
    "diagrama9": "img/aplicandoFunciones/dfdEjercicio9.png",
    "codigo9": "img/aplicandoFunciones/codigoEjercicio9.png",
    "pregunta10": "Realizar un algoritmo que muestre por pantalla la tabla de multiplicar decreciente de cualquier número, ingresado entre el 1 y el 10.",
    "diagrama10": "img/aplicandoFunciones/dfdEjercicio10.png",
    "codigo10": "img/aplicandoFunciones/codigoEjercicio10.png"
  };
  
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
    botonEjecutarCodigo5.style.display = "none";
    botonEjecutarCodigo6.style.display = "none";
    botonEjecutarCodigo7.style.display = "none";
    botonEjecutarCodigo8.style.display = "none";
    botonEjecutarCodigo9.style.display = "none";
    botonEjecutarCodigo10.style.display = "none";
    botonMostrarDfd.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.diagrama1;
    });
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo1;
    });
    // insertarBotonEjecutar1();
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
    botonEjecutarCodigo2.style.display = "block";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo4.style.display = "none";
    botonEjecutarCodigo5.style.display = "none";
    botonEjecutarCodigo6.style.display = "none";
    botonEjecutarCodigo7.style.display = "none";
    botonEjecutarCodigo8.style.display = "none";
    botonEjecutarCodigo9.style.display = "none";
    botonEjecutarCodigo10.style.display = "none";
    botonMostrarDfd.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.diagrama2;
    });
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
    botonEjecutarCodigo3.style.display = "block";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo4.style.display = "none";
    botonEjecutarCodigo5.style.display = "none";
    botonEjecutarCodigo6.style.display = "none";
    botonEjecutarCodigo7.style.display = "none";
    botonEjecutarCodigo8.style.display = "none";
    botonEjecutarCodigo9.style.display = "none";
    botonEjecutarCodigo10.style.display = "none";
    botonMostrarDfd.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.diagrama3;
    });
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
    botonEjecutarCodigo4.style.display = "block";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo5.style.display = "none";
    botonEjecutarCodigo6.style.display = "none";
    botonEjecutarCodigo7.style.display = "none";
    botonEjecutarCodigo8.style.display = "none";
    botonEjecutarCodigo9.style.display = "none";
    botonEjecutarCodigo10.style.display = "none";
    botonMostrarDfd.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.diagrama4;
    });
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo4;
    });
    botonEjecutarCodigo4.addEventListener("click", function () {
      ejercicio4();
    });
  }
  
  function mostrarEjercicio5() {
    parrafoTexto.innerHTML = "";
    imagenEjercicio.src = "";
    tituloEjercicio.innerHTML = objetoEjercicios.titulo5;
    parrafoTexto.innerHTML = objetoEjercicios.pregunta5;
    contenedorBotones.style.display = "flex";
    botonEjecutarCodigo5.style.display = "block";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo4.style.display = "none";
    botonEjecutarCodigo6.style.display = "none";
    botonEjecutarCodigo7.style.display = "none";
    botonEjecutarCodigo8.style.display = "none";
    botonEjecutarCodigo9.style.display = "none";
    botonEjecutarCodigo10.style.display = "none";
    botonMostrarDfd.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.diagrama5;
    });
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo5;
    });
    botonEjecutarCodigo5.addEventListener("click", function () {
      ejercicio5();
    });
  }
  
  function mostrarEjercicio6() {
    parrafoTexto.innerHTML = "";
    imagenEjercicio.src = "";
    tituloEjercicio.innerHTML = objetoEjercicios.titulo6;
    parrafoTexto.innerHTML = objetoEjercicios.pregunta6;
    contenedorBotones.style.display = "flex";
    botonEjecutarCodigo6.style.display = "block";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo4.style.display = "none";
    botonEjecutarCodigo5.style.display = "none";
    botonEjecutarCodigo7.style.display = "none";
    botonEjecutarCodigo8.style.display = "none";
    botonEjecutarCodigo9.style.display = "none";
    botonEjecutarCodigo10.style.display = "none";
    botonMostrarDfd.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.diagrama6;
    });
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo6;
    });
    botonEjecutarCodigo6.addEventListener("click", function () {
      ejercicio6();
    });
  }
  
  function mostrarEjercicio7() {
    parrafoTexto.innerHTML = "";
    imagenEjercicio.src = "";
    tituloEjercicio.innerHTML = objetoEjercicios.titulo7;
    parrafoTexto.innerHTML = objetoEjercicios.pregunta7;
    contenedorBotones.style.display = "flex";
    botonEjecutarCodigo7.style.display = "block";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo4.style.display = "none";
    botonEjecutarCodigo5.style.display = "none";
    botonEjecutarCodigo6.style.display = "none";
    botonEjecutarCodigo8.style.display = "none";
    botonEjecutarCodigo9.style.display = "none";
    botonEjecutarCodigo10.style.display = "none";
    botonMostrarDfd.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.diagrama7;
    });
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo7;
    });
    botonEjecutarCodigo7.addEventListener("click", function () {
      ejercicio7();
    });
  }
  
  function mostrarEjercicio8() {
    parrafoTexto.innerHTML = "";
    imagenEjercicio.src = "";
    tituloEjercicio.innerHTML = objetoEjercicios.titulo8;
    parrafoTexto.innerHTML = objetoEjercicios.pregunta8;
    contenedorBotones.style.display = "flex";
    botonEjecutarCodigo8.style.display = "block";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo4.style.display = "none";
    botonEjecutarCodigo5.style.display = "none";
    botonEjecutarCodigo6.style.display = "none";
    botonEjecutarCodigo7.style.display = "none";
    botonEjecutarCodigo9.style.display = "none";
    botonEjecutarCodigo10.style.display = "none";
    botonMostrarDfd.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.diagrama8;
    });
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo8;
    });
    botonEjecutarCodigo8.addEventListener("click", function () {
      ejercicio8();
    });
  }
  
  function mostrarEjercicio9() {
    parrafoTexto.innerHTML = "";
    imagenEjercicio.src = "";
    tituloEjercicio.innerHTML = objetoEjercicios.titulo9;
    parrafoTexto.innerHTML = objetoEjercicios.pregunta9;
    contenedorBotones.style.display = "flex";
    botonEjecutarCodigo9.style.display = "block";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo4.style.display = "none";
    botonEjecutarCodigo5.style.display = "none";
    botonEjecutarCodigo6.style.display = "none";
    botonEjecutarCodigo7.style.display = "none";
    botonEjecutarCodigo8.style.display = "none";
    botonEjecutarCodigo10.style.display = "none";
    botonMostrarDfd.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.diagrama9;
    });
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo9;
    });
    botonEjecutarCodigo9.addEventListener("click", function () {
      ejercicio9();
    });
  }
  
  function mostrarEjercicio10() {
    parrafoTexto.innerHTML = "";
    imagenEjercicio.src = "";
    tituloEjercicio.innerHTML = objetoEjercicios.titulo10;
    parrafoTexto.innerHTML = objetoEjercicios.pregunta10;
    contenedorBotones.style.display = "flex";
    botonEjecutarCodigo10.style.display = "block";
    botonEjecutarCodigo1.style.display = "none";
    botonEjecutarCodigo2.style.display = "none";
    botonEjecutarCodigo3.style.display = "none";
    botonEjecutarCodigo4.style.display = "none";
    botonEjecutarCodigo5.style.display = "none";
    botonEjecutarCodigo6.style.display = "none";
    botonEjecutarCodigo7.style.display = "none";
    botonEjecutarCodigo8.style.display = "none";
    botonEjecutarCodigo9.style.display = "none";
    botonMostrarDfd.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.diagrama10;
    });
    botonMostrarCodigo.addEventListener("click", function () {
      imagenEjercicio.src = objetoEjercicios.codigo10;
    });
    botonEjecutarCodigo10.addEventListener("click", function () {
      ejercicio10();
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
  
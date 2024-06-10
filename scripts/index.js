function ejercicio1() {
  // Aca definimos las variables del corredor
  const tiempoTotalHoras_odcb = 2;
  const tiempoTotalMinutos_odcb = 25;
  const distanciaMaratonKm_odcb = 42.195;

  // Convertimos el tiempo de horas a minutos
  const tiempoTotalEnMinutos_odcb = tiempoTotalHoras_odcb * 60 + tiempoTotalMinutos_odcb;

  // Calculamos el tiempo medio por kilómetro
  const tiempoMedioPorKilometro_odcb = tiempoTotalEnMinutos_odcb / distanciaMaratonKm_odcb;

  // Utilizamos el metodo toFixed para redondear a 2 decimales
  console.log(`El tiempo medio por kilómetro es aproximadamente ${tiempoMedioPorKilometro_odcb.toFixed(2)} minutos.`);

  // Mostrar el resultado en un modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = `El tiempo medio por kilómetro es aproximadamente ${tiempoMedioPorKilometro_odcb.toFixed(2)} minutos.`;

  document.body.appendChild(modal);

  // Agregar estilos al modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid black';
  modal.style.borderRadius = '5px';
  modal.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '9999';

  // Agregar botón de cerrar al modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);

}

function ejercicio2() {
  // Definimos la temperatura en grados Centígrados
  const temperaturaCelsius_odcb = prompt("Ingrese la temperatura en grados Celsius:");

  // Calculamos la temperatura en grados Fahrenheit
  const temperaturaFahrenheit_odcb = (9 / 5) * temperaturaCelsius_odcb + 32;

  // Utilizamos el metodo toFixed para redondear a 2 decimales
  console.log(`La temperatura en grados Fahrenheit es de ${temperaturaFahrenheit_odcb.toFixed(2)}°F.`);

  // Mostrar el resultado en un modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = `La temperatura en grados Fahrenheit es de ${temperaturaFahrenheit_odcb.toFixed(2)}°F.`;

  document.body.appendChild(modal);

  // Agregar estilos al modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid black';
  modal.style.borderRadius = '5px';
  modal.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '9999';

  // Agregar botón de cerrar al modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);
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

  //utilizamos el metodo toFixed para redondear a 2 decimales
  console.log(`La nota final del primer parcial de "análisis" es aproximadamente ${notaFinal_odcb.toFixed(2)}.`);

  // Mostrar el resultado en un modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = `La nota final del primer parcial de "análisis" es aproximadamente ${notaFinal_odcb.toFixed(2)}.`;

  document.body.appendChild(modal);

  // Agregar estilos al modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid black';
  modal.style.borderRadius = '5px';
  modal.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '9999';

  // Agregar botón de cerrar al modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);
}

function ejercicio4() {
  // Definimos la tasa de interés anual (porcentaje)
  const tasaInteresAnual_odcb = prompt("Ingrese la tasa de interés anual:");

  // Convertmos la tasa de interés a decimal
  const tasaInteresDecimal_odcb = tasaInteresAnual_odcb / 100;

  // utilizamos el metodo math.log para calcular el tiempo de duplicación
  const tiempoDuplicacion_odcb = Math.log(2) / Math.log(1 + tasaInteresDecimal_odcb);

  console.log(`El capital se duplicará aproximadamente en ${tiempoDuplicacion_odcb.toFixed(2)} años.`);

  // Mostrar el resultado en un modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = `El capital se duplicará aproximadamente en ${tiempoDuplicacion_odcb.toFixed(2)} años.`;

  document.body.appendChild(modal);

  // Agregar estilos al modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid black';
  modal.style.borderRadius = '5px';
  modal.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '9999';

  // Agregar botón de cerrar al modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);
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

  //utilizamos el método join para mostrar los números separados por coma
  console.log(`Los números menores o iguales a 25 son: ${numerosMenoresOIguales25_odcb.join(', ')}.`);

  // Mostrar el resultado en un modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = `Los números menores o iguales a 25 son: ${numerosMenoresOIguales25_odcb.join(', ')}.`;

  document.body.appendChild(modal);

  // Agregar estilos al modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid black';
  modal.style.borderRadius = '5px';
  modal.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '9999';

  // Agregar botón de cerrar al modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);

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

  console.log(`El precio total de la venta es de ${totalPesos_odcb} pesos.`);

  // Mostrar el resultado en un modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = `El precio total de la venta es de ${totalPesos_odcb} pesos.`;

  document.body.appendChild(modal);

  // Agregar estilos al modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid black';
  modal.style.borderRadius = '5px';
  modal.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '9999';

  // Agregar botón de cerrar al modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);

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

  // Mostrar los pagos individuales (con o sin descuento)
  console.log('Pagos individuales:');
  for (let i_odcb = 0; i_odcb < consumosClientes_odcb.length; i_odcb++) {
    console.log(`Cliente ${i_odcb + 1}: ${consumosConDescuento_odcb[i_odcb]} pesos`);
    alert(`Cliente ${i_odcb + 1}: ${consumosConDescuento_odcb[i_odcb]} pesos`);
  }

  // Mostrar el total de todos los pagos (con descuento)
  // utilizamos el metodo reduce para sumar los consumos
  const totalPagosConDescuento_odcb = consumosConDescuento_odcb.reduce((total_odcb, consumo_odcb) => total_odcb + consumo_odcb, 0);
  console.log(`Total de todos los pagos (con descuento): ${totalPagosConDescuento_odcb} pesos`);

  // Mostrar el resultado en un modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = `Total de todos los pagos (con descuento): ${totalPagosConDescuento_odcb} pesos`;

  document.body.appendChild(modal);

  // Agregar estilos al modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid black';
  modal.style.borderRadius = '5px';
  modal.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '9999';

  // Agregar botón de cerrar al modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);
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

  console.log(`La hora en el siguiente segundo es: ${hora_odcb}:${minutos_odcb}:${segundos_odcb}`);

  // Mostrar el resultado en un modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = `La hora en el siguiente segundo es: ${hora_odcb}:${minutos_odcb}:${segundos_odcb}`;

  document.body.appendChild(modal);

  // Agregar estilos al modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid black';
  modal.style.borderRadius = '5px';
  modal.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '9999';

  // Agregar botón de cerrar al modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);
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

  console.log(`El producto desde 1 hasta ${N_odcb} es: ${producto_odcb}`);

  // Mostrar el resultado en un modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = `El producto desde 1 hasta ${N_odcb} es: ${producto_odcb}`;

  document.body.appendChild(modal);

  // Agregar estilos al modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid black';
  modal.style.borderRadius = '5px';
  modal.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '9999';

  // Agregar botón de cerrar al modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);
}

function ejercicio10() {
  // Ingresamos en numero, el número del cual queremos saber la tabla de multiplicar
  const numero_odcb = prompt("Ingrese un número entre 1 y 10 para mostrar su tabla de multiplicar decreciente:");
  let multiplicaciones = [];

  // Mostramos con un ciclo for la tabla de multiplicar decreciente
  for (let i_odcb = 10; i_odcb >= 1; i_odcb--) {
    console.log(`${numero_odcb} x ${i_odcb} = ${numero_odcb * i_odcb}`);
    multiplicaciones.push(`${numero_odcb} x ${i_odcb} = ${numero_odcb * i_odcb}`);
  }

  // Mostrar el resultado en un modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = `Tabla de multiplicar decreciente de ${numero_odcb}:\n${multiplicaciones.join('\n')}`;

  document.body.appendChild(modal);

  // Agregar estilos al modal
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.border = '1px solid black';
  modal.style.borderRadius = '5px';
  modal.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '9999';

  // Agregar botón de cerrar al modal
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Cerrar';
  closeButton.style.marginTop = '10px';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);
}

let tituloEjercicio = document.getElementById("tituloEjercicio");
let parrafoTexto = document.getElementById("parrafoTexto");
const contenedorBotones = document.getElementById("contenedorBotones");
const botonMostrarCodigo = document.getElementById("botonMostrarCodigo");
const botonMostrarDfd = document.getElementById("botonMostrarDfd");
const botonEjecutarCodigo = document.getElementById("botonEjecutarCodigo");
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
  "diagrama1": "img/dfdEjercicio1.png",
  "codigo1": "img/codigoEjercicio1.png",
  "pregunta2": "Realizar la conversión de una temperatura dada en grados Centígrados a grados Fahrenheit (Fórmula: F = (9/5) C + 32).",
  "diagrama2": "img/dfdEjercicio2.png",
  "codigo2": "img/codigoEjercicio2.png",
  "pregunta3": "Escribir el algoritmo que permite calcular la nota correspondiente al primer parcial de “análisis” para un estudiante cualquiera. Se debe considerar que hay dos talleres y un quiz, que en conjunto valen un 30% de la nota y el resto (70%) corresponde a la nota del examen parcial.",
  "diagrama3": "img/dfdEjercicio3.png",
  "codigo3": "img/codigoEjercicio3.png",
  "pregunta4": "Un capital C está situado a un tipo de interés R anual ¿al término de cuántos años se doblará?",
  "diagrama4": "img/dfdEjercicio4.png",
  "codigo4": "img/codigoEjercicio4.png",
  "pregunta5": "Elaborar un algoritmo que permita ingresar 20 números y muestre todos los números menores e iguales a 25.",
  "diagrama5": "img/dfdEjercicio5.png",
  "codigo5": "img/codigoEjercicio5.png",
  "pregunta6": "Hacer un programa que sume 5 precios de camisas (en dólares) y que luego muestre el total de la venta en pesos.",
  "diagrama6": "img/dfdEjercicio6.png",
  "codigo6": "img/codigoEjercicio6.png",
  "pregunta7": "Hacer un programa que registre el consumo realizado por los clientes de un restaurante, si el consumo de cada cliente excede 50000 se hará un descuento del 20%. Se debe mostrar el pago de cada cliente y el total de todos los pagos.",
  "diagrama7": "img/dfdEjercicio7.png",
  "codigo7": "img/codigoEjercicio7.png",
  "pregunta8": "Diseñar un algoritmo que permita ingresar la hora, minutos y segundos, y que calcule la hora en el siguiente segundo ('0<= H <=23', '0<= M <=59' '0<= S<=59').",
  "diagrama8": "img/dfdEjercicio8.png",
  "codigo8": "img/codigoEjercicio8.png",
  "pregunta9": "Dado N, escribir el producto desde 1 hasta N.",
  "diagrama9": "img/dfdEjercicio9.png",
  "codigo9": "img/codigoEjercicio9.png",
  "pregunta10": "Realizar un algoritmo que muestre por pantalla la tabla de multiplicar decreciente de cualquier número, ingresado entre el 1 y el 10.",
  "diagrama10": "img/dfdEjercicio10.png",
  "codigo10": "img/codigoEjercicio10.png"
};

function mostrarEjercicio1() {
  parrafoTexto.innerHTML = "";
  imagenEjercicio.src = "";
  tituloEjercicio.innerHTML = objetoEjercicios.titulo1;
  parrafoTexto.innerHTML = objetoEjercicios.pregunta1;
  contenedorBotones.style.display = "block";
  botonMostrarDfd.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.diagrama1;
  });
  botonMostrarCodigo.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.codigo1;
  });
  botonEjecutarCodigo.addEventListener("click", function () {
    ejercicio1();
  });
}

function mostrarEjercicio2() {
  parrafoTexto.innerHTML = "";
  imagenEjercicio.src = "";
  tituloEjercicio.innerHTML = objetoEjercicios.titulo2;
  parrafoTexto.innerHTML = objetoEjercicios.pregunta2;
  contenedorBotones.style.display = "block";
  botonMostrarDfd.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.diagrama2;
  });
  botonMostrarCodigo.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.codigo2;
  });
  botonEjecutarCodigo.addEventListener("click", function () {
    ejercicio2();
  });
}

function mostrarEjercicio3() {
  parrafoTexto.innerHTML = "";
  imagenEjercicio.src = "";
  tituloEjercicio.innerHTML = objetoEjercicios.titulo3;
  parrafoTexto.innerHTML = objetoEjercicios.pregunta3;
  contenedorBotones.style.display = "block";
  botonMostrarDfd.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.diagrama3;
  });
  botonMostrarCodigo.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.codigo3;
  });
  botonEjecutarCodigo.addEventListener("click", function () {
    ejercicio3();
  });
}

function mostrarEjercicio4() {
  parrafoTexto.innerHTML = "";
  imagenEjercicio.src = "";
  tituloEjercicio.innerHTML = objetoEjercicios.titulo4;
  parrafoTexto.innerHTML = objetoEjercicios.pregunta4;
  contenedorBotones.style.display = "block";
  botonMostrarDfd.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.diagrama4;
  });
  botonMostrarCodigo.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.codigo4;
  });
  botonEjecutarCodigo.addEventListener("click", function () {
    ejercicio4();
  });
}

function mostrarEjercicio5() {
  parrafoTexto.innerHTML = "";
  imagenEjercicio.src = "";
  tituloEjercicio.innerHTML = objetoEjercicios.titulo5;
  parrafoTexto.innerHTML = objetoEjercicios.pregunta5;
  contenedorBotones.style.display = "block";
  botonMostrarDfd.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.diagrama5;
  });
  botonMostrarCodigo.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.codigo5;
  });
  botonEjecutarCodigo.addEventListener("click", function () {
    ejercicio5();
  });
}

function mostrarEjercicio6() {
  parrafoTexto.innerHTML = "";
  imagenEjercicio.src = "";
  tituloEjercicio.innerHTML = objetoEjercicios.titulo6;
  parrafoTexto.innerHTML = objetoEjercicios.pregunta6;
  contenedorBotones.style.display = "block";
  botonMostrarDfd.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.diagrama6;
  });
  botonMostrarCodigo.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.codigo6;
  });
  botonEjecutarCodigo.addEventListener("click", function () {
    ejercicio6();
  });
}

function mostrarEjercicio7() {
  parrafoTexto.innerHTML = "";
  imagenEjercicio.src = "";
  tituloEjercicio.innerHTML = objetoEjercicios.titulo7;
  parrafoTexto.innerHTML = objetoEjercicios.pregunta7;
  contenedorBotones.style.display = "block";
  botonMostrarDfd.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.diagrama7;
  });
  botonMostrarCodigo.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.codigo7;
  });
  botonEjecutarCodigo.addEventListener("click", function () {
    ejercicio7();
  });
}

function mostrarEjercicio8() {
  parrafoTexto.innerHTML = "";
  imagenEjercicio.src = "";
  tituloEjercicio.innerHTML = objetoEjercicios.titulo8;
  parrafoTexto.innerHTML = objetoEjercicios.pregunta8;
  contenedorBotones.style.display = "block";
  botonMostrarDfd.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.diagrama8;
  });
  botonMostrarCodigo.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.codigo8;
  });
  botonEjecutarCodigo.addEventListener("click", function () {
    ejercicio8();
  });
}

function mostrarEjercicio9() {
  parrafoTexto.innerHTML = "";
  imagenEjercicio.src = "";
  tituloEjercicio.innerHTML = objetoEjercicios.titulo9;
  parrafoTexto.innerHTML = objetoEjercicios.pregunta9;
  contenedorBotones.style.display = "block";
  botonMostrarDfd.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.diagrama9;
  });
  botonMostrarCodigo.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.codigo9;
  });
  botonEjecutarCodigo.addEventListener("click", function () {
    ejercicio9();
  });
}

function mostrarEjercicio10() {
  parrafoTexto.innerHTML = "";
  imagenEjercicio.src = "";
  tituloEjercicio.innerHTML = objetoEjercicios.titulo10;
  parrafoTexto.innerHTML = objetoEjercicios.pregunta10;
  contenedorBotones.style.display = "block";
  botonMostrarDfd.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.diagrama10;
  });
  botonMostrarCodigo.addEventListener("click", function () {
    imagenEjercicio.src = objetoEjercicios.codigo10;
  });
  botonEjecutarCodigo.addEventListener("click", function () {
    ejercicio10();
  });
}
// function inserEjercicio1() {
//   // Obtener el elemento contenedor donde se insertará el HTML
//   const container = document.getElementById('areaContenedor');

//   // Limpiar el contenido previo
//   container.innerHTML = '';

//   // Crear el título de la sección
//   const title = document.createElement('h1');
//   title.textContent = 'Ejercicio 1';
//   container.appendChild(title);

//   const enunciado = document.createElement('p');
//   title.textContent = 'Un corredor de maratón (distancia 42,195 Km) ha recorrido la carrera en 2 horas 25 minutos. Se desea un algoritmo que calcule el tiempo medio en minutos por kilómetro.';
//   container.appendChild(enunciado);

//   // Crear el primer botón para cambiar la imagen por un área de texto
//   const button1 = document.createElement('button');
//   button1.textContent = 'Mostrar código';
//   button1.addEventListener('click', function() {
//     // Remover la imagen
//     container.removeChild(image);

//     // Crear el área de texto
//     const imagenCodigo = document.createElement('img');
//     imagenCodigo.src = './img/codigoEjercicio1.png';
//     container.appendChild(imagenCodigo);
//   });
//   container.appendChild(button1);

//   // Crear el segundo botón para ejecutar una función
//   const button2 = document.createElement('button');
//   button2.textContent = 'Ejecutar código';
//   button2.addEventListener('click', function() {
//     // Llamar a la función que se desea ejecutar
//     ejercicio1();
//   });
//   container.appendChild(button2);

//   // Crear la imagen
//   const image = document.createElement('img');
//   image.src = './img/dfdEjercicio1.png';
//   container.appendChild(image);
// }

// // Llamar a la función insertHTML cuando se presione el botón
// const botonEjercicio1 = document.getElementById('boton_Ejercicio1');
// botonEjercicio1.addEventListener('click', inserEjercicio1);

// function insertEjercicio2() {
//   // Obtener el elemento contenedor donde se insertará el HTML
//   const container = document.getElementById('areaContenedor');

//   // Limpiar el contenido previo
//   container.innerHTML = '';

//   // Crear el título de la sección
//   const title = document.createElement('h1');
//   title.textContent = 'Sección de Ejemplo';
//   container.appendChild(title);

//   // Crear el párrafo con el texto
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Este es un párrafo de ejemplo.';
//   container.appendChild(paragraph);

//   // Crear el botón para cambiar el texto del párrafo
//   const button = document.createElement('button');
//   button.textContent = 'Cambiar texto';
//   button.addEventListener('click', function () {
//     // Cambiar el texto del párrafo
//     paragraph.textContent = '¡Texto cambiado!';
//   });
//   container.appendChild(button);
// }

// // Llamar a la función insertHTML cuando se presione el botón
// const botonEjercicio2 = document.getElementById('boton_Ejercicio2');
// botonEjercicio2.addEventListener('click', insertEjercicio2);

// function insertEjercicio3() {
//   // Obtener el elemento contenedor donde se insertará el HTML
//   const container = document.getElementById('areaContenedor');

//   // Limpiar el contenido previo
//   container.innerHTML = '';

//   // Crear el título de la sección
//   const title = document.createElement('h1');
//   title.textContent = 'Sección de Ejemplo';
//   container.appendChild(title);

//   // Crear el párrafo con el texto
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Este es un párrafo de ejemplo.';
//   container.appendChild(paragraph);

//   // Crear el botón para cambiar el color del texto
//   const button = document.createElement('button');
//   button.textContent = 'Cambiar color';
//   button.addEventListener('click', function () {
//     // Cambiar el color del texto del párrafo
//     paragraph.style.color = 'red';
//   });
//   container.appendChild(button);
// }

// // Llamar a la función insertHTML cuando se presione el botón
// const botonEjercicio3 = document.getElementById('boton_Ejercicio3');
// botonEjercicio3.addEventListener('click', insertEjercicio3);

// function insertEjercicio4() {
//   // Obtener el elemento contenedor donde se insertará el HTML
//   const container = document.getElementById('areaContenedor');

//   // Limpiar el contenido previo
//   container.innerHTML = '';

//   // Crear el título de la sección
//   const title = document.createElement('h1');
//   title.textContent = 'Sección de Ejemplo';
//   container.appendChild(title);

//   // Crear el párrafo con el texto
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Este es un párrafo de ejemplo.';
//   container.appendChild(paragraph);

//   // Crear el botón para cambiar el tamaño del texto
//   const button = document.createElement('button');
//   button.textContent = 'Cambiar tamaño';
//   button.addEventListener('click', function () {
//     // Cambiar el tamaño del texto del párrafo
//     paragraph.style.fontSize = '24px';
//   });
//   container.appendChild(button);
// }

// // Llamar a la función insertHTML cuando se presione el botón
// const botonEjercicio4 = document.getElementById('boton_Ejercicio4');
// botonEjercicio4.addEventListener('click', insertEjercicio4);

// function insertEjercicio5() {
//   // Obtener el elemento contenedor donde se insertará el HTML
//   const container = document.getElementById('areaContenedor');

//   // Limpiar el contenido previo
//   container.innerHTML = '';

//   // Crear el título de la sección
//   const title = document.createElement('h1');
//   title.textContent = 'Sección de Ejemplo';
//   container.appendChild(title);

//   // Crear el párrafo con el texto
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Este es un párrafo de ejemplo.';
//   container.appendChild(paragraph);

//   // Crear el botón para cambiar el fondo del texto
//   const button = document.createElement('button');
//   button.textContent = 'Cambiar fondo';
//   button.addEventListener('click', function () {
//     // Cambiar el fondo del texto del párrafo
//     paragraph.style.backgroundColor = 'lightblue';
//   });
//   container.appendChild(button);
// }

// // Llamar a la función insertHTML cuando se presione el botón
// const botonEjercicio5 = document.getElementById('boton_Ejercicio5');
// botonEjercicio5.addEventListener('click', insertEjercicio5);

// function insertEjercicio6() {
//   // Obtener el elemento contenedor donde se insertará el HTML
//   const container = document.getElementById('areaContenedor');

//   // Limpiar el contenido previo
//   container.innerHTML = '';

//   // Crear el título de la sección
//   const title = document.createElement('h1');
//   title.textContent = 'Sección de Ejemplo';
//   container.appendChild(title);

//   // Crear el párrafo con el texto
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Este es un párrafo de ejemplo.';
//   container.appendChild(paragraph);

//   // Crear el botón para cambiar el borde del texto
//   const button = document.createElement('button');
//   button.textContent = 'Cambiar borde';
//   button.addEventListener('click', function () {
//     // Cambiar el borde del texto del párrafo
//     paragraph.style.border = '1px solid black';
//   });
//   container.appendChild(button);
// }

// // Llamar a la función insertHTML cuando se presione el botón
// const botonEjercicio6 = document.getElementById('boton_Ejercicio6');
// botonEjercicio6.addEventListener('click', insertEjercicio6);

// function insertEjercicio7() {
//   // Obtener el elemento contenedor donde se insertará el HTML
//   const container = document.getElementById('areaContenedor');

//   // Limpiar el contenido previo
//   container.innerHTML = '';

//   // Crear el título de la sección
//   const title = document.createElement('h1');
//   title.textContent = 'Sección de Ejemplo';
//   container.appendChild(title);

//   // Crear el párrafo con el texto
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Este es un párrafo de ejemplo.';
//   container.appendChild(paragraph);

//   // Crear el botón para cambiar el margen del texto
//   const button = document.createElement('button');
//   button.textContent = 'Cambiar margen';
//   button.addEventListener('click', function () {
//     // Cambiar el margen del texto del párrafo
//     paragraph.style.margin = '20px';
//   });
//   container.appendChild(button);
// }

// // Llamar a la función insertHTML cuando se presione el botón
// const botonEjercicio7 = document.getElementById('boton_Ejercicio7');
// botonEjercicio7.addEventListener('click', insertEjercicio7);

// function insertEjercicio8() {
//   // Obtener el elemento contenedor donde se insertará el HTML
//   const container = document.getElementById('areaContenedor');

//   // Limpiar el contenido previo
//   container.innerHTML = '';

//   // Crear el título de la sección
//   const title = document.createElement('h1');
//   title.textContent = 'Sección de Ejemplo';
//   container.appendChild(title);

//   // Crear el párrafo con el texto
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Este es un párrafo de ejemplo.';
//   container.appendChild(paragraph);

//   // Crear el botón para cambiar el padding del texto
//   const button = document.createElement('button');
//   button.textContent = 'Cambiar padding';
//   button.addEventListener('click', function () {
//     // Cambiar el padding del texto del párrafo
//     paragraph.style.padding = '20px';
//   });
//   container.appendChild(button);
// }

// // Llamar a la función insertHTML cuando se presione el botón
// const botonEjercicio8 = document.getElementById('boton_Ejercicio8');
// botonEjercicio8.addEventListener('click', insertEjercicio8);

// function insertEjercicio9() {
//   // Obtener el elemento contenedor donde se insertará el HTML
//   const container = document.getElementById('areaContenedor');

//   // Limpiar el contenido previo
//   container.innerHTML = '';

//   // Crear el título de la sección
//   const title = document.createElement('h1');
//   title.textContent = 'Sección de Ejemplo';
//   container.appendChild(title);

//   // Crear el párrafo con el texto
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Este es un párrafo de ejemplo.';
//   container.appendChild(paragraph);

//   // Crear el botón para cambiar la opacidad del texto
//   const button = document.createElement('button');
//   button.textContent = 'Cambiar opacidad';
//   button.addEventListener('click', function () {
//     // Cambiar la opacidad del texto del párrafo
//     paragraph.style.opacity = '0.5';
//   });
//   container.appendChild(button);
// }

// // Llamar a la función insertHTML cuando se presione el botón
// const botonEjercicio9 = document.getElementById('boton_Ejercicio9');
// botonEjercicio9.addEventListener('click', insertEjercicio9);

// function insertEjercicio10() {
//   // Obtener el elemento contenedor donde se insertará el HTML
//   const container = document.getElementById('areaContenedor');

//   // Limpiar el contenido previo
//   container.innerHTML = '';

//   // Crear el título de la sección
//   const title = document.createElement('h1');
//   title.textContent = 'Sección de Ejemplo';
//   container.appendChild(title);

//   // Crear el párrafo con el texto
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Este es un párrafo de ejemplo.';
//   container.appendChild(paragraph);

//   // Crear el botón para cambiar la visibilidad del texto
//   const button = document.createElement('button');
//   button.textContent = 'Cambiar visibilidad';
//   button.addEventListener('click', function () {
//     // Cambiar la visibilidad del texto del párrafo
//     paragraph.style.visibility = 'hidden';
//   });
//   container.appendChild(button);
// }

// // Llamar a la función insertHTML cuando se presione el botón
// const botonEjercicio10 = document.getElementById('boton_Ejercicio10');
// botonEjercicio10.addEventListener('click', insertEjercicio10);



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
}

// Mostrar el total de todos los pagos (con descuento)
// utilizamos el metodo reduce para sumar los consumos
const totalPagosConDescuento_odcb = consumosConDescuento_odcb.reduce((total_odcb, consumo_odcb) => total_odcb + consumo_odcb, 0);
console.log(`Total de todos los pagos (con descuento): ${totalPagosConDescuento_odcb} pesos`);



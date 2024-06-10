// Precios de las camisas en dólares
const precioCamisa1_odcb = 20;
const precioCamisa2_odcb = 30;
const precioCamisa3_odcb = 25;
const precioCamisa4_odcb = 40;
const precioCamisa5_odcb = 35;

// Calculemos el total en dólares
const totalDolares_odcb = precioCamisa1_odcb + precioCamisa2_odcb + precioCamisa3_odcb + precioCamisa4_odcb + precioCamisa5_odcb;

// Cambio de dolar a peso colombiano (1 dólar = 3800 pesos)
const tipoCambio_odcb = 3800;

// Calculemos el total en pesos
const totalPesos_odcb = totalDolares_odcb * tipoCambio_odcb;

console.log(`El precio total de la venta es de ${totalPesos_odcb} pesos.`);

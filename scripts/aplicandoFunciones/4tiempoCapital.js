// Definimos la tasa de interés anual (porcentaje)
const tasaInteresAnual_odcb = 5; // Ejemplo: 5%

// Convertmos la tasa de interés a decimal
const tasaInteresDecimal_odcb = tasaInteresAnual_odcb / 100;

// utilizamos el metodo math.log para calcular el tiempo de duplicación
const tiempoDuplicacion_odcb = Math.log(2) / Math.log(1 + tasaInteresDecimal_odcb);

console.log(`El capital se duplicará aproximadamente en ${tiempoDuplicacion_odcb.toFixed(2)} años.`);

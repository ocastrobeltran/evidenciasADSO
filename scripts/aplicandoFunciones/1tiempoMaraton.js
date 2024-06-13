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
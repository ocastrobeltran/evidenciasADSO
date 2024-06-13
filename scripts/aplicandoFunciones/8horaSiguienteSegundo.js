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

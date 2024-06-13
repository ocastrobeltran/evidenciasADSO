// Definimos la temperatura en grados Centígrados
const temperaturaCelsius_odcb = 25;

// Calculamos la temperatura en grados Fahrenheit
const temperaturaFahrenheit_odcb = (9 / 5) * temperaturaCelsius_odcb + 32;

// Utilizamos el metodo toFixed para redondear a 2 decimales
console.log(`La temperatura en grados Fahrenheit es de ${temperaturaFahrenheit_odcb.toFixed(2)}°F.`);
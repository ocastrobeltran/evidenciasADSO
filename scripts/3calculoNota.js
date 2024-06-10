// Notas de talleres y quiz
const notaTaller1_odcb = 4;
const notaTaller2_odcb = 5;
const notaQuiz_odcb = 3;
const notaExamenParcial_odcb = 5;

// Calculamos el promedio de las notas de los talleres y el quiz
const notaTrabajos_odcb = (notaTaller1_odcb + notaTaller2_odcb + notaQuiz_odcb) / 3;

// Calculamos la nota final 
const notaFinal_odcb = (0.3 * notaTrabajos_odcb) + (0.7 * notaExamenParcial_odcb);

//utilizamos el metodo toFixed para redondear a 2 decimales
console.log(`La nota final del primer parcial de "análisis" es aproximadamente ${notaFinal_odcb.toFixed(2)}.`);
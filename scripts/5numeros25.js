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

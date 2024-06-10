// definimos el valor de N
const N_odcb = 5;

// Inicializamos el producto
let producto_odcb = 1;

// Calculamos el producto desde 1 hasta N
for (let i_odcb = 1; i_odcb <= N_odcb; i_odcb++) {
  producto_odcb *= i_odcb;
}

console.log(`El producto desde 1 hasta ${N_odcb} es: ${producto_odcb}`);


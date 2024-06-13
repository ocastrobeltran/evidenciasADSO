function pedirDatosYCalcular() {
    let figura = prompt("¿Qué figura deseas calcular (triangulo, rectangulo, cuadrado, circulo)?");
    let dimensiones = {};

    switch(figura) {
        case 'triangulo':
            dimensiones.a = parseFloat(prompt("Ingresa el valor del lado a"));
            dimensiones.b = parseFloat(prompt("Ingresa el valor del lado b"));
            dimensiones.c = parseFloat(prompt("Ingresa el valor del lado c"));
            dimensiones.h = parseFloat(prompt("Ingresa el valor de la altura h"));
            break;
        case 'rectangulo':
            dimensiones.largo = parseFloat(prompt("Ingresa el valor del largo"));
            dimensiones.ancho = parseFloat(prompt("Ingresa el valor del ancho"));
            break;
        case 'cuadrado':
            dimensiones.lado = parseFloat(prompt("Ingresa el valor del lado"));
            break;
        case 'circulo':
            dimensiones.radio = parseFloat(prompt("Ingresa el valor del radio"));
            break;
        default:
            console.log('Figura no reconocida');
            return;
    }

    let resultado = calcularPerimetroYArea(figura, dimensiones);
    console.log(`Perímetro: ${resultado.perimetro}, Área: ${resultado.area}`);
}

function calcularPerimetroYArea(figura, dimensiones) {
    let perimetro = 0;
    let area = 0;

    switch(figura) {
        case 'triangulo':
            let a = dimensiones.a;
            let b = dimensiones.b;
            let c = dimensiones.c;
            let h = dimensiones.h;
            perimetro = a + b + c;
            area = (b * h) / 2;
            break;
        case 'rectangulo':
            let largo = dimensiones.largo;
            let ancho = dimensiones.ancho;
            perimetro = 2 * (largo + ancho);
            area = largo * ancho;
            break;
        case 'cuadrado':
            let lado = dimensiones.lado;
            perimetro = 4 * lado;
            area = Math.pow(lado, 2);
            break;
        case 'circulo':
            let radio = dimensiones.radio;
            perimetro = 2 * Math.PI * radio;
            area = Math.PI * Math.pow(radio, 2);
            break;
        default:
            console.log('Figura no reconocida');
    }

    return {
        perimetro: perimetro,
        area: area
    };
}

pedirDatosYCalcular();

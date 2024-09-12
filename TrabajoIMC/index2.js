function calcular(peso, altura) {
    return peso / (altura * altura);
}

function obtenerNivelPeso(imc) {
    let nivelPeso;
    switch(true) {
        case (imc < 18.5):
            nivelPeso = "Bajo Peso";
            break; 
        case (imc >= 18.5 && imc <= 24.9):
            nivelPeso = "Peso Saludable";
            break;
        case (imc >= 25.0 && imc <= 29.9):
            nivelPeso = "Sobrepeso";
            break;
        case (imc >= 30):
            nivelPeso = "Obesidad";
            break;
        default:
            nivelPeso = "Invalido";
            break;
    }
    return nivelPeso;
}

function mostrar(resultado, nivelPeso, nombre, apellido) {
    console.log(resultado);
    document.getElementById("resultado").innerHTML = 
    `<h2>Hola ${nombre} ${apellido}, tu IMC es ${nivelPeso}</h2>`;
}

document.getElementById("miBoton").onclick = () => {
    peso = Number(document.getElementById("peso").value);
    altura = Number(document.getElementById("altura").value);
    apellido = document.getElementById("apellido").value;
    nombre = document.getElementById("nombre").value;

    let imc = calcular(peso, altura);
    let nivelPeso = obtenerNivelPeso(imc);

    mostrar(imc, nivelPeso, nombre, apellido);
}

const botonCalcular = document.getElementById("calcular")
botonCalcular.addEventListener('click', calcular)

function calcular() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    if (altura > 0 && peso > 0) {
        const alturaMetros = altura / 100;
        const bmi = (peso / (alturaMetros * alturaMetros)).toFixed(1);
        
        document.getElementById('bmi').innerText = `Tu IMC es: ${bmi}`;
        console.log("87")
        let nivelPeso = '';
        if (bmi < 18.5) {
            nivelPeso = 'Bajo peso';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            nivelPeso = 'Peso saludable';
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            nivelPeso = 'Sobrepeso';
        } else {
            nivelPeso = 'Obesidad';
        }
        
        document.getElementById('nivelPeso').innerText = `Nivel de peso: ${nivelPeso}`;
    } else {
        document.getElementById('bmi').innerText = 'Por favor ingresa valores válidos.';
    }
    
}

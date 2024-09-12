
const botonCalcular = document.getElementById("calcular")
botonCalcular.addEventListener('click', calcular)

function calcular() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    if (altura > 0 && peso > 0) {
        const alturaMetros = altura / 100;
        const bmi = (peso / (alturaMetros * alturaMetros)).toFixed(1);
        document.getElementById('saludo').innerText = "Nombre del paciente: "+nombre+" "+apellido;
        document.getElementById('bmi').innerText = "Tu IMC es: "+bmi;
        let nivelPeso = '';
        if (bmi < 18.5) {
            nivelPeso = 'Bajo peso';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            nivelPeso = 'Saludable';
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            nivelPeso = 'Sobrepeso';
        } else {
            nivelPeso = 'Obesidad';
        }
        
        document.getElementById('nivelPeso').innerText = "Nivel de peso: "+nivelPeso;
    } else {
        document.getElementById('bmi').innerText = 'Por favor ingresa valores válidos.';
    }
    
}

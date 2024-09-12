function calcularIMC(nombre, apellido, peso, altura){
    let indiceMasaCorporal=peso/altura**2;
    console.log(indiceMasaCorporal);
    let nivelPeso="";
    if (indiceMasaCorporal<18.5){
        nivelPeso="Bajo Peso";
    }else if (indiceMasaCorporal>=18.5 && indiceMasaCorporal<25) {
        nivelPeso="Peso Saludable";
    }else if (indiceMasaCorporal>=25 && indiceMasaCorporal<30) {
        nivelPeso="Sobrepeso";
    }else if (indiceMasaCorporal>=30) {
        nivelPeso="Obesidad";
    }
    const numeroContenedor=document.getElementById('resultado');
    numeroContenedor.textContent='Hola '+ nombre +' ' + apellido + ', tu IMC es ' +indiceMasaCorporal.toFixed(2) + " - "+ nivelPeso ;
}

function resolver(){
    let nombre= document.getElementById('nombre').value;
    let apellido= document.getElementById('apellido').value;
    let peso=parseFloat(document.getElementById('peso').value);
    let altura=parseFloat(document.getElementById('altura').value);

    if (nombre === '' || apellido === '' || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
        const resultadoContenedor=document.getElementById('resultado');
        resultadoContenedor.textContent= 'Complete todos los campos correctamente. Recuerda que la altura y el peso deben ser mayores a cero.';
    }else{
        calcularIMC(nombre, apellido, peso, altura);  
    }
}




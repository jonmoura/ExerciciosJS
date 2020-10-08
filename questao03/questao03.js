function calcular() {

    var valorA = document.calculo.valorA.value;
    var valorB = document.calculo.valorB.value;

    if(valorA == valorB) {
        var resultado = parseFloat(valorA) + parseFloat(valorB);
    } else {
        var resultado = parseFloat(valorA) * parseFloat(valorB);
    }

    document.calculo.resultado.value = resultado;
}
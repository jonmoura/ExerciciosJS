function calcular(){

    var valor1 = parseFloat(document.op.valor1.value);
    var valor2 = parseFloat(document.op.valor2.value);
    var valor3 = parseFloat(document.op.valor3.value);
    var resultado = parseFloat(document.op.resultado.value);

    resultado = (valor1 + valor2 + valor3) / 3;

    document.op.resultado.value = resultado;
      
}
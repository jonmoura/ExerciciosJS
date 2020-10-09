function calcular(){

    let nome = (document.op.nome.value);
    var valor = parseFloat(document.op.valor.value);
    
    var resultado = parseFloat((valor + valor*0.1));
    
    document.op.resultado.value = resultado;
     
}

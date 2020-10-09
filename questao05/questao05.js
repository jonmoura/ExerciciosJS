function calcular(){
    let nome = (document.op.nome.value);
    var valor1 = parseFloat(document.op.nota1.value);
    var valor2 = parseFloat(document.op.nota2.value);
    var valor3 = parseFloat(document.op.nota3.value);

    var media = (valor1 + valor2 + valor3) / 3;
    resultado = nome + " " + media.toFixed(2);
 
    if(media >= 8){
       aprovado = "sim";
       
    }
    else{
       aprovado = "não";
    }
      
      document.op.aprovado.value = aprovado;
      document.op.resultado.value = resultado;
 
}
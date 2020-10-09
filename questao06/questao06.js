function calcular(){

    var valor1 = parseFloat(document.op.valor1.value);
    var valor2 = parseFloat(document.op.valor2.value);
    var valor3 = parseInt(document.op.valor3.value);
     
    switch(valor3){
        case 1:
            resultado = valor1 + valor2;
              
            break;
        case 2:
            resultado = valor1 * valor2;
             
            break;
        case 3:
            if(valor2 === 0){
               alert('Divisão por zero não permitida');
               resultado = "";
               break;
            }
            resultado = valor1 / valor2;
 
            break;
 
        default:
            resultado = 0;
            alert('Opção inválida!');
      }
      
    document.op.resultado.value = resultado;
 
}
 
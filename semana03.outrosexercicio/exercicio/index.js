const minhaDiv =document.getElementById("resultado")


function imprimirInput() {
    const input = document.getElementById("numero")
let contador = 0

while (contador < input.value){
    minhaDiv.innerHTML += input.value;
    contador = contador + 1;
}



    
    // let contador = 0;
    //while (contador < 2) {
        //console.log("contador:" , contador);
        //contador++;
  //  }
}







// REST ===================
// ========================

// crie uma função para aceitar um array de valores utilize o operador rest para <br> transformar a função abaixo:

function somarNumeros (numero1, nuemero2) {
    return numero1+nuemero2;
}
// somarNumeros(1,2)

function somarNumerosComRest(nome, sobrenome, ...listaDeNumeros){
    const nomeCompleto = '${nome} '
    for (numero of listaDeNumeros) {
        resultadoDaSoma += numero;
    }

    return resultadoDaSoma + "";
}
//somarNumerosComRest(1,2)
//somarNumeroConstRest(1,2,3)




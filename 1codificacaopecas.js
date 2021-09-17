console.log('___________________________________')

console.log('insira o peso da peça:')

var pesoPeça = 180;
var pesoMinimo = 100;
console.log("[" + pesoPeça + "]")
console.log('___________________________________')
    if (pesoPeça > pesoMinimo ){
        console.log(pesoPeça +' gramas:' + ' peça cadastrada');
    }else{

        console.log('peso insuficiente para cadastrar');
    }
console.log('___________________________________')

console.log("insira o nome da peça:")

var nomePeca = "engrenagem" // o nome da peça influencia se ela será ou nao colocada no programa, colocar 2 caracteres para testar erro.

console.log("[" + nomePeca + "]")

var tamanhoCaracter= nomePeca.length >= 3 ? 'aprovado' : 'erro caracteres menor que 3';
console.log(tamanhoCaracter);
    if (tamanhoCaracter= nomePeca.length <= 3){
        console.log("cadastro encerrado")

    }
    else{
        let listaDePecas = ["cone", "parafuso", "Imã", "arruela",];
        let quantidadeDePecas = listaDePecas.length;
            
            if (quantidadeDePecas < 11) {
        
            listaDePecas.push(nomePeca);
            console.log('___________________________________')   
            console.log('Lista de Peças:')
            console.log(listaDePecas);
            } else {
            console.log("Capacidade Insuficiente: Limite de 10 peças cadastradas");
                
        }
        
        
        

    }





   






   

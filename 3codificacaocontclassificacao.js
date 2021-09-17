//Codificão de um sistema de contagem e classificacao
var numAlunos = 40

for (let numAlunos = 0; numAlunos<=40; numAlunos++){
    if(numAlunos<=9 ) numAlunos = '0'+numAlunos;
    if (numAlunos === 0){

        console.log('o número é zero');

    }else if (numAlunos%2 == 0){

        console.log('o número '+numAlunos+ ' é par' );

    }else{

        console.log('o número '+numAlunos+ ' é impar');

    }
    
}

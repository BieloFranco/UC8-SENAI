// Codificacao de um sistema de cadastro de eventos
// cadastro efetuado
// funcao de data atual
function dataAtual(data = new Date()){ //se a data não for alterada é data atual
    var dia = data.getDate();//se a data não for alterada é data atual
    var mes = data.getMonth();//se o mes não for alterada é o atual
    var ano = data.getFullYear();//se o ano não for alterada é o atual

    if(dia.toString().length == 1) dia = '0'+dia;//conta os caracteres pra adicionar o 0
    if(mes.toString().length == 1) mes = '0'+mes;

    return dia+'/'+mes+'/'+ano;
}
console.log(dataAtual());// CONSULTA DATA ATUAL

// funcao de data evento
function dataEvento(data = new Date(2021,09,10,18,00,00,000)){ //evento com data para dia 10/09/2021 as 18hrs
    var dia = data.getDate();//se a data não for alterada é data atual
    var mes = data.getMonth();//se o mes não for alterada é o atual
    var ano = data.getFullYear();//se o ano não for alterada é o atual
    if(dia.toString().length == 1) dia = '0'+dia;
    if(mes.toString().length == 1) mes = '0'+mes;

    return dia+'/'+mes+'/'+ano;
}
console.log("evento em: " + dataEvento());// CONSULTA DATA EVENTO

var verificarData = dataAtual() >= dataEvento()  ? 'data válida' : dataAtual() +' cadastro não permitido FORA DO PRAZO' 
console.log(verificarData);//primeira classificacao

console.log('----------------------------------------------');

var participante = 1;
var quantParticipantes = 90;

    if (participante + quantParticipantes <= 100){
        console.log('contém vaga para evento');
    }else{
        console.log('vagas para participantes lotadas');
    }
        
    var total = participante + quantParticipantes 
    
console.log(total + " vagas preenchidas de 100")

console.log('----------------------------------------------');


console.log('insira sua idade');

var idade = 18;
var verificarIdade = idade >= 18  ? idade + ' anos' +' idade válida' : idade +' idade não permitida';
console.log(verificarIdade);

console.log('----------------------------------------------');

console.log("cadastro efetuado")














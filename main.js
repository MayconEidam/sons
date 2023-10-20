//Declaração/criação da função tocaSomMsg
function tocaSomMsg(){
    document.querySelector('#som_tecla_msg').play();
}
//chamada ou invocação da função tocaSomMsg ao clicar no botão
document.querySelector('.tecla_msg').onclick=tocaSomMsg;



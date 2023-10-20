//Declaração/criação da função tocaSomMsg
function tocaSomMsg(){
    document.querySelector('#som_tecla_msg').play();
}
//chamada ou invocação da função tocaSomMsg ao clicar no botão
document.querySelector('.tecla_msg').onclick = tocaSomMsg;

//Declaração/criação da função tocaSomGmd
function tocaSomGmd(){
    document.querySelector('#som_tecla_gmd').play();
}
//chamada ou invocação da função tocaSomGmd ao clicar no botão
document.querySelector('.tecla_gmd').onclick = tocaSomGmd;

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

//Declaração/criação da função tocaSomLaele
function tocaSomLaele(){
    document.querySelector('#som_tecla_laele').play();
}
//chamada ou invocação da função tocaSomLaele ao clicar no botão
document.querySelector('.tecla_laele').onclick = tocaSomLaele;
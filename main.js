//Declaração/criação da função tocaSomMsg
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < ListaDeTeclas.length; contador++){
    const teclas = ListaDeTeclas [contador]
    const efeito = teclas.classList[1];
    const idAudio = `#som_${efeito}`;
    teclas.onclick = function(){
        tocaSom(idAudio);
    }
    teclas.onkeydown = function(){
    teclas.classList.add('ativa'); 
    }
    teclas.onkeydown = function(){
        teclas.classList.remove('ativa'); 
    }
}
//Declaração/criação da função tocaSomMsg
function tocaSomMsg(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while (contador < ListaDeTeclas.length){
    const teclas = ListaDeTeclas [contador]
    const efeito = teclas.classList[1];
    const idAudio = `"#som_"${efeito}`;
    teclas.onclick = function(){
        tocaSomMsg(idAudio);
    }
 contador = contador + 1;
 console.log(contador);   
}
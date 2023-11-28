function alterarCor() {
    let corFundo = '#F3A712';
    let cabecalho = document.querySelectorAll('.menu-link');
    let corTexto = document.querySelectorAll('.card-texto');
    let nomeAluno = document.querySelectorAll('.nome-aluno');
    let tituloDesc = document.querySelectorAll('.titulo-descricao');
    let corLinks = document.querySelectorAll('.card-link');
    let rodape = document.querySelectorAll('.rodape');
    let botao = document.querySelector('#botao')
    
    if (botao.value === 'DARK MODE') {
        botao.value = 'WHITE MODE';
        botao.style.color = corFundo;
        botao.style.backgroundColor = '#141414';
        document.body.style.backgroundColor = corFundo

        cabecalho.forEach(function(cabecalho){
            cabecalho.style.color = '#141414';
        })
        
        corTexto.forEach(function(corTexto){
            corTexto.style.color = '#BB4430';
            // console.log('funciona')
        });

        nomeAluno.forEach(function(nomeAluno){
            nomeAluno.style.color = '#EEF0F2';
        })

        tituloDesc.forEach(function(tituloDesc) {
            tituloDesc.style.color = '#011638'; 
        });

        corLinks.forEach(function(corLinks){
            corLinks.style.color = '#BB4430';
        })

        rodape.forEach(function(rodape){
            rodape.style.backgroundColor = '#141414'
            rodape.style.color = '#F3A712'
        })

      } else {
        botao.value = 'DARK MODE';
        botao.style.color = '#EBE9E9';
        botao.style.backgroundColor = '#3581B8';
        document.body.style.backgroundColor = '#EBE9E9'

        cabecalho.forEach(function(cabecalho){
            cabecalho.style.color = '#3581B8';
        })

        corTexto.forEach(function(corTexto){
            corTexto.style.color = '#ff802c';
        });

        nomeAluno.forEach(function(nomeAluno){
            nomeAluno.style.color = '#3581B8';
        })

        tituloDesc.forEach(function(tituloDesc) {
            tituloDesc.style.color = '#3581B8'; 
          });

        corLinks.forEach(function(corLinks){
            corLinks.style.color = '#ff802c';
        })

        rodape.forEach(function(rodape){
            rodape.style.backgroundColor = '#3581B8'
            rodape.style.color = '#EBE9E9'
        })

      }
}
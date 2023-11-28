function alterarCor() {
    let cabecalho = document.querySelectorAll('.menu-link');
    let corTexto = document.querySelectorAll('.card-texto');
    let nomeAluno = document.querySelectorAll('.nome-aluno');
    let tituloDesc = document.querySelectorAll('.titulo-descricao');
    let corLinks = document.querySelectorAll('.card-link');
    let rodape = document.querySelectorAll('.rodape');
    let botao = document.querySelector('#botao')

    let modoAtual = localStorage.getItem('modo');

    //dark mode
    let corBodyD = '#1d1d1d'
    let corCabecalhoD = '#ffffff'
    let corNomesD = '#28a745'
    let corTextosD = '#ffc107'
    let corExtraD = '#9b59b6'

    //white mode
    let corBodyW = '#ffffff'
    let corCabecalhoW = '#333333'
    let corNomesW = '#1abc9c'
    let corTextosW = '#ff802c'
    let corExtraW = '#9b59b6'

    if (botao.value === 'DARK MODE') {
        botao.value = 'WHITE MODE';
        botao.style.color = corBodyD;
        botao.style.backgroundColor = corNomesD;
        document.body.style.backgroundColor = corBodyD

        cabecalho.forEach(function(cabecalho){
            cabecalho.style.color = corCabecalhoD;
        })
        
        corTexto.forEach(function(corTexto){
            corTexto.style.color = corTextosD;
            // console.log('funciona')
        });

        nomeAluno.forEach(function(nomeAluno){
            nomeAluno.style.color = corNomesD;
        })

        tituloDesc.forEach(function(tituloDesc) {
            tituloDesc.style.color = corExtraD; 
        });

        corLinks.forEach(function(corLinks){
            corLinks.style.color = corTextosD;
        })

        rodape.forEach(function(rodape){
            rodape.style.backgroundColor = corExtraD
            rodape.style.color = corBodyD
        })

      } else {
        botao.value = 'DARK MODE';
        botao.style.color = corBodyW;
        botao.style.backgroundColor = corNomesW;
        document.body.style.backgroundColor = corBodyW

        cabecalho.forEach(function(cabecalho){
            cabecalho.style.color = corCabecalhoW;
        })

        corTexto.forEach(function(corTexto){
            corTexto.style.color = corTextosW;
        });

        nomeAluno.forEach(function(nomeAluno){
            nomeAluno.style.color = corNomesW;
        })

        tituloDesc.forEach(function(tituloDesc) {
            tituloDesc.style.color = corExtraW; 
          });

        corLinks.forEach(function(corLinks){
            corLinks.style.color = corTextosW;
        })

        rodape.forEach(function(rodape){
            rodape.style.backgroundColor = corExtraW
            rodape.style.color = corBodyW
        })
      }
}
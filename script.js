
function alterarCor() {
    let cabecalho = document.querySelectorAll('.menu-link');
    let corTexto = document.querySelectorAll('.card-texto');
    let nomeAluno = document.querySelectorAll('.nome-aluno');
    let tituloDesc = document.querySelectorAll('.titulo-descricao');
    let corLinks = document.querySelectorAll('.card-link');
    let rodape = document.querySelectorAll('.rodape');
    let botao = document.querySelector('#botao');
    let botaoAumenta = document.querySelector('.botao-fonte');
    let botaoDiminui = document.querySelector('.botao-fonte-menos');

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
        botaoAumenta.style.color = corBodyD
        botaoAumenta.style.backgroundColor = corNomesD
        botaoDiminui.style.color = corBodyD
        botaoDiminui.style.backgroundColor = corNomesD
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
        botaoAumenta.style.color = corBodyW;
        botaoAumenta.style.backgroundColor = corNomesW;
        botaoDiminui.style.color = corBodyW;
        botaoDiminui.style.backgroundColor = corNomesW;
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

function aumentaFonte() {
    let paragrafo = document.querySelectorAll('.card-texto');
    
    paragrafo.forEach(function(paragrafo){
        let estiloAtual = window.getComputedStyle(paragrafo, null).getPropertyValue('font-size');

        if (estiloAtual) {
            let tamanhoTotal = parseFloat(estiloAtual)
            let novoTamanho = tamanhoTotal * 1.2
            paragrafo.style.fontSize = novoTamanho + 'px'
        }
    })
}

function diminuiFonte() {
    let paragrafo = document.querySelectorAll('.card-texto');
    
    paragrafo.forEach(function(paragrafo){
        let estiloAtual = window.getComputedStyle(paragrafo, null).getPropertyValue('font-size');

        if (estiloAtual) {
            let tamanhoTotal = parseFloat(estiloAtual)
            let novoTamanho = tamanhoTotal - (tamanhoTotal * 0.2)
            paragrafo.style.fontSize = novoTamanho + 'px'
        }
    })
}

